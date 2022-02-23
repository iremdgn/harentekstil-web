import React from 'react'
import ProductCard from '../HomePageProduct/productCard'
import { Container, Row, Col } from 'react-bootstrap'

function Products() {
    return (
        <>
            <Container className="p-lg-5 py-lg-0 py-3">
                <Row className="p-lg-5">
                    <Col xs={12} lg={6}>
                        <ProductCard 
                        src="/assets/images/product.png" 
                        alt="Card image" 
                        title="Kumaşlar" 
                        text="İç veya Dış Mekan kumaşları, performans ve lüksün mükemmel uyumudur."                           
                        />
                    </Col>
                    <Col xs={12} lg={6}>
                        <ProductCard 
                        src="/assets/images/product.png" 
                        alt="Card image"
                        title="Kumaşlar" 
                        text="İç veya Dış Mekan kumaşları, performans ve lüksün mükemmel uyumudur." 
                        />
                    </Col>
                </Row>
                <Row className="p-lg-5">
                    <Col xs={12} lg={6}>
                        <ProductCard 
                        src="/assets/images/product.png" 
                        alt="Card image" 
                        title="Kumaşlar" 
                        text="İç veya Dış Mekan kumaşları, performans ve lüksün mükemmel uyumudur."                           
                        />
                    </Col>
                    <Col xs={12} lg={6}>
                        <ProductCard 
                        src="/assets/images/product.png" 
                        alt="Card image"
                        title="Kumaşlar" 
                        text="İç veya Dış Mekan kumaşları, performans ve lüksün mükemmel uyumudur." 
                        />
                    </Col>
                </Row>
                <Row className="p-lg-5">
                    <Col xs={12} lg={6}>
                        <ProductCard 
                        src="/assets/images/product.png" 
                        alt="Card image" 
                        title="Kumaşlar" 
                        text="İç veya Dış Mekan kumaşları, performans ve lüksün mükemmel uyumudur."                           
                        />
                    </Col>
                    <Col xs={12} lg={6}>
                        <ProductCard 
                        src="/assets/images/product.png" 
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

export default Products;