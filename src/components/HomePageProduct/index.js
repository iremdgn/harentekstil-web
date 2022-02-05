import React from 'react'
import ProductCard from './productCard'
import { Container, Row, Col } from 'react-bootstrap'

function HomePageProduct() {
    return (
        <>
            <Container className="p-5">
                <Row className="p-5">
                    <Col>
                        <ProductCard 
                        src="/assets/images/product.jpg" 
                        alt="Card image" 
                        title="Kumaşlar" 
                        text="İç veya Dış Mekan kumaşları, performans ve lüksün mükemmel uyumudur."                           
                        />
                    </Col>
                    <Col>
                        <ProductCard 
                        src="/assets/images/product.jpg" 
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

export default HomePageProduct;