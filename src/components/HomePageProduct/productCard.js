import React from 'react';
import { Card } from 'react-bootstrap'

function ProductCard(props) {
    return (
        <>
            <div className="product-card position-relative my-3 my-lg-0">
                <Card>
                    <a className="link-full" href={props.url}></a>
                    <Card.Img src={props.src} alt={props.alt} />
                    <div className="product-card-overlay">
                        <Card.ImgOverlay>
                            <Card.Title className="ps-3 pt-2">{props.title}</Card.Title>
                            <Card.Text className="ps-3">
                                {props.text}
                            </Card.Text>
                        </Card.ImgOverlay>
                    </div>
                </Card>
            </div>
        </>
    );
}

export default ProductCard;