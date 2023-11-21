import { Wrapper, StyledVideo } from "./style";

export const Title = () => {
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
      <StyledVideo loop autoPlay playsInline muted>
        <source src="/assets/video/sample.mp4" type="video/mp4" />
      </StyledVideo>
    </Wrapper>
  );
};
