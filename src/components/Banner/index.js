import React from 'react';
import { Row, Col, Container } from 'react-bootstrap'
import Image from 'next/image'
import BannerText from './BannerText'

function Banner(props) {
    return (
        <div className="banner d-flex justify-content-center align-items-center">
            <Row className="banner-area">
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