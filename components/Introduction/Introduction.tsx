"use client";
import Image from "next/image";
import "./_introduction.scss";
import flower from "public/assets/images/mom.png";

interface Props {
  isClassic?: boolean;
  v2?: boolean;
}

export const Introduction = ({ isClassic, v2 }: Props) => {
  return (
    <section className="introduction-section">
      {isClassic ? (
        <>
          <div className="classic-title">
            <span className="intro">저희 아들 · 딸 결혼식에</span>
            정중히 초대합니다.
          </div>
          <div className="desc">
            언제나 함께 있을것 같던 자녀가
            <br />
            아름다운 연인을 만나 사랑을 하고
            <br />
            이제 평생의 동반자로 출발하려 합니다.
            <br />
            <br />
            늘 관심과 사랑을 아끼지 않으셨던
            <br />
            여러 어른과 친지분들께서
            <br />
            오셔서 함께 축복해 주시면
            <br />
            더욱 빛나는 예식이 되겠습니다.
            <br />
            감사합니다.
            <br />
          </div>
        </>
      ) : (
        <>
          <strong className="title">결혼합니다</strong>
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
        </>
      )}
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
          <p className={`parent ${v2 ? "" : "except"}`}>
            {v2 && (
              <>
                <strong className="name">강상호</strong>
                <span className="dot">·</span>
              </>
            )}
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
