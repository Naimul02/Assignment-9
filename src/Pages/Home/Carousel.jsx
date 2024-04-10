import slide1 from "../../assets/slide-1.jpg";
import slide2 from "../../assets/slide-2.jpg";
import slide3 from "../../assets/slide-3.jpg";
import slide4 from "../../assets/slide-4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
const Carousel = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img
          src={slide1}
          alt=""
          className="lg:h-[500px] h-[300px] w-full lg:rounded-xl"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={slide2}
          alt=""
          className="lg:h-[500px] h-[300px] w-full lg:rounded-xl"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={slide3}
          alt=""
          className="lg:h-[500px] h-[300px] w-full lg:rounded-xl"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={slide4}
          alt=""
          className="lg:h-[500px] h-[300px] w-full lg:rounded-xl"
        />
      </SwiperSlide>
      {/* ... */}
    </Swiper>
  );
};

export default Carousel;
