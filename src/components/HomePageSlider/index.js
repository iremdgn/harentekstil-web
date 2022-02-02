import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'
import SwiperSlider from './swiperSlider';


function HomePageSlider() {
  return (
    <>
      <Row className="homepage-slider mt-3">
        <Col className="d-flex justify-content-start">
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
        <Col className="d-flex justify-content-end" style={{ backgroundImage: "url('/assets/images/homepage2.jpg')"}}>

        </Col>
      </Row>
    </>
  );
}

export default HomePageSlider;