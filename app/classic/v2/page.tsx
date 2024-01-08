"use client";
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
import "./_v2.scss";

export default function V2() {
  return (
    <>
      <main className="v2-container">
        <Title />

        <DivideImage />

        <Introduction isClassic v2 />
        {/* <DivideImage /> */}
        <Call v2 />
        <Calendar />
        {/* <DivideImage /> */}
        <Gallery />
        <DivideImage />
        <Location />
        {/* <DivideImage /> */}
        <AccountTransfer isClassic v2 />
        <DivideImage />
        <GuestBook />
        <DivideImage />

        <Share />
      </main>
      <Footer />
    </>
  );
}
