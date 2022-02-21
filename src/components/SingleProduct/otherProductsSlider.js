import React from "react";
import { Container } from 'react-bootstrap'
import ProductCard from '../HomePageProduct/productCard'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"


import { Pagination } from "swiper"

function OtherProductsSlider() {
    return (
        <>
            <Container>
                <Swiper

                    slidesPerView={3}
                    spaceBetween={10}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
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