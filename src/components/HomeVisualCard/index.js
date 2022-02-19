import React from 'react'
import { Row, Col } from 'react-bootstrap'
import VisualCard from './visualCard'
import VisualCardLarge from './visualCardLarge'

function HomeVisualCard() {
    return (
        <div className="home-visual">
            <Row>
                <Col sm={7}>
                    <VisualCardLarge 
                        srcVisual="/assets/images/visualcard3.jpg" 
                        altVisual="Card image" 
                        titleVisual="Kumaşlar" 
                        textVisual="İç veya Dış Mekan kumaşları, performans ve lüksün mükemmel uyumudur."  
                    />
                </Col>
                <Col sm={3}>
                    <VisualCard 
                        srcVisual="/assets/images/visualcard.jpg" 
                        altVisual="Card image" 
                        titleVisual="Kumaşlar" 
                        textVisual="İç veya Dış Mekan kumaşları, performans ve lüksün mükemmel uyumudur."  
                    />
                    <VisualCard 
                        srcVisual="/assets/images/slider4.jpg" 
                        altVisual="Card image" 
                        titleVisual="Kumaşlar" 
                        textVisual="İç veya Dış Mekan kumaşları, performans ve lüksün mükemmel uyumudur."  
                    />
                </Col>
            </Row>

        </div>
    );
}

export default HomeVisualCard;