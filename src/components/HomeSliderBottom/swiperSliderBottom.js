import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import Image from 'next/image'
import { Autoplay } from "swiper";

import "swiper/css"
import "swiper/css/pagination"


function SwiperSliderBottom() {
    return (
        <>
            <Swiper

                slidesPerView={5}
                spaceBetween={10}
                breakpoints={{
                    940: {
                        slidesPerView:5,
                        spaceBetween:10
                    },
                    340: {
                        slidesPerView:2.5,
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
                    <Image src="/assets/images/homepage.jpg" alt="slider1" layout='fill' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/assets/images/homepage2.jpg" alt="slider1" layout='fill' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/assets/images/homepage3.jpg" alt="slider1" layout='fill' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/assets/images/homepage.jpg" alt="slider1" layout='fill' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/assets/images/homepage2.jpg" alt="slider1" layout='fill' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/assets/images/homepage3.jpg" alt="slider1" layout='fill' />
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default SwiperSliderBottom;