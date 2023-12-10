"use client";
import { useEffect, useRef, useState } from "react";
import {
  AccountTransfer,
  GuestBookContainer,
  Road,
  ShareZone,
  Header,
} from "./styles";
import {
  Title,
  KakaoMap,
  GuestBook,
  Introduction,
  Gallery,
} from "@/components";
import { Tmap } from "@/components/atoms/Tmap";
import { NaverMap } from "@/components/atoms/NaverMap/NaverMap";
import { KaKaoNavi } from "@/components/atoms/KakaoNavi";
import { KakaoShare } from "@/components/atoms/KakaoShare";
import Link from "next/link";

import "./_home.scss";

export default function Home() {
  return (
    <main className="home-container">
      <Title />
      <Introduction />
      <Gallery />
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
        <button className="toss-bank">
          <Link href="https://qr.kakaopay.com/281006011000021662761558">
            유리카페
          </Link>
        </button>
        <button className="toss-bank">
          <Link href="https://qr.kakaopay.com/281006011000003820636642">
            정주카페
          </Link>
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
