"use client";

import Image, { StaticImageData } from "next/image";
import React, { ReactNode, lazy } from "react";
import styled from "styled-components";

interface Props {
  className?: string;
  src: StaticImageData;
  size: "main" | "sub";
  onClick?: (src: string) => void;
}

export function ImageItem({ className, src, size = "main", onClick }: Props) {
  const handleClick = () => {
    onClick && onClick(src.src);
  };
  return (
    <Wrapper data-size={size} onClick={handleClick}>
      <div className="blur-background" />
      <Image
        className={className}
        src={src.src}
        alt="wedding-image"
        // priority
        width={300}
        height={300}
        placeholder="empty"
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  overflow: hidden;
  border: none;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .blur-background {
    position: absolute;
    top: 0;
    left: 0;
    /* background-size: cover; */
    /* filter: blur(40px); */
    /* background-color: rgba(0, 0, 0, 0.6); */
    /* transform: scale(1.1); */
    width: 100%;
    height: 100%;
  }

  img {
    z-index: 10;
    width: 100%;
    height: auto;
    img {
      object-fit: contain;
    }
  }

  &[data-size="sub"] {
    height: 100px;
    .blur-background {
      background-color: rgba(0, 0, 0, 0.5);
      filter: blur(20px);
    }
    img {
      object-fit: cover;
    }
  }
`;
