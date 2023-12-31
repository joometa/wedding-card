import "./_call.scss";
import IconPhone from "public/assets/icons/phone.svg";
import IconComment from "public/assets/icons/comment.svg";
import ImgFlower from "public/assets/images/flower_1.png";
import Image from "next/image";
import Link from "next/link";

export const Call = () => {
  return (
    <section className="call-container">
      <div className="flower">
        <Image src={ImgFlower} alt="header-img" />
      </div>
      <div className="child">
        <span className="title">신랑에게 연락하기</span>
        <div className="btn-box">
          <Link href="tel:01024701623" className="btn-phone">
            <IconPhone />
          </Link>
          <Link href="sms:01024701623" className="btn-text">
            <IconComment />
          </Link>
        </div>
      </div>
      <div className="child">
        <span className="title">신부에게 연락하기</span>
        <div className="btn-box">
          <Link href="tel:01041741815" className="btn-phone bridal">
            <IconPhone />
          </Link>
          <Link href="sms:01041741815" className="btn-text">
            <IconComment />
          </Link>
        </div>
      </div>
      <div className="parent">
        <div className="title">혼주에게 연락하기</div>

        <div className="parent-container">
          <div className="parent-box">
            <strong className="parent-title">신랑 측 혼주</strong>
            <div className="parent-call-info-box">
              <p className="parent-call-info-name">
                <span className="relationship">아버지</span>이해권
              </p>
              <div className="parent-call-btn-box">
                <Link href="tel:01083001816" className="btn-call">
                  <IconPhone />
                </Link>
                <Link href="sms:01083001816" className="btn-text">
                  <IconComment />
                </Link>
              </div>
            </div>
          </div>
          <div className="parent-box">
            <strong className="parent-title bridal">신부 측 혼주</strong>
            <div className="parent-call-info-box">
              <p className="parent-call-info-name">
                <span className="relationship">아버지</span>강상호
              </p>
              <div className="parent-call-btn-box">
                <Link href="tel:01032211646" className="btn-call bridal">
                  <IconPhone />
                </Link>
                <Link href="tel:01032211646" className="btn-text">
                  <IconComment />
                </Link>
              </div>
            </div>
            <div className="parent-call-info-box">
              <p className="parent-call-info-name">
                <span className="relationship">어머니</span>김계윤
              </p>
              <div className="parent-call-btn-box">
                <Link href="tel:01087948665" className="btn-call bridal">
                  <IconPhone />
                </Link>
                <Link href="sms:01087948665" className="btn-text">
                  <IconComment />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
