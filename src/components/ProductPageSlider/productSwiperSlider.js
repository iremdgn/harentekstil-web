import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { Card } from "react-bootstrap";
import { useRouter } from "next/router";

import { apiConfig } from "/config";
import "swiper/css";

function ProductSwiperSlider(props) {
  const { setPreloader } = props;
  const router = useRouter();
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={25}
        breakpoints={{
          940: {
            slidesPerView: 4,
            spaceBetween: 25,
          },
          340: {
            slidesPerView: 2.5,
            spaceBetween: 10,
          },
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper pt-5"
      >
        {props.categories.map((item, key) => {
          return (
            <SwiperSlide key={key} className="touchable">
              <Card
                onClick={async () => {
                  setPreloader(true);
                  setTimeout(() => {
                    router.push({ pathname: item.route });
                  }, 1000);
                }}
              >
                {item.Image && item.Image.url && (
                  <Card.Img
                    variant="top"
                    src={`${apiConfig.api + item.Image.url}`}
                  />
                )}
                <Card.Body>
                  <Card.Title className="text-center pt-lg-2">
                    {item.Name}
                  </Card.Title>
                </Card.Body>
              </Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default ProductSwiperSlider;
