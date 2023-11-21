import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  .title-wrap {
    color: white;
    z-index: 10;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    opacity: 1;

    .text-container {
      width: 100%;
      height: 100%;
      flex-direction: column;
      display: flex;
      text-align: center;
      position: absolute;
      align-items: center;
      top: 10%;

      caption {
        font-size: 18px;
        color: rgba(255, 255, 255, 0.5);
        margin-bottom: 10px;
      }

      h1 {
        font-size: 36px;
        margin-bottom: 16px;
        font-weight: 600;
      }
      p {
        font-size: 18px;
      }

      .line {
        margin-top: 10%;
        width: 1px;
        height: 40%;
        background-color: white;
      }
    }
  }
`;

export const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
`;
