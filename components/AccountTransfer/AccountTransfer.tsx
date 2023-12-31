import Link from "next/link";
import "./_account-transfer.scss";
import { Accordion } from "@components/atoms";
import ImgKakaopay from "public/assets/images/kakaopay-bg.png";
import Image from "next/image";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Swal from "sweetalert2";

export const AccountTransfer = () => {
  const handleFireAlert = (account: string) => {
    Swal.fire({
      title: "복사되었습니다.",
      text: `계좌번호 : ${account}`,
      icon: "success",
      confirmButtonText: "확인",
    });
  };

  return (
    <section className="account-transfer-section">
      <strong className="account-transfer-section-header">
        마음 전하실 곳
      </strong>
      <p className="account-transfer-section-desc">
        참석이 어려우신 분들을 위해
        <br />
        계좌번호를 기재하였습니다.
        <br />
        너른 마음으로 양해 부탁드립니다.
      </p>
      <div className="account-list">
        <Accordion title="신랑측 계좌번호">
          <div className="account-info">
            <div className="account-info__left">
              <span>카카오뱅크 3333-11-7297099</span>
              <span>이정주</span>
            </div>
            <div className="account-info__right">
              <CopyToClipboard
                text="3333117297099"
                onCopy={() => handleFireAlert("3333117297099")}
              >
                <button className="btn-copy">복사하기</button>
              </CopyToClipboard>
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
              <CopyToClipboard
                text="12609365001012"
                onCopy={() => handleFireAlert("12609365001012")}
              >
                <button className="btn-copy">복사하기</button>
              </CopyToClipboard>
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
    </section>
  );
};
