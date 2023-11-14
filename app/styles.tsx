import styled from "styled-components";

export const VideoContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  .video-wrap {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;

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

  video {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
`;

export const Information = styled.section`
  width: 100vw;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  .desc {
    text-align: center;
    font-size: 18px;
    line-height: 1.7;
  }
`;

export const Gallery = styled.section`
  width: 100%;
  height: max-content;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

export const Title = styled.div`
  display: flex;
  margin-top: 50px;
  margin-bottom: 50px;
  height: fit-content;
  align-items: center;

  span {
    height: 1px;
    width: 100px;
    background-color: white;
    opacity: 0.5;
  }
  strong {
    font-size: 25px;
    padding: 0 16px;
  }
`;

export const Road = styled.section`
  width: 100vw;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

export const AccountTransfer = styled.section`
  width: 100vw;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

export const GuestBook = styled.section`
  width: 100vw;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

export const ShareZone = styled.section`
  width: 100vw;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;
