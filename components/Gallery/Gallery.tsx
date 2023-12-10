import { Carousel } from "..";
import "./_gallery.scss";
import { Whisper } from "next/font/google";
const whisper = Whisper({
  weight: "400",
  preload: true,
  subsets: ["latin"],
});

export const Gallery = () => {
  return (
    <section className="gallery-section">
      <strong className={`${whisper.className} gallery-header`}>Gallery</strong>
      <Carousel />
    </section>
  );
};
