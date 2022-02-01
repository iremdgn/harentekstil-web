import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import Image from 'next/image'

function SwiperSlider() {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={0}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}

                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Image src="/assets/images/homepage.jpg" with="100" height="100" alt="slider1" layout='fill' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/assets/images/homepage2.jpg" with="100" height="100" alt="slider1" layout='fill' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/assets/images/homepage3.jpg" with="100" height="100" alt="slider1" layout='fill' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/assets/images/homepage.jpg" with="100" height="100" alt="slider1" layout='fill' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/assets/images/homepage2.jpg" with="100" height="100" alt="slider1" layout='fill' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/assets/images/homepage3.jpg" with="100" height="100" alt="slider1" layout='fill' />
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default SwiperSlider;