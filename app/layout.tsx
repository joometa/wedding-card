import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import StyledComponentsRegistry from "@/lib/StyledComponents";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "정주❤️유리 결혼합니다",
  description: "24.2.24 1pm, 춘천 스카이컨벤션 4층 스카이홀",
};

declare global {
  interface Window {
    kakao: any;
    Kakao: any;
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>정주❤️유리 결혼합니다</title>
      </head>
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <div id="react-modals" />
      </body>
    </html>
  );
}
