import React from 'react'
import ProductCard from './productCard'
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

        </>
    );
}

export default HomePageProduct;