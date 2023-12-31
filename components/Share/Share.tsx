import { KakaoShare } from "..";
import "./_share.scss";

export const Share = () => {
  return (
    <section className="share-section">
      <strong className="share-header">공유하기</strong>
      <div className="share-btn-box">
        <KakaoShare />
      </div>
    </section>
  );
};
