import Image from "next/image";

export default function ProductUhdLabel({ resolutionX, resolutionY }: {
  resolutionX: number;
  resolutionY: number;
}) {
  if (resolutionX < 3840 || resolutionY < 2160) return null;

  return (
    <span className="product-uhd-label">
      <Image src="/4k-ultra-hd-label.png" alt="4K Ultra HD" width={540} height={62} />
    </span>
  );
}
