import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import Image from 'next/image'

import { imagesConfig } from '/config'

function SwiperSlider(props) {

    const { swiperImage } = props;

    console.log(swiperImage);

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
                {swiperImage.map((item, key) => {
                    return (
                        <SwiperSlide key={key}>
                            <Image
                                loader={() => { return imagesConfig.api + item.image.data.attributes.url }}
                                src={imagesConfig.api + item.image.data.attributes.url} alt={props.alt}
                                layout='fill'

                            />
                        </SwiperSlide>
                    )
                })}


            </Swiper>
        </>
    );
}

export default SwiperSlider;