import React, { useState } from "react";
import Image from "next/image";
import ImageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

const ImageZoom = ({ src }: { src: string }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleImageClick = () => {
    setIsZoomed((prev) => !prev); // Toggle zoom state
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;

    // Get the bounding box of the image
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100; // Calculate percentage position
    const y = ((e.pageY - top) / height) * 100; // Calculate percentage position

    setCursorPos({ x, y });
  };

  return (
    <div
  className="relative w-full max-w-[500px] h-auto sm:max-w-[650px] md:max-w-[750px] lg:max-w-[850px] overflow-hidden cursor-zoom-in"
  onClick={handleImageClick}
  onMouseMove={handleMouseMove}
  style={{
    backgroundImage: `url(${src})`,
    backgroundSize: isZoomed ? "200%" : "contain", // Zoomed in or original size
    backgroundPosition: isZoomed ? `${cursorPos.x}% ${cursorPos.y}%` : "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Show image when not zoomed */}
  {!isZoomed && (
    <Image
      className="w-full h-auto object-contain"
      src={src}
      alt="product"
      width={500} // Adjusted to match the example
      height={500} // Adjusted to match the example
      draggable={false}
    />
  )}
</div>

  );
};

export default ImageZoom;