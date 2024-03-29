import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import { apiConfig } from "/config";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

function ProductSlider(props) {
  const { products, setSelectedProduct } = props;
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="single-product">
      <Swiper
        slidesPerView={1}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        onSlideChange={(e) => setSelectedProduct(products[e.realIndex])}
        className="swiper-container gallery-top"
      >
        {products.map((element, index) => {
          return (
            <SwiperSlide key={index}>
              <Image
                loader={() => {
                  return `${apiConfig.api + element.Images[0].url}`;
                }}
                src={`${apiConfig.api + element.Images[0].url}`}
                alt={element.Name}
                layout="fill"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        spaceBetween={30}
        onSwiper={setThumbsSwiper}
        slidesPerView={5}
        breakpoints={{
          940: {
            spaceBetween: 30,
          },
          340: {
            spaceBetween: 10,
          },
        }}
        onSlideChange={() => console.log("slide change")}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swiper-container gallery-thumbs mt-3"
      >
        {products.map((element, index) => {
          return (
            <SwiperSlide
              key={index}
              onClick={() => setSelectedProduct(element)}
            >
              <Image
                loader={() => {
                  return `${apiConfig.api + element.Images[0].url}`;
                }}
                src={`${apiConfig.api + element.Images[0].url}`}
                alt={element.Name}
                layout="fill"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default ProductSlider;
