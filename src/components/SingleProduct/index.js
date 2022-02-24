import React from 'react'
import ProductSlider from './productSlider'
import OtherProductsSlider from './otherProductsSlider'
import { Container, Row, Col } from 'react-bootstrap'

function SingleProduct(props) {
    return (
        <>
            <Container className="p-lg-5 p-3 single-product">
                <Row className="p-lg-4">
                    <Col xs={12} lg={6}>
                        <ProductSlider />
                    </Col>
                    <Col xs={12} lg={6}>
                        <div className="ps-lg-5 ms-lg-4 product-text mt-4 mt-lg-0">
                            <h1>{props.Title}</h1>
                            <p><span>{props.Code}</span></p>
                            <p className="pt-2">{props.Text}</p>
                        </div>
                    </Col>
                </Row>
            </Container>

            <div className="other-products pt-5">
                <div className="other-products-text d-flex">
                    <hr className="mt-5" />
                    <h1 className="mt-3 ps-4 pt-1">Diğer Ürünlerimiz</h1>
                </div>
                <div className="other-products-area my-3 py-4">
                    <OtherProductsSlider />
                </div>
            </div>

        </>
    );
}

export default SingleProduct;