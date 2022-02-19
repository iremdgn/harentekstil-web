import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper";
import { Card } from 'react-bootstrap'

import "swiper/css"


function ProductSwiperSlider() {
    return (
        <>
            <Swiper

                slidesPerView={6}
                spaceBetween={25}
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
                            <Card.Title className="text-center pt-2">Kategori</Card.Title>
                        </Card.Body>
                    </Card>       
                </SwiperSlide>
                <SwiperSlide>
                    <Card>
                        <Card.Img variant="top" src="/assets/images/homepage.jpg" />
                        <Card.Body>
                            <Card.Title className="text-center pt-2">Kategori</Card.Title>
                        </Card.Body>
                    </Card>       
                </SwiperSlide>
                <SwiperSlide>
                    <Card>
                        <Card.Img variant="top" src="/assets/images/homepage.jpg" />
                        <Card.Body>
                            <Card.Title className="text-center pt-2">Kategori</Card.Title>
                        </Card.Body>
                    </Card>       
                </SwiperSlide>
                <SwiperSlide>
                    <Card>
                        <Card.Img variant="top" src="/assets/images/homepage.jpg" />
                        <Card.Body>
                            <Card.Title className="text-center pt-2">Kategori</Card.Title>
                        </Card.Body>
                    </Card>       
                </SwiperSlide>
                <SwiperSlide>
                    <Card>
                        <Card.Img variant="top" src="/assets/images/homepage.jpg" />
                        <Card.Body>
                            <Card.Title className="text-center pt-2">Kategori</Card.Title>
                        </Card.Body>
                    </Card>       
                </SwiperSlide>
                <SwiperSlide>
                    <Card>
                        <Card.Img variant="top" src="/assets/images/homepage.jpg" />
                        <Card.Body>
                            <Card.Title className="text-center pt-2">Kategori</Card.Title>
                        </Card.Body>
                    </Card>       
                </SwiperSlide>
                <SwiperSlide>
                    <Card>
                        <Card.Img variant="top" src="/assets/images/homepage.jpg" />
                        <Card.Body>
                            <Card.Title className="text-center pt-2">Kategori</Card.Title>
                        </Card.Body>
                    </Card>       
                </SwiperSlide>
                <SwiperSlide>
                    <Card>
                        <Card.Img variant="top" src="/assets/images/homepage.jpg" />
                        <Card.Body>
                            <Card.Title className="text-center pt-2">Kategori</Card.Title>
                        </Card.Body>
                    </Card>       
                </SwiperSlide>
               
            </Swiper>

        </>
    );
}

export default ProductSwiperSlider;