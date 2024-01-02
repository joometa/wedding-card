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
  Calendar,
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
        <Calendar />
        {/* <DivideImage /> */}
        <Gallery />
        <DivideImage />
        <Location />
        {/* <DivideImage /> */}
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
