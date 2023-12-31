import Link from "next/link";
import "./_account-transfer.scss";
import { Accordion } from "@components/atoms";
import ImgKakaopay from "public/assets/images/kakaopay-bg.png";
import Image from "next/image";

export const AccountTransfer = () => {
  return (
    <section className="account-transfer-section">
      <strong className="account-transfer-section-header">
        마음 전하실 곳
      </strong>
      <div className="account-list">
        <Accordion title="신랑측 계좌번호">
          <div className="account-info">
            <div className="account-info__left">
              <span>카카오뱅크 3333-11-7297099</span>
              <span>이정주</span>
            </div>
            <div className="account-info__right">
              <button className="btn-copy">복사하기</button>
              <Link
                className="kakao-pay"
                href="https://qr.kakaopay.com/281006011000003820636642"
              >
                <Image
                  src={ImgKakaopay}
                  alt="kakao-pay"
                  height={80}
                  width={100}
                  quality={80}
                />
              </Link>
            </div>
          </div>
        </Accordion>
        <Accordion title="신부측 계좌번호">
          <div className="account-info">
            <div className="account-info__left">
              <span>기업은행 126-093650-01-012</span>
              <span>강유리</span>
            </div>
            <div className="account-info__right">
              <button className="btn-copy">복사하기</button>
              <Link
                className="kakao-pay"
                href="https://qr.kakaopay.com/281006011000021662761558"
              >
                <Image
                  src={ImgKakaopay}
                  alt="kakao-pay"
                  height={80}
                  width={100}
                  quality={80}
                />
              </Link>
            </div>
          </div>
        </Accordion>
      </div>
      {/* <button className="toss-bank">
        <Link href="https://toss.me/2eejj">토스</Link>
      </button> */}
    </section>
  );
};
