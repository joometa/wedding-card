"use client";

import React from "react";
import styled from "styled-components";
import NaverMAP from "public/assets/images/navermap.webp";
import Image from "next/image";

export const NaverMap: React.FC = () => {
  const latitude = "37.907255718584445";
  const longitude = "127.7534886961313";

  const handleClick = () => {
    if (typeof window !== "undefined") {
      const weddingHole = "춘천스카이컨벤션웨딩홀";
      const url = `nmap://search?query=${encodeURIComponent(weddingHole)}&amp;`;

      window.open(url);
    }
  };

  return (
    <NaverMapButton onClick={handleClick}>
      <Image
        src={NaverMAP}
        alt="tmap-button"
        width={50}
        height={50}
        quality={100}
      />
    </NaverMapButton>
  );
};

const NaverMapButton = styled.button`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 1px 2px 6px 0px rgba(0, 0, 0, 0.2);
`;
