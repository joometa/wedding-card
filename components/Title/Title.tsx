import { useEffect, useState } from "react";
import { Wrapper, StyledVideo } from "./style";

export const Title = () => {
  // const [vh, setVh] = useState(0);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const vh = window.innerHeight + 0.01;
      console.log(vh);
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }
  }, []);

  return (
    <Wrapper>
      <div className="title-wrap">
        <div className="text-container">
          <span>WEDDING INVITATION</span>
          <h1>정주 & 유리</h1>
          <p>
            2024년 2월 24일 토요일, 1:30PM
            <br />
            스카이 웨딩홀 4층
          </p>
          <div className="line" />
        </div>
      </div>
      {/* <StyledVideo loop autoPlay playsInline muted preload="auto">
        <source src="/assets/video/sample.mp4" type="video/mp4" />
      </StyledVideo> */}
    </Wrapper>
  );
};
