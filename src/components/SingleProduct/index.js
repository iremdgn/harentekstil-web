import React from 'react'
import ProductSlider from './productSlider'
import OtherProductsSlider from './otherProductsSlider'
import { Container, Row, Col } from 'react-bootstrap'

function SingleProduct(props) {
    return (
        <>
            <Container className="p-5 single-product">
                <Row className="p-4">
                    <Col>
                        <ProductSlider />
                    </Col>
                    <Col>
                        <div className="ps-5 ms-4 product-text">
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