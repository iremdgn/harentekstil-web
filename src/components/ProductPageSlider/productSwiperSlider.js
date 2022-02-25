import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper"
import { Card } from 'react-bootstrap'

import "swiper/css"


function ProductSwiperSlider() {
    return (
        <>
            <Swiper

                slidesPerView={4}
                spaceBetween={25}
                breakpoints={{
                    940: {
                        slidesPerView:4,
                        spaceBetween:25
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

                className="mySwiper pt-5"
            >

                <SwiperSlide>
                    <Card>
                        <Card.Img variant="top" src="/assets/images/homepage.jpg" />
                        <Card.Body>
                            <Card.Title className="text-center pt-lg-2">Tekne / Yat Kumaşları</Card.Title>
                        </Card.Body>
                    </Card>       
                </SwiperSlide>
                <SwiperSlide>
                    <Card>
                        <Card.Img variant="top" src="/assets/images/homepage.jpg" />
                        <Card.Body>
                            <Card.Title className="text-center pt-lg-2">Bahçe Mobilyası / Sahil / Havuzbaşı Kumaşları</Card.Title>
                        </Card.Body>
                    </Card>       
                </SwiperSlide>
                <SwiperSlide>
                    <Card>
                        <Card.Img variant="top" src="/assets/images/homepage.jpg" />
                        <Card.Body>
                            <Card.Title className="text-center pt-lg-2">Gölgeleme / Şemsiye / Branda Kumaşları</Card.Title>
                        </Card.Body>
                    </Card>       
                </SwiperSlide>
                <SwiperSlide>
                    <Card>
                        <Card.Img variant="top" src="/assets/images/homepage.jpg" />
                        <Card.Body>
                            <Card.Title className="text-center pt-lg-2">Dış Mekan Fermuar ve Plastik Aksesuarlar</Card.Title>
                        </Card.Body>
                    </Card>       
                </SwiperSlide>
               
            </Swiper>

        </>
    );
}

export default ProductSwiperSlider;