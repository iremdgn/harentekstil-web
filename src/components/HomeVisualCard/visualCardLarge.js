import React from 'react';
import { Card, Button} from 'react-bootstrap'

function VisualCardLarge(props) {
    return (
        <>
             <div className="visual-card-large">
                <Card>
                    <Card.Img src={props.srcVisual} alt={props.altVisual} />
                    <Card.ImgOverlay>
                        <Card.Title className="ps-3">{props.titleVisual}</Card.Title>
                        <Card.Text className="ps-3 pt-lg-3">
                            {props.textVisual}
                        </Card.Text>
                        <Button href={props.buttonLink} variant="dark" className="ms-3 mt-2 border-0 rounded-0 px-4 py-2">{props.buttonText}</Button>
                    </Card.ImgOverlay>
                </Card>
            </div>
        </>
    );
}

export default VisualCardLarge;