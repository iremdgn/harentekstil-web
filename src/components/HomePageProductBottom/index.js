import React from 'react'
import ProductCardBottom from './productCardBottom'
import { Container, Row, Col } from 'react-bootstrap'

function HomePageProductBottom() {
    return (
        <>
            <Container className="p-lg-5 home-bottom-product">
                <Row className="p-lg-5">
                    <Col xs={12} lg={6} className="mb-3">
                        <ProductCardBottom 
                        src="/assets/images/product.png" 
                        alt="Card image" 
                        title="Kumaşlar" 
                        text="İç veya Dış Mekan kumaşları, performans ve lüksün mükemmel uyumudur."                           
                        />
                    </Col>
                    <Col xs={12} lg={6}>
                        <ProductCardBottom 
                        src="/assets/images/product2.png" 
                        alt="Card image"
                        title="Kumaşlar" 
                        text="İç veya Dış Mekan kumaşları, performans ve lüksün mükemmel uyumudur." 
                        />
                    </Col>
                </Row>
            </Container>

        </>
    );
}

export default HomePageProductBottom;