"use client";
import { useEffect, useRef, useState } from "react";
import {
  Title,
  AccountTransfer,
  GuestBook,
  Introduction,
  Gallery,
  Location,
  Call,
  DivideImage,
  Share,
  Footer,
} from "@/components";
import "./_home.scss";

export default function Home() {
  return (
    <>
      <main className="home-container">
        <Title />

        <DivideImage />

        <Introduction />
        {/* <DivideImage /> */}
        <Call />
        {/* <DivideImage /> */}
        <Gallery />
        <DivideImage />
        <Location />
        <DivideImage />
        <AccountTransfer />
        <DivideImage />
        <GuestBook />
        <DivideImage />

        <Share />
      </main>
      <Footer />
    </>
  );
}
