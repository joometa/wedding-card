"use client";
import React, { useEffect } from "react";
import KAKAO_IMG from "public/assets/images/kakaotalk.png";
import Image from "next/image";
import styled from "styled-components";

declare global {
  interface Window {
    kakao: any;
    Kakao: any;
  }
}

export function KakaoShare() {
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  useEffect(() => {
    if (typeof window !== "undefined") {
      const kakaoScript = document.createElement("script");
      kakaoScript.src =
        "https://t1.kakaocdn.net/kakao_js_sdk/2.5.0/kakao.min.js";
      kakaoScript.async = true;
      kakaoScript.crossOrigin = "anonymous";
      window.document.head.appendChild(kakaoScript);

      const KakaoLoadHandler = () => {
        if (!window.Kakao.isInitialized()) {
          window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
        }
        window.Kakao.Share.createDefaultButton({
          // #kakao-link-btn id를 가진 요소에 공유 버튼을 생성하도록 함
          container: "#kakao-link-btn",
          objectType: "feed",
          content: {
            title: "정주❤️유리 결혼합니다",
            description:
              "2024년 2월 24일 오후 1시, 춘천 스카이컨벤션 4층 스카이홀",
            imageUrl: `https://firebasestorage.googleapis.com/v0/b/wedding-card-55ab8.appspot.com/o/33.webp?alt=media&token=0fd3e784-9bc6-4d56-97b9-c79b41695b0f`,
            link: {
              mobileWebUrl: shareUrl,
              webUrl: shareUrl,
            },
          },
          buttons: [
            {
              title: "카카오톡으로 공유하기",
              link: {
                webUrl: shareUrl,
                mobileWebUrl: shareUrl,
              },
            },
          ],
        });
      };
      kakaoScript.addEventListener("load", KakaoLoadHandler);

      return;
      // window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
      // if (!Kakao.isInitialized()) {
      //   // SDK 초기화 부분, 본인의 API KEY 입력
      // }
      console.log("?");
    }
  }, [shareUrl]);

  return (
    <Wrapper id="kakao-link-btn">
      <Image
        src={KAKAO_IMG}
        alt="kakao-share"
        width={50}
        height={50}
        quality={100}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 1px 2px 6px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;
