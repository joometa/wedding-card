import styled from "styled-components";

export const VideoContainer = styled.div``;

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

export const Header = styled.div`
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
  .toss-bank {
    padding: 16px;
    background-color: lightblue;
    color: white;
    border-radius: 16px;
  }
`;

export const GuestBookContainer = styled.section`
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
