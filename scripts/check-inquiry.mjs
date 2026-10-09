import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

// Exercise the real route with an isolated mail provider. No email is sent.
const source = readFileSync(new URL('../app/api/anfrage/route.ts', import.meta.url), 'utf8');
const code = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
let deliveries = [];
let providerOk = true;
const env = { RESEND_API_KEY: 'test-only', RESEND_FROM_EMAIL: 'test@example.com' };
const context = vm.createContext({
  exports: {}, process: { env }, AbortSignal, URL,
  require: () => ({ NextResponse: { json: (body, options) => Response.json(body, options) } }),
  fetch: async (_url, options) => { deliveries.push(JSON.parse(options.body)); return new Response('', { status: providerOk ? 200 : 502 }); },
});
vm.runInContext(code, context);
const base = { name: 'Testkunde', email: 'test@example.com', privacy: 'yes', intent: 'beratung' };
const request = (data, origin = 'https://cinema7.de') => new Request('https://cinema7.de/api/anfrage', {
  method: 'POST', headers: { origin, host: 'cinema7.de', 'content-type': 'application/json' }, body: JSON.stringify(data),
});
const post = context.exports.POST;
assert.equal((await post(request(base))).status, 200, 'Initial inquiry needs no project description');
assert.equal(deliveries.length, 1);
assert.equal(deliveries[0].reply_to, base.email);
assert.match(deliveries[0].text, /Keine weitere Nachricht/);
assert.equal((await post(request({ ...base, intent: 'showroom', model: '217', phone: '+49 123', message: 'Freitag' }))).status, 200);
assert.match(deliveries[1].subject, /Vorführung.*217/);
assert.match(deliveries[1].text, /Telefon: \+49 123/);
for (const data of [null, [], { ...base, email: 'invalid' }, { ...base, privacy: '' }, { ...base, name: ' ' }, { ...base, intent: 'invalid' }]) {
  assert.equal((await post(request(data))).status, 400);
}
assert.equal((await post(request(base, 'https://other.example'))).status, 403);
assert.equal((await post(request(base, 'not-a-url'))).status, 400);
const beforeTrap = deliveries.length;
assert.equal((await post(request({ ...base, website: 'spam' }))).status, 200);
assert.equal(deliveries.length, beforeTrap, 'Honeypot must not deliver mail');
providerOk = false;
assert.equal((await post(request(base))).status, 502, 'Provider failure must not report success');
delete env.RESEND_API_KEY;
assert.equal((await post(request(base))).status, 503, 'Missing setup must not report success');
console.log('Inquiry route checks passed: validation, optional message, showroom, reply-to, honeypot, provider failure and missing configuration. No emails sent.');