import { KaKaoNavi, KakaoMap, NaverMap, Tmap } from "..";
import "./_location.scss";

import { Whisper } from "next/font/google";
const whisper = Whisper({
  weight: "400",
  preload: true,
  subsets: ["latin"],
});

export const Location = () => {
  return (
    <section className="location-section">
      <strong className={`${whisper.className} location-header`}>
        Location
      </strong>
      <div className="location-info-box">
        <div className="location-info-box-inner">
          <span>강원특별자치도 춘천시 동면</span>
          <span>춘천순환로 770</span>
          <span>스카이 컨벤션 4층 스카이홀</span>
        </div>
      </div>
      <div className="kakaomap-wrap">
        <KakaoMap />
      </div>
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <Tmap />
        <NaverMap />
        {/* <KaKaoNavi /> */}
      </div>
    </section>
  );
};
