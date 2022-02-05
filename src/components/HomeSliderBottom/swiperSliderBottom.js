import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import Image from 'next/image'

import "swiper/css"
import "swiper/css/pagination"


import { Pagination } from "swiper"

function SwiperSliderBottom() {
    return (
        <>
            <Swiper

                slidesPerView={5}
                spaceBetween={10}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
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