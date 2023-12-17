"use client";
import Image from "next/image";
import "./_introduction.scss";
import flower from "public/assets/images/mom.png";

export const Introduction = () => {
  return (
    <section className="introduction-section">
      <strong>결혼합니다</strong>
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
      <div className="family-info">
        <div className="male">
          <p className="parent">
            <strong className="name">이해권</strong>
            <span className="dot">·</span>
            <strong className="name">
              <Image src={flower} alt="mom" width={15} height={15} />
              <span>황미경</span>
            </strong>
          </p>
          <p className="child">
            <span className="relationship">의 아들</span>
            <strong className="name">정주</strong>
          </p>
        </div>
        <div className="female">
          <p className="parent">
            <strong className="name">강상호</strong>
            <span className="dot">·</span>
            <strong className="name">김계윤</strong>
          </p>
          <p className="child">
            <span className="relationship">의 딸</span>
            <strong className="name">유리</strong>
          </p>
        </div>
      </div>
    </section>
  );
};
