import React, { useCallback, useRef, useState } from "react";
import { CarouselContainer } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import { Swiper as SwiperType } from "swiper/types";
import { ImageItem } from "./ImageItem";
import { ImageModal } from "./ImageModal";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/navigation";

import { images } from "./data";

export const Carousel = () => {
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [detailImageUrl, setDetailImageUrl] = useState<string>("#");

  const handleClickDetail = (value: string) => {
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      setDetailImageUrl(value);
      setIsOpenModal(true);
    }
  };

  const renderMainImages = useCallback(() => {
    return images.map((img, idx) => (
      <SwiperSlide className="image-wrap" key={idx}>
        <ImageItem size="main" src={img} onClick={handleClickDetail} />
      </SwiperSlide>
    ));
  }, []);

  const renderSubImages = useCallback(() => {
    return images.map((img, idx) => (
      <SwiperSlide className="image-wrap" key={idx}>
        <ImageItem size="sub" src={img} />
      </SwiperSlide>
    ));
  }, []);

  return (
    <>
      <CarouselContainer>
        <Swiper
          className="main"
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={5}
          onSwiper={(swiper) => setMainSwiper(swiper)} // 이 부분을 추가해줍니다.
        >
          {renderMainImages()}
        </Swiper>
        <Swiper
          className="sub"
          modules={[Thumbs]}
          thumbs={{ swiper: thumbsSwiper }}
          spaceBetween={5}
          slidesPerView={4}
          freeMode
          watchSlidesProgress
          onClick={(swiper) => {
            if (mainSwiper) {
              mainSwiper.slideTo(swiper.clickedIndex);
            }
          }}
        >
          {renderSubImages()}
        </Swiper>
      </CarouselContainer>
      <ImageModal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <img
          src={detailImageUrl}
          alt="detail-image"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </ImageModal>
    </>
  );
};
