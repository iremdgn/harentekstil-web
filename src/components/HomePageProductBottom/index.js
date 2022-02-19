import React from 'react'
import ProductCardBottom from './productCardBottom'
import { Container, Row, Col } from 'react-bootstrap'

function HomePageProductBottom() {
    return (
        <>
            <Container className="p-5">
                <Row className="p-5">
                    <Col>
                        <ProductCardBottom 
                        src="/assets/images/product.png" 
                        alt="Card image" 
                        title="Kumaşlar" 
                        text="İç veya Dış Mekan kumaşları, performans ve lüksün mükemmel uyumudur."                           
                        />
                    </Col>
                    <Col>
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