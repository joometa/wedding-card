"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  AccountTransfer,
  Gallery,
  GuestBookContainer,
  Information,
  Road,
  ShareZone,
  Header,
  VideoContainer,
} from "./styles";
import { Carousel, Title, KakaoMap, GuestBook } from "@/components";
import { Tmap } from "@/components/Tmap";
import { NaverMap } from "@/components/NaverMap/NaverMap";
import { KaKaoNavi } from "@/components/KakaoNavi";
import { KakaoShare } from "@components/KakaoShare";
import Link from "next/link";

export default function Home() {
  const [videoHeight, setVideoHeight] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // setVideoHeight(window.innerHeight);
    }
  }, []);

  return (
    <main className="w-screen flex flex-col items-center">
      <Title />
      <Information>
        <Header>
          <span />
          <strong>결혼합니다</strong>
          <span />
        </Header>
        <div className="desc">
          여름에 태어난 정주
          <br />
          봄에 태어난 유리
          <br />
          <br />
          관심사도, 가치관도 달랐던 두사람
          <br />
          사랑으로 닮은 꼴이 되어
          <br />
          인생이라는 여정을 함께 떠나려 합니다.
          <br />
          <br />
          따뜻한 격려와 축복으로
          <br />
          힘찬 출발의 자리를 빛내주시면 감사하겠습니다.
        </div>
      </Information>
      <Gallery>
        <Header>
          <span />
          <strong>사진 보고 가세요</strong>
          <span />
        </Header>
        <div className="pb-40">
          <Carousel />
        </div>
      </Gallery>
      <Road>
        <Header>
          <span />
          <strong>오시는 길</strong>
          <span />
        </Header>
        <KakaoMap />
        <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
          <Tmap />
          <NaverMap />
          <KaKaoNavi />
        </div>
      </Road>
      <AccountTransfer>
        <Header>
          <span />
          <strong>마음 전하실 곳</strong>
          <span />
        </Header>
        <button className="toss-bank">
          <Link href="https://toss.me/2eejj">토스</Link>
        </button>
      </AccountTransfer>
      <GuestBookContainer>
        <Header>
          <span />
          <strong>방명록</strong>
          <span />
        </Header>
        <GuestBook />
      </GuestBookContainer>
      <ShareZone>
        <Header>
          <span />
          <strong>공유하기</strong>
          <span />
        </Header>

        <KakaoShare />
      </ShareZone>
    </main>
  );
}
