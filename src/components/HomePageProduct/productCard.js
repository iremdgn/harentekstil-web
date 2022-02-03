import React from 'react';
import { Card } from 'react-bootstrap'

function ProductCard(props) {
    return (
        <>
            <div className="product-card">
                <Card className="">
                    <Card.Img src={props.src} alt={props.alt} />
                    <Card.ImgOverlay>
                        <Card.Title className="ps-3">{props.title}</Card.Title>
                        <Card.Text className="ps-3">
                            {props.text}
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </div>
        </>
    );
}

export default ProductCard;