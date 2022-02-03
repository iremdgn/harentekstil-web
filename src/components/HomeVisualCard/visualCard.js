import React from 'react';
import { Card } from 'react-bootstrap'

function VisualCard(props) {
    return (
        <>
             <div className="visual-card">
                <Card className="">
                    <Card.Img src={props.srcVisual} alt={props.altVisual} />
                    <Card.ImgOverlay>
                        <Card.Title className="ps-3">{props.titleVisual}</Card.Title>
                        <Card.Text className="ps-3 pt-3">
                            {props.textVisual}
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </div>
        </>
    );
}

export default VisualCard;