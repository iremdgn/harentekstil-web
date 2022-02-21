import React from 'react'
import ProductSlider from './productSlider'
import { Container, Row, Col } from 'react-bootstrap'

function SingleProduct() {
    return (
        <>
            <Container className="p-5">
                <Row className="p-5">
                    <Col>
                      <ProductSlider />
                    </Col>
                    <Col>
                       
                    </Col>
                </Row>
            </Container>

        </>
    );
}

export default SingleProduct;