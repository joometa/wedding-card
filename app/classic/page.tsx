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
import "./_classic.scss";

export default function Classic() {
  return (
    <>
      <main className="classic-container">
        <Title />

        <DivideImage />

        <Introduction isClassic />
        {/* <DivideImage /> */}
        <Call />
        <Calendar />
        {/* <DivideImage /> */}
        <Gallery />
        <DivideImage />
        <Location />
        {/* <DivideImage /> */}
        <AccountTransfer isClassic />
        <DivideImage />
        <GuestBook />
        <DivideImage />

        <Share />
      </main>
      <Footer />
    </>
  );
}
