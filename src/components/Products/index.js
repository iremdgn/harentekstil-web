import React from 'react'
import ProductCard from '../HomePageProduct/productCard'
import { Container, Row, Col } from 'react-bootstrap'

function Products() {
    return (
        <>
            <Container className="p-5">
                <Row className="p-5">
                    <Col>
                        <ProductCard 
                        src="/assets/images/product.png" 
                        alt="Card image" 
                        title="Kumaşlar" 
                        text="İç veya Dış Mekan kumaşları, performans ve lüksün mükemmel uyumudur."                           
                        />
                    </Col>
                    <Col>
                        <ProductCard 
                        src="/assets/images/product.png" 
                        alt="Card image"
                        title="Kumaşlar" 
                        text="İç veya Dış Mekan kumaşları, performans ve lüksün mükemmel uyumudur." 
                        />
                    </Col>
                </Row>
                <Row className="p-5">
                    <Col>
                        <ProductCard 
                        src="/assets/images/product.png" 
                        alt="Card image" 
                        title="Kumaşlar" 
                        text="İç veya Dış Mekan kumaşları, performans ve lüksün mükemmel uyumudur."                           
                        />
                    </Col>
                    <Col>
                        <ProductCard 
                        src="/assets/images/product.png" 
                        alt="Card image"
                        title="Kumaşlar" 
                        text="İç veya Dış Mekan kumaşları, performans ve lüksün mükemmel uyumudur." 
                        />
                    </Col>
                </Row>
                <Row className="p-5">
                    <Col>
                        <ProductCard 
                        src="/assets/images/product.png" 
                        alt="Card image" 
                        title="Kumaşlar" 
                        text="İç veya Dış Mekan kumaşları, performans ve lüksün mükemmel uyumudur."                           
                        />
                    </Col>
                    <Col>
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