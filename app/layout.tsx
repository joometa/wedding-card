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
        <meta name="title" content="정주❤️유리 결혼합니다." />
        <meta
          name="description"
          content="2024년 2월 24일 오후 1시, 춘천 스카이컨벤션 4층 스카이홀"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jj-yr-wedding.com/" />
        <meta property="og:title" content="정주❤️유리 결혼합니다." />
        <meta
          property="og:description"
          content="2024년 2월 24일 오후 1시, 춘천 스카이컨벤션 4층 스카이홀"
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/wedding-card-55ab8.appspot.com/o/33.webp?alt=media&token=0fd3e784-9bc6-4d56-97b9-c79b41695b0f"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://jj-yr-wedding.com/" />
        <meta property="twitter:title" content="정주❤️유리 결혼합니다." />
        <meta
          property="twitter:description"
          content="2024년 2월 24일 오후 1시, 춘천 스카이컨벤션 4층 스카이홀"
        />
        <meta
          property="twitter:image"
          content="https://firebasestorage.googleapis.com/v0/b/wedding-card-55ab8.appspot.com/o/33.webp?alt=media&token=0fd3e784-9bc6-4d56-97b9-c79b41695b0f"
        />
      </head>
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <div id="react-modals" />
      </body>
    </html>
  );
}
