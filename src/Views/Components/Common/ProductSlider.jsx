import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const ProductSlider = ({ products }) => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {products.map((product, ind) => (
          <SwiperSlide key={ind}>
            <img src={product} alt="Product" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductSlider;
