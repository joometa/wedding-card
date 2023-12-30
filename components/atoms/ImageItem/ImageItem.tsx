"use client";

import Image, { StaticImageData } from "next/image";
import React, { ReactNode, lazy } from "react";
import "./_image-item.scss";

interface Props {
  className?: string;
  src: StaticImageData;
  onClick?: (src: string) => void;
}

export function ImageItem({ className, src, onClick }: Props) {
  const handleClick = () => {
    onClick && onClick(src.src);
  };
  return (
    <div className="image-item-container" onClick={handleClick}>
      <Image
        className={className}
        src={src.src}
        alt="wedding-image"
        // priority
        width={300}
        height={300}
        placeholder="empty"
      />
    </div>
  );
}
