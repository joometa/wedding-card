"use client";
import Image from "next/image";
import "./_introduction.scss";
import flower from "public/assets/images/mom.png";

export const Introduction = () => {
  return (
    <section className="introduction-section">
      <strong>결혼합니다</strong>
      <div className="desc">
        빛나는 20대에 만나 30대가 된 현재까지
        <br />
        서로의 마음에 사랑의 확신을 수놓았고
        <br />
        그 믿음으로 부부의 연을 이어가려 합니다.
        <br />
        <br />
        이유없이 운명처럼 끌린 저희 두사람,
        <br />
        이제는 한 가정을 이끌어나갈 준비를 마쳤습니다.
        <br />
        <br />
        믿음과 사랑으로 하나 되는 이 자리에
        <br />
        함께하셔서 축복해 주시기 바랍니다.
        <br />
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
