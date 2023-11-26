"use client";

import React, { useEffect, useMemo } from "react";
import styled from "styled-components";
import IconKaKaoNavi from "public/assets/images/kakaonavi.svg";
import Image from "next/image";

declare global {
  interface Window {
    Kakao: any;
  }
}

export const KaKaoNavi: React.FC = () => {
  const latitude = "37.907255718584445";
  const longitude = "127.7534886961313";

  const handleClick = () => {
    if (window.Kakao) {
      window.Kakao.Navi.start({
        name: "현대백화점 판교점",
        x: latitude,
        y: longitude,
        coordType: "wgs84",
      });
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const kakaoScript = document.createElement("script");
      kakaoScript.src =
        "https://t1.kakaocdn.net/kakao_js_sdk/2.5.0/kakao.min.js";
      kakaoScript.async = true;
      window.document.head.appendChild(kakaoScript);

      const KakaoLoadHandler = () => {
        // Initialize Kakao JavaScript SDK after the script is loaded
        if (window.Kakao) {
          window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
        }
      };

      kakaoScript.addEventListener("load", KakaoLoadHandler);
    }
  }, []);

  return (
    <KaKaoNaviButton onClick={handleClick}>
      <Image
        src={IconKaKaoNavi}
        alt="tmap-button"
        width={50}
        height={50}
        quality={100}
      />
    </KaKaoNaviButton>
  );
};

const KaKaoNaviButton = styled.button`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 1px 2px 6px 0px rgba(0, 0, 0, 0.2);
`;
