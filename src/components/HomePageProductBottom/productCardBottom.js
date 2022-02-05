import React from 'react';
import { Card } from 'react-bootstrap'

function ProductCardBottom(props) {
    return (
        <>
            <div className="product-card-bottom">
                <Card>
                    <Card.Img src={props.src} alt={props.alt} />
                    <div className="product-card-bottom-overlay">
                        <Card.ImgOverlay>
                            <Card.Title className="ps-2">{props.title}</Card.Title>
                            <Card.Text className="ps-2">
                                {props.text}
                            </Card.Text>
                        </Card.ImgOverlay>
                    </div>

                </Card>
            </div>
        </>
    );
}

export default ProductCardBottom;