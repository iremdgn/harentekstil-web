import React from 'react';
import { Row, Col } from 'react-bootstrap'
import BannerText from './BannerText'

function Banner(props) {
    return (
        <div className="banner d-flex justify-content-center align-items-center" style={{ backgroundColor: props.bgColor }} >
            <Row className={"banner-area " + props.bannerClass}>
                <Col className="banner-text">
                    <BannerText
                        title={props.title}
                        text={props.text}
                    />
                </Col>
                <Col style={{ backgroundImage: `url(${props.imageUrl})` }}>

                </Col>
            </Row>

        </div>
    );
}

export default Banner;