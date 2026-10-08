"use client";

import { useRef, useState } from "react";
import type { CSSProperties, KeyboardEvent, PointerEvent } from "react";
import "./flower-image-compare.css";

const beamerImage =
  "https://raw.githubusercontent.com/dennis-glaser-coder/cinema-n7/main/flower-beamer.webp";
const ledImage =
  "https://raw.githubusercontent.com/dennis-glaser-coder/cinema-n7/main/flower-led.webp";

export default function FlowerImageCompare() {
  const [position, setPosition] = useState(50);
  const draggingPointer = useRef<number | null>(null);

  function updateFromPointer(event: PointerEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    if (bounds.width === 0) return;
    const next = (100 * (event.clientX - bounds.left)) / bounds.width;
    setPosition(Math.max(0, Math.min(100, next)));
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    draggingPointer.current = event.pointerId;
    event.currentTarget.setPointerCapture(event.pointerId);
    updateFromPointer(event);
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (draggingPointer.current === event.pointerId) updateFromPointer(event);
  }

  function stopDragging(event: PointerEvent<HTMLDivElement>) {
    if (draggingPointer.current === event.pointerId) {
      draggingPointer.current = null;
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    switch (event.key) {
      case "ArrowLeft":
      case "ArrowDown":
        setPosition((current) => Math.max(0, current - 5));
        break;
      case "ArrowRight":
      case "ArrowUp":
        setPosition((current) => Math.min(100, current + 5));
        break;
      case "Home":
        setPosition(0);
        break;
      case "End":
        setPosition(100);
        break;
      default:
        return;
    }
    event.preventDefault();
  }

  return (
    <div className="cn7-image-compare-block">
      <div
      className="cn7-image-compare"
      role="slider"
      tabIndex={0}
      aria-label="Bildvergleich: Projektion links, LED rechts"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(position)}
      aria-valuetext={`${Math.round(position)} Prozent Projektion, ${Math.round(100 - position)} Prozent LED`}
      style={{ "--cn7-divider-position": `${position}%` } as CSSProperties}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDragging}
      onPointerCancel={stopDragging}
      onLostPointerCapture={() => {
        draggingPointer.current = null;
      }}
      onKeyDown={handleKeyDown}
    >
      <img
        className="cn7-image-compare__base"
        src={beamerImage}
        alt=""
        draggable={false}
        decoding="async"
        loading="lazy"
      />
      <div className="cn7-image-compare__overlay" aria-hidden="true">
        <img
          src={ledImage}
          alt=""
          draggable={false}
          decoding="async"
          loading="lazy"
        />
      </div>
      <div className="cn7-image-compare__divider" aria-hidden="true">
        <span className="cn7-image-compare__handle">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 7-5 5 5 5M15 7l5 5-5 5" />
          </svg>
        </span>
      </div>
      <div className="cn7-image-compare__labels" aria-hidden="true">
        <span>KLASSISCHE PROJEKTION</span>
        <span>CINEMA N°7 LED</span>
      </div>
    </div>
    </div>
  );
}
