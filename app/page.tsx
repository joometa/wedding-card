"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import {
  AccountTransfer,
  Gallery,
  GuestBook,
  Information,
  Road,
  ShareZone,
  Title,
  VideoContainer,
} from "./styles";

export default function Home() {
  return (
    <main>
      <VideoContainer>
        <div className="video-wrap">
          <div className="text-container">
            <caption>WEDDING INVITATION</caption>
            <h1>정주 & 유리</h1>
            <p>
              2024년 2월 24일 토요일, 1:30PM
              <br />
              스카이 웨딩홀 4층
            </p>
            <div className="line" />
          </div>
        </div>
        <video loop autoPlay playsInline muted>
          <source src="/assets/video/sample.mp4" type="video/mp4" />
        </video>
      </VideoContainer>
      <Information>
        <Title>
          <span />
          <strong>결혼합니다</strong>
          <span />
        </Title>
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
        <Title>
          <span />
          <strong>사진 보고 가세요</strong>
          <span />
        </Title>
      </Gallery>
      <Road>
        <Title>
          <span />
          <strong>오시는 길</strong>
          <span />
        </Title>
      </Road>
      <AccountTransfer>
        <Title>
          <span />
          <strong>마음 전하실 곳</strong>
          <span />
        </Title>
      </AccountTransfer>
      <GuestBook>
        <Title>
          <span />
          <strong>방명록</strong>
          <span />
        </Title>
      </GuestBook>
      <ShareZone>
        <Title>
          <span />
          <strong>공유하기</strong>
          <span />
        </Title>
      </ShareZone>
    </main>
  );
}
