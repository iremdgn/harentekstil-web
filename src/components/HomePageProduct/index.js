import React from 'react'
import ProductCard from './productCard'
import ProductService from './productService';
import { Container, Row, Col } from 'react-bootstrap'

function HomePageProduct() {
    return (
        <>
            <Container className="p-5">
                <Row className="p-5">
                    <Col>
                        <ProductCard />
                    </Col>
                    <Col>
                        <ProductCard />
                    </Col>
                </Row>
            </Container>

            <ProductService />

        </>
    );
}

export default HomePageProduct;