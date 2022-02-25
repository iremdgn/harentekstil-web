import React from 'react'
import ProductCard from '../HomePageProduct/productCard'
import { Container, Row, Col } from 'react-bootstrap'

function Products(props) {
    return (
        <>
            <Container className="p-lg-5 py-lg-0 py-3">

                <Row className="p-lg-5">
                    <h1 className="category-title pb-lg-5">Kategori:  {props.Category}</h1>
                    <Col xs={12} lg={6}>
                        <ProductCard
                            src="/assets/images/product.png"
                            alt="Card image"
                            title="Marin Havlu"
                            text="Softface Marin Havlu Serisi"
                        />
                    </Col>
                    <Col xs={12} lg={6}>
                        <ProductCard
                            src="/assets/images/product.png"
                            alt="Card image"
                            title="Marin Deri"
                            text="Marin Deri Kumaş Çeşitleri"
                        />
                    </Col>
                </Row>
                <Row className="p-lg-5">
                    <Col xs={12} lg={6}>
                        <ProductCard
                            src="/assets/images/product.png"
                            alt="Card image"
                            title="Marin Döşemelik Dış Mekan"
                            text="Oleflex Dış Mekan Döşemelik"
                        />
                    </Col>
                    <Col xs={12} lg={6}>
                        <ProductCard
                            src="/assets/images/product.png"
                            alt="Card image"
                            title="Marin Teknelik Akrelik"
                            text="Reausens (120cm), Recsystem Plus (150cm)"
                        />
                    </Col>
                </Row>
                <Row className="p-lg-5">
                    <Col xs={12} lg={6}>
                        <ProductCard
                            src="/assets/images/product.png"
                            alt="Card image"
                            title="Tekne Kapama Kumaşları"
                            text="Mehler, Stomoid, Walmex, Polyester Branda"
                        />
                    </Col>
                    <Col xs={12} lg={6}>
                        <ProductCard
                            src="/assets/images/product.png"
                            alt="Card image"
                            title="Mika Şeffaf Cam"
                            text="Mika Kumaş Çeşitleri"
                        />
                    </Col>
                </Row>

            </Container>

        </>
    );
}

export default Products;