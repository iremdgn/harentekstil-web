import React from 'react';
import { Card } from 'react-bootstrap'

function ProductCard() {
    return (
        <>
            <div className="product-card">
                <Card className="">
                    <Card.Img src="/assets/images/product.jpg" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title className="ps-3">Kumaşlar</Card.Title>
                        <Card.Text className="ps-3">
                            İç veya Dış Mekan kumaşları, performans ve lüksün mükemmel uyumudur.
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </div>
        </>
    );
}

export default ProductCard;