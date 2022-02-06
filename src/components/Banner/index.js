import React from 'react';
import { Row, Col, Container } from 'react-bootstrap'
import BannerText from './BannerText'

function Banner(props) {
    return (
        <div className="banner d-flex justify-content-center align-items-center">
            <Row className={"banner-area " + props.bannerClass}>
                <Col className="banner-text">
                    <BannerText
                        title={props.title}
                        text={props.text}
                    />
                </Col>
                <Col style={{ backgroundImage: "url('/assets/images/homepage2.jpg')" }}>

                </Col>
            </Row>

        </div>
    );
}

export default Banner;