import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import Image from 'next/image'
import { Autoplay } from "swiper";

import "swiper/css"
import "swiper/css/pagination"

import { imagesConfig } from '/config'

function SwiperSliderBottom(props) {

    const { bottomSlider } = props;
    
    return (
        <>
            <Swiper

                slidesPerView={5}
                spaceBetween={10}
                breakpoints={{
                    940: {
                        slidesPerView: 5,
                        spaceBetween: 10
                    },
                    340: {
                        slidesPerView: 2.5,
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
                {bottomSlider.map((item, key) => {
                    return (
                        item.image.data.attributes && <SwiperSlide key={key} >
                            <Image loader={() => { return imagesConfig.api + item.image.data.attributes.url }}
                                src={imagesConfig.api + item.image.data.attributes.url} alt="slider1"
                                layout='fill'
                            />
                        </SwiperSlide>
                    )
                })}


            </Swiper>
        </>
    );
}

export default SwiperSliderBottom;