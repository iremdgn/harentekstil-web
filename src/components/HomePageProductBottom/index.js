import React from 'react'
import ProductCardBottom from './productCardBottom'
import { Container, Row, Col } from 'react-bootstrap'

import { imagesConfig } from '/config'

function HomePageProductBottom(props) {

    const { productList } = props;

    console.log("bottompro", productList);

    return (
        <>
            <Container className="p-lg-5 home-bottom-product">
                <Row className="p-lg-5">
                    {productList.map((item, key) => {
                        return (
                            <Col key={key} xs={12} lg={6} className="mb-3">
                                <ProductCardBottom
                                    src={imagesConfig.api + item.image.image.data.attributes.url}
                                    alt="Card image"
                                    title={item.title}
                                    text={item.text}
                                    url={item.image.url}
                                />
                            </Col>
                        )
                    })}
                </Row>
            </Container>

        </>
    );
}

export default HomePageProductBottom;