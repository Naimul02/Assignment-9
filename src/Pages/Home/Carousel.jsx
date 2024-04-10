import slide1 from "../../assets/slide-1.jpg";
import slide2 from "../../assets/slide-2.jpg";
import slide3 from "../../assets/slide-3.jpg";
import slide4 from "../../assets/slide-4.jpg";
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
const Carousel = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
        <img src={slide1} alt="" className="h-[500px] rounded-xl w-full" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt="" className="h-[500px] rounded-xl w-full" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt="" className="h-[500px] rounded-xl w-full" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} alt="" className="h-[500px] rounded-xl w-full" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
