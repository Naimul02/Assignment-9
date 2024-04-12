// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectCube, Pagination } from "swiper/modules";
import one from "../../assets/one.jpg";
import two from "../../assets/two.jpg";
import three from "../../assets/three.jpg";
import four from "../../assets/four.jpg";

const Review = () => {
  return (
    <div className="my-10">
      <h1 className="text-2xl font-bold text-center mb-4">
        Our Customer Review
      </h1>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex flex-col md:flex-row bg-base-100 shadow-xl rounded-xl border gap-3 p-4">
              <figure>
                <img
                  src={one}
                  alt="Movie"
                  className="rounded-full w-24 h-24 border-4 border-blue-600 object-cover"
                />
              </figure>
              <div className="w-[80%]">
                <h2 className="card-title">Name : Naimul Islum</h2>
                <div className="flex items-center gap-3">
                  <p className="text-lg font-bold">Customer</p>
                  <div className="rating">
                    <span className="text-lg font-semibold">Ratings : </span>
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                    />
                  </div>
                </div>
                <p className="pb-3 pt-3">
                  <span className="text-xl font-bold">Review :</span> The
                  perfect place from which to explore Helsinki Very comfortable
                  and warm room. Plenty of electric sockets to charge my devices
                  and work with my laptop. Great TV and really excellent hot
                  shower, so easy to use.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row  bg-base-100 shadow-xl rounded-xl border gap-3 p-4">
              <figure>
                <img
                  src={two}
                  alt="Movie"
                  className="rounded-full w-24 h-24 border-4 border-blue-600 object-cover"
                />
              </figure>
              <div className="w-[80%]">
                <h2 className="card-title">Name : Naimul Islum</h2>
                <div className="flex items-center gap-3">
                  <p className="text-lg font-bold">Customer</p>
                  <div className="rating">
                    <span className="text-lg font-semibold">Ratings : </span>
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                    />
                  </div>
                </div>
                <p className="pb-3 pt-3">
                  <span className="text-xl font-bold">Review :</span> The
                  perfect place from which to explore Helsinki Very comfortable
                  and warm room. Plenty of electric sockets to charge my devices
                  and work with my laptop. Great TV and really excellent hot
                  shower, so easy to use.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row bg-base-100 shadow-xl rounded-xl border gap-3 p-4">
              <figure>
                <img
                  src={three}
                  alt="Movie"
                  className="rounded-full w-24 h-24 border-4 border-blue-600 object-cover"
                />
              </figure>
              <div className="w-[80%]">
                <h2 className="card-title">Name : Naimul Islum</h2>
                <div className="flex items-center gap-3">
                  <p className="text-lg font-bold">Customer</p>
                  <div className="rating">
                    <span className="text-lg font-semibold">Ratings : </span>
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                    />
                  </div>
                </div>
                <p className="pb-3 pt-3">
                  <span className="text-xl font-bold">Review :</span> The
                  perfect place from which to explore Helsinki Very comfortable
                  and warm room. Plenty of electric sockets to charge my devices
                  and work with my laptop. Great TV and really excellent hot
                  shower, so easy to use.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row bg-base-100 shadow-xl rounded-xl border gap-3 p-4">
              <figure>
                <img
                  src={four}
                  alt="Movie"
                  className="rounded-full w-24 h-24 border-4 border-blue-600 object-cover"
                />
              </figure>
              <div className="w-[80%]">
                <h2 className="card-title">Name : Naimul Islum</h2>
                <div className="flex items-center gap-3">
                  <p className="text-lg font-bold">Customer</p>
                  <div className="rating">
                    <span className="text-lg font-semibold">Ratings : </span>
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                    />
                  </div>
                </div>
                <p className="pb-3 pt-3">
                  <span className="text-xl font-bold">Review :</span> The
                  perfect place from which to explore Helsinki Very comfortable
                  and warm room. Plenty of electric sockets to charge my devices
                  and work with my laptop. Great TV and really excellent hot
                  shower, so easy to use.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex flex-col md:flex-row bg-base-100 shadow-xl rounded-xl border gap-3 p-4">
              <figure>
                <img
                  src={one}
                  alt="Movie"
                  className="rounded-full w-24 h-24 border-4 border-blue-600 object-cover"
                />
              </figure>
              <div className="w-[80%]">
                <h2 className="card-title">Name : Naimul Islum</h2>
                <div className="flex items-center gap-3">
                  <p className="text-lg font-bold">Customer</p>
                  <div className="rating">
                    <span className="text-lg font-semibold">Ratings : </span>
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                    />
                  </div>
                </div>
                <p className="pb-3 pt-3">
                  <span className="text-xl font-bold">Review :</span> The
                  perfect place from which to explore Helsinki Very comfortable
                  and warm room. Plenty of electric sockets to charge my devices
                  and work with my laptop. Great TV and really excellent hot
                  shower, so easy to use.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row  bg-base-100 shadow-xl rounded-xl border gap-3 p-4">
              <figure>
                <img
                  src={two}
                  alt="Movie"
                  className="rounded-full w-24 h-24 border-4 border-blue-600 object-cover"
                />
              </figure>
              <div className="w-[80%]">
                <h2 className="card-title">Name : Naimul Islum</h2>
                <div className="flex items-center gap-3">
                  <p className="text-lg font-bold">Customer</p>
                  <div className="rating">
                    <span className="text-lg font-semibold">Ratings : </span>
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                    />
                  </div>
                </div>
                <p className="pb-3 pt-3">
                  <span className="text-xl font-bold">Review :</span> The
                  perfect place from which to explore Helsinki Very comfortable
                  and warm room. Plenty of electric sockets to charge my devices
                  and work with my laptop. Great TV and really excellent hot
                  shower, so easy to use.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row  bg-base-100 shadow-xl rounded-xl border gap-3 p-4">
              <figure>
                <img
                  src={three}
                  alt="Movie"
                  className="rounded-full w-24 h-24 border-4 border-blue-600 object-cover"
                />
              </figure>
              <div className="w-[80%]">
                <h2 className="card-title">Name : Naimul Islum</h2>
                <div className="flex items-center gap-3">
                  <p className="text-lg font-bold">Customer</p>
                  <div className="rating">
                    <span className="text-lg font-semibold">Ratings : </span>
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                    />
                  </div>
                </div>
                <p className="pb-3 pt-3">
                  <span className="text-xl font-bold">Review :</span> The
                  perfect place from which to explore Helsinki Very comfortable
                  and warm room. Plenty of electric sockets to charge my devices
                  and work with my laptop. Great TV and really excellent hot
                  shower, so easy to use.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row  bg-base-100 shadow-xl rounded-xl border gap-3 p-4">
              <figure>
                <img
                  src={four}
                  alt="Movie"
                  className="rounded-full w-24 h-24 border-4 border-blue-600 object-cover"
                />
              </figure>
              <div className="w-[80%]">
                <h2 className="card-title">Name : Naimul Islum</h2>
                <div className="flex items-center gap-3">
                  <p className="text-lg font-bold">Customer</p>
                  <div className="rating">
                    <span className="text-lg font-semibold">Ratings : </span>
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                    />
                  </div>
                </div>
                <p className="pb-3 pt-3">
                  <span className="text-xl font-bold">Review :</span> The
                  perfect place from which to explore Helsinki Very comfortable
                  and warm room. Plenty of electric sockets to charge my devices
                  and work with my laptop. Great TV and really excellent hot
                  shower, so easy to use.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Review;
