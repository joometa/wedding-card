"use client";
import { useEffect, useRef, useState } from "react";
import { GuestBookContainer, Road, ShareZone, Header } from "./styles";
import {
  Title,
  AccountTransfer,
  GuestBook,
  Introduction,
  Gallery,
  Location,
} from "@/components";
import { KakaoShare } from "@/components/atoms/KakaoShare";
import Link from "next/link";

import "./_home.scss";

export default function Home() {
  return (
    <main className="home-container">
      <Title />
      <Introduction />
      <Gallery />
      <Location />
      <AccountTransfer />
      <GuestBook />

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
