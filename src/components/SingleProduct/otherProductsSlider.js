import React from "react";
import { Container } from 'react-bootstrap'
import ProductCard from '../HomePageProduct/productCard'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper";
import "swiper/css"
import "swiper/css/pagination"

function OtherProductsSlider() {
    return (
        <>
            <Container>
                <Swiper

                    slidesPerView={3}
                    spaceBetween={10}
                    breakpoints={{
                    940: {
                        slidesPerView:3,
                        spaceBetween:10
                    },
                    340: {
                        slidesPerView:1,
                        spaceBetween:10
                    }
                }}

                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}

                modules={[Autoplay]}

                    className="mySwiper"
                >

                    <SwiperSlide>
                        <ProductCard
                            src="/assets/images/product.png"
                            alt="Card image"
                            title="Kumaşlar"
                            text="İç veya Dış Mekan kumaşları, performans ve lüksün mükemmel uyumudur."
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard
                            src="/assets/images/product.png"
                            alt="Card image"
                            title="Kumaşlar"
                            text="İç veya Dış Mekan kumaşları, performans ve lüksün mükemmel uyumudur."
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard
                            src="/assets/images/product.png"
                            alt="Card image"
                            title="Kumaşlar"
                            text="İç veya Dış Mekan kumaşları, performans ve lüksün mükemmel uyumudur."
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard
                            src="/assets/images/product.png"
                            alt="Card image"
                            title="Kumaşlar"
                            text="İç veya Dış Mekan kumaşları, performans ve lüksün mükemmel uyumudur."
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <ProductCard
                            src="/assets/images/product.png"
                            alt="Card image"
                            title="Kumaşlar"
                            text="İç veya Dış Mekan kumaşları, performans ve lüksün mükemmel uyumudur."
                        />
                    </SwiperSlide>


                </Swiper>
            </Container>
        </>
    );
}

export default OtherProductsSlider;