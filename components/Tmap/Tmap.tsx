"use client";

import React from "react";
import styled from "styled-components";
import TMAP from "public/assets/images/tmap.jpeg";
import Image from "next/image";

export const Tmap: React.FC = () => {
  const latitude = "37.907255718584445";
  const longitude = "127.7534886961313";

  const handleClick = () => {
    const scheme = `tmap://navigation?lat=${latitude}&lng=${longitude}&name=목적지&appTime=${new Date().toISOString()}`;
    const webUrl = `https://tmapapi.sktelecom.com/main.html#`;
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    let appStore = `itms-apps://itunes.apple.com/app/id434705673?mt=8`;

    if (iOS) {
      // ios
      window.location.href = `${scheme};${appStore}`;
    } else if (navigator.userAgent.includes("Android")) {
      // android
      window.location.href = `${scheme};market://details?id=com.skt.tmap.ku`;
    } else {
      // pc
      window.location.href = webUrl;
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
