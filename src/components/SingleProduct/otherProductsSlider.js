import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ProductCard from "../HomePageProduct/productCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { useRouter } from "next/router";
import { getNoToken } from "/src/services/request";

import { apiConfig } from "/config";

function OtherProductsSlider() {
  const router = useRouter();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = async (data) => {
    const response = await getNoToken(
      apiConfig.api + "/api/product-category/getLowLevelCategory/"
    );
    console.log("respsssonse", response);
    if (response.data.isSuccess) {
      setCategories(response.data.cat);
    }
  };

  return (
    categories.length > 0 && (
      <>
        <div className="other-products pt-5">
          <div className="other-products-text d-flex">
            <hr className="mt-5" />
            <h1 className="mt-3 ps-4 pt-1">Diğer Ürün Gruplarımız</h1>
          </div>
          <div className="other-products-area my-3 py-4">
            <Container>
              <Swiper
                slidesPerView={3}
                spaceBetween={10}
                breakpoints={{
                  940: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  340: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                }}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
              >
                {categories.map((item, key) => {
                  return (
                    <SwiperSlide key={key}>
                      <ProductCard
                        src={apiConfig.api + item.Image.url}
                        alt={item.Name}
                        title={item.Name}
                        text={item.subTitle}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Container>
          </div>
        </div>
      </>
    )
  );
}

export default OtherProductsSlider;
