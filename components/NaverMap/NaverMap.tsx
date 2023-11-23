"use client";

import React from "react";
import styled from "styled-components";
import NaverMAP from "public/assets/images/navermap.webp";
import Image from "next/image";

export const NaverMap: React.FC = () => {
  const latitude = "37.907255718584445";
  const longitude = "127.7534886961313";

  const handleClick = () => {
    const scheme = `nmap://car_route?dlat=${latitude}&dlng=${longitude}`;
    const webUrl = `https://m.map.naver.com/directions/?eway%3D0%26from%3D%26fromCoord%3D%26to%3D%26toCoord%3D${longitude}%2C${latitude}%26type%3Dcar`;
    const today = new Date();
    const time = today.getHours() + today.getMinutes() + today.getSeconds();
    const iOS =
      !!navigator.userAgent && /iPad|iPhone|iPod/.test(navigator.userAgent);
    let appStore = `itms-apps://itunes.apple.com/app/id311867728?mt=8`;

    if (iOS) {
      // ios
      window.location.href = `${scheme}&appTime=${time};${appStore}`;
    } else if (navigator.userAgent.includes("Android")) {
      // android
      window.location.href = `${scheme};market://details?id=com.nhn.android.nmap`;
    } else {
      // pc
      window.location.href = webUrl;
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
