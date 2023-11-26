"use client";

import React from "react";
import styled from "styled-components";
import TMAP from "public/assets/images/tmap.jpeg";
import Image from "next/image";
import Link from "next/link";

export const Tmap: React.FC = () => {
  const latitude = "37.907255718584445";
  const longitude = "127.7534886961313";

  const handleClick = () => {
    if (typeof window !== "undefined") {
      const weddingHole = "춘천스카이컨벤션웨딩홀";
      const url = `tmap://search?name=${weddingHole}`;
      window.open(url);
    }
  };

  return (
    <TmapButton onClick={handleClick}>
      <Image
        src={TMAP}
        alt="tmap-button"
        width={50}
        height={50}
        quality={100}
      />
    </TmapButton>
  );
};

const TmapButton = styled.button`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 1px 2px 6px 0px rgba(0, 0, 0, 0.2);
`;
