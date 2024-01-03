import { useEffect, useState } from "react";
import { Whisper } from "next/font/google";
import "./_title.scss";
import Image from "next/image";
import img_5 from "public/assets/images/5.webp";
import { MusicPlayer } from "@/components";

const whisper = Whisper({
  weight: "400",
  preload: true,
  subsets: ["latin"],
});

export const Title = () => {
  // const [vh, setVh] = useState(0);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const vh = window.innerHeight + 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }
  }, []);

  return (
    <section className="title-container">
      <div className="music-player-wrap">
        <MusicPlayer />
      </div>
      <figure className={whisper.className}>wedding invitation</figure>
      <div className="name-area">
        <div className="name-wrap">
          <span className={`${whisper.className} en`}>Jeongjoo</span>
          <span className="ko">이 정 주</span>
        </div>
        <div className="name-divide" />
        <div className="name-wrap">
          <span className={`${whisper.className} en`}>Yuri</span>
          <span className="ko">강 유 리</span>
        </div>
      </div>
      <div className="image-wrap">
        <Image src={img_5} alt="wedding-thumbnail" priority={true} />
      </div>
      <div className="info-container">
        <span className="date">2024년 2월 24일 토요일 오후 1시</span>
        <span className="location">스카이웨딩컨벤션 4층 스카이홀</span>
      </div>
    </section>
  );
};
