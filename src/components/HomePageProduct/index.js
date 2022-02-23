import React from 'react'
import ProductCard from './productCard'
import { Container, Row, Col } from 'react-bootstrap'

function HomePageProduct() {
    return (
        <>
            <Container className="p-5">
                <Row className="p-lg-5">
                    <Col xs={12} lg={6} className="mb-3">
                        <ProductCard 
                        src="/assets/images/product.png" 
                        alt="Card image" 
                        title="Fermuar" 
                        text="İç veya Dış Mekan kumaşları, performans ve lüksün mükemmel uyumudur."                           
                        />
                    </Col>
                    <Col xs={12} lg={6}>
                        <ProductCard 
                        src="/assets/images/product2.png" 
                        alt="Card image"
                        title="Geçmeli Toka" 
                        text="İç veya Dış Mekan kumaşları, performans ve lüksün mükemmel uyumudur." 
                        />
                    </Col>
                </Row>
                
            </Container>

        </>
    );
}

export default HomePageProduct;