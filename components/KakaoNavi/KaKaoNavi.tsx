"use client";

import React, { useMemo } from "react";
import styled from "styled-components";
import IconKaKaoNavi from "public/assets/images/kakaonavi.svg";
import Image from "next/image";

export const KaKaoNavi: React.FC = () => {
  const latitude = "37.907255718584445";
  const longitude = "127.7534886961313";

  const handleClick = () => {
    const scheme = `kakaonavi://route?sp=37.537229,127.005515&ep=${latitude},${longitude}&by=CAR`;
    const webUrl = `https://map.kakao.com/link/map/카카오네비,${latitude},${longitude}`;
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    let appStore = `itms-apps://itunes.apple.com/app/id304608425?mt=8`;

    if (iOS) {
      // ios
      window.location.href = `${scheme};${appStore}`;
    } else if (navigator.userAgent.includes("Android")) {
      // android
      window.location.href = `${scheme};market://details?id=net.daum.android.map`;
    } else {
      // pc
      window.location.href = webUrl;
    }
  };

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
