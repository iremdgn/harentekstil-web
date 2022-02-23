import React from 'react';
import { Row, Col } from 'react-bootstrap'
import SwiperSlider from './swiperSlider';


function HomePageSlider() {
  return (
    <>
      <Row className="homepage-slider mt-3">
        <Col sm={12} lg={6} className="d-flex position-relative text-area">
          <div>
            <hr className="line"></hr>
            <div className="slider-text py-2">
              <h1 className="px-5 pt-3 fw-normal">Şık & Kaliteli.</h1>
              <h1 className="px-5 fw-normal">İşte yaşanabilir lüks.</h1>
              <p className="ps-5 pt-2">Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500lerden beri endüstri standardı sahte metinler olarak kullanılmıştır.</p>
            </div>
            <div className="swiper-area">
              <SwiperSlider />
            </div>

          </div>
        </Col>
        <Col sm={12} lg={6} className="homepage-image" style={{ backgroundImage: "url('/assets/images/homepage2.jpg')" }}>

        </Col>
      </Row>
    </>
  );
}

export default HomePageSlider;