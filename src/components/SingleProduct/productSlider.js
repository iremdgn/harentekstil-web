import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import Image from 'next/image'

// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"


// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper"

function ProductSlider() {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className="single-product">
   
            <Swiper
                slidesPerView={1}
            
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="swiper-container gallery-top"
            >
                <SwiperSlide>
                     <Image src="/assets/images/slider.jpg" alt="slider1" layout='fill' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/assets/images/slider2.jpg" alt="slider1" layout='fill' />
                </SwiperSlide>
                <SwiperSlide>
                     <Image src="/assets/images/slider3.jpg" alt="slider1" layout='fill' />
                </SwiperSlide>
                <SwiperSlide>
                     <Image src="/assets/images/slider4.jpg" alt="slider1" layout='fill' />
                </SwiperSlide>
            </Swiper>
            <Swiper
                spaceBetween={20}
                onSwiper={setThumbsSwiper}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="swiper-container gallery-thumbs mt-3"
            >
                <SwiperSlide>
                     <Image src="/assets/images/slider.jpg" alt="slider1" layout='fill' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/assets/images/slider2.jpg" alt="slider1" layout='fill' />
                </SwiperSlide>
                <SwiperSlide>
                     <Image src="/assets/images/slider3.jpg" alt="slider1" layout='fill' />
                </SwiperSlide>
                <SwiperSlide>
                     <Image src="/assets/images/slider4.jpg" alt="slider1" layout='fill' />
                </SwiperSlide>

            </Swiper>
        </div>
    );
}


export default ProductSlider;
