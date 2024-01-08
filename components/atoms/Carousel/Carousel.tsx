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
import Image from "next/image";

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
        <div className="click-info-msg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6"
            />
          </svg>
          <span>클릭하면 확대됩니다.</span>
        </div>

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
      <ImageModal
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        src={detailImageUrl}
      ></ImageModal>
    </>
  );
};
