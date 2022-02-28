import React from 'react';
import { Row, Col } from 'react-bootstrap'
import SwiperSlider from './swiperSlider';


function HomePageSlider(props) {
  return (
    <div className="home-slider">
      <Row className="homepage-slider mt-3">
        <Col sm={12} lg={6} className="d-flex position-relative text-area">
          <div>
            <hr className="line"></hr>
            <div className="slider-text py-2">
              <h1 className="px-5 pt-3 fw-normal">{props.title}</h1>
              <h1 className="px-5 fw-normal">{props.fistText}</h1>
              <p className="ps-5 pt-2">{props.text}</p>
            </div>
            <div className="swiper-area">
              <SwiperSlider
                swiperImage={props.swiperImage}
                alt="homePageSliderImage"
              />
            </div>

          </div>
        </Col>
        <Col sm={12} lg={6} className="homepage-image" style={{ backgroundImage: `url(${props.imageUrl})` }}>

        </Col>
      </Row>
    </div>
  );
}

export default HomePageSlider;