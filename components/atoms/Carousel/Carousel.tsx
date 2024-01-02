import React, { useCallback, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import { Swiper as SwiperType } from "swiper/types";
import { ImageItem } from "../ImageItem";
import { ImageModal } from "../ImageModal";
import "./_carousel.scss";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/navigation";

import { images } from "./data";

export const Carousel = () => {
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [detailImageUrl, setDetailImageUrl] = useState<string>("#");
  const [transformValue, setTransformValue] = useState<number>(-18);

  const [prevIndex, setPrevIndex] = useState<number>(0);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const [dots, setDots] = useState(Array.from({ length: images.length }));

  const handleClickDetail = (value: string) => {
    if (typeof window !== "undefined") {
      setDetailImageUrl(value);
      setIsOpenModal(true);
    }
  };

  const translateIndex = (idx: number) => {
    if (idx === 0) return 0;
    if (idx === 1) return 1;
    if (idx === images.length - 2) return 3;
    if (idx === images.length - 1) return 4;
    return 2;
  };

  const renderMainImages = useCallback(() => {
    return images.map((img, idx) => (
      <SwiperSlide className="image-wrap" key={idx}>
        <ImageItem src={img} onClick={handleClickDetail} />
      </SwiperSlide>
    ));
  }, []);

  const handleSlideChange = (swiper: SwiperType) => {
    let idx = swiper.activeIndex;
    const GAP = 10;
    const DOT_WIDTH = 8;
    if (idx > prevIndex) {
      // 우로 스와이프
      if (activeIndex > 1)
        setTransformValue((prev) => prev - (GAP + DOT_WIDTH));
    } else {
      if (activeIndex > 2)
        setTransformValue((prev) => prev + (GAP + DOT_WIDTH));
      // 좌로 스와이프
    }
    setPrevIndex(idx);
    setActiveIndex(idx);
  };

  return (
    <>
      <div className="carousel-container">
        <Swiper
          className="main"
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={5}
          onSwiper={(swiper) => setMainSwiper(swiper)}
          onSlideChange={handleSlideChange}
        >
          {renderMainImages()}
        </Swiper>
        <div className="navigator">
          <div
            className="dots"
            style={{ transform: `translateX(${transformValue}px)` }}
          >
            {dots.map((_, index) => {
              // const dotIndex = dotStartIndex;
              return (
                <span
                  key={index}
                  className={`dot ${activeIndex === index ? "active" : ""}`}
                />
              );
            })}
          </div>
        </div>
      </div>
      <ImageModal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <img src={detailImageUrl} alt="detail-image" />
      </ImageModal>
    </>
  );
};
