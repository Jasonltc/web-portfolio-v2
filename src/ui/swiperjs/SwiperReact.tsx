import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/bundle";

const SwiperReact = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      className="p-5"
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide className="swiper-slide size-40 border min-h-10">
        Slide 1
      </SwiperSlide>
      <SwiperSlide className="swiper-slide size-40 border">Slide 2</SwiperSlide>
      <SwiperSlide className="swiper-slide size-40 border">Slide 3</SwiperSlide>
      <SwiperSlide className="swiper-slide size-40 border">Slide 4</SwiperSlide>
      <SwiperSlide className="swiper-slide size-40 border">Slide 5</SwiperSlide>
    </Swiper>
  );
};

export default SwiperReact;
