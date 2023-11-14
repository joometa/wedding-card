import React, { useCallback, useState } from "react";
import { CarouselContainer } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/navigation";

// import "swiper/components/navigation/navigation.min.css";
// import "swiper/components/thumbs/thumbs.min.css";
import { images } from "./data";
import Image from "next/image";

export const Carousel = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const renderMainImages = useCallback(() => {
    return images.map((img, idx) => (
      <SwiperSlide className="image-wrap" key={idx}>
        <Image
          className="wedding-image max-h-[500px] min-h-[500px]"
          src={img}
          alt="wedding-image"
          loading="lazy"
          style={{ width: "inherit", objectFit: "scale-down" }}
        />
      </SwiperSlide>
    ));
  }, []);

  const renderSubImages = useCallback(() => {
    return images.map((img, idx) => (
      <SwiperSlide
        className="image-wrap"
        key={idx}
        style={{ marginRight: "30px" }}
      >
        <Image
          className="wedding-image object-cover h-[100px] overflow-x-hidden"
          src={img}
          alt="wedding-image"
          loading="lazy"
          style={{ width: "inherit" }}
        />
      </SwiperSlide>
    ));
  }, []);

  return (
    <CarouselContainer>
      <Swiper
        className="main"
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={5}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
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
      >
        {renderSubImages()}
      </Swiper>
    </CarouselContainer>
  );
};
