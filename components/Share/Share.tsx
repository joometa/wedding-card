import { KakaoShare } from "..";
import IconLinkCopy from "public/assets/icons/link.svg";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Swal from "sweetalert2";
import "./_share.scss";
import { useEffect, useState } from "react";

export const Share = () => {
  const [url, setUrl] = useState<string>("");
  const handleFireAlert = () => {
    Swal.fire({
      // title: "링크가 복사되었습니다.",
      text: "링크가 복사되었습니다.",
      icon: "success",
      confirmButtonText: "확인",
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrl(window.location.href);
    }
  }, []);

  return (
    <section className="share-section">
      <strong className="share-header">공유하기</strong>
      <div className="share-btn-box">
        <div className="kakao-share-box">
          <KakaoShare />
          <span>카카오톡 공유</span>
        </div>
        <div className="copy-link-box">
          <CopyToClipboard text={url} onCopy={() => handleFireAlert()}>
            <button className="copy-link-btn">
              <IconLinkCopy />
            </button>
          </CopyToClipboard>
          <span>링크 복사</span>
        </div>
      </div>
    </section>
  );
};
