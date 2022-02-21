import React from "react";
import { Container } from 'react-bootstrap'
import { Swiper, SwiperSlide } from "swiper/react"
import Blog from "../Blog"
import "swiper/css"
import "swiper/css/pagination"
import Image from 'next/image'


function OtherContentSlider() {
    return (
        <>
            <Container>
                <Swiper

                    slidesPerView={4}
                    spaceBetween={30}
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