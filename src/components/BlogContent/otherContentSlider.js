import React from "react";
import { Container } from 'react-bootstrap'
import { Swiper, SwiperSlide } from "swiper/react"
import Blog from "../Blog"
import "swiper/css"
import "swiper/css/pagination"
import Image from 'next/image'
import { Autoplay } from "swiper"

function OtherContentSlider() {
    return (
        <>
            <Container>
                <Swiper

                    slidesPerView={4}
                    spaceBetween={30}
                    breakpoints={{
                        940: {
                            slidesPerView: 4,
                            spaceBetween: 30
                        },
                        340: {
                            slidesPerView: 1.5,
                            spaceBetween: 10
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
                        <Image src="/assets/images/slider3.jpg" alt="slider1" width="600" height="500" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="/assets/images/slider3.jpg" alt="slider1" width="600" height="500" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="/assets/images/slider3.jpg" alt="slider1" width="600" height="500" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="/assets/images/slider3.jpg" alt="slider1" width="600" height="500" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="/assets/images/slider3.jpg" alt="slider1" width="600" height="500" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="/assets/images/slider3.jpg" alt="slider1" width="600" height="500" />
                    </SwiperSlide>

                </Swiper>
            </Container>
        </>
    );
}

export default OtherContentSlider;