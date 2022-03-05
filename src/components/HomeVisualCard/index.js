import React from 'react'
import { Row, Col } from 'react-bootstrap'
import VisualCard from './visualCard'
import VisualCardLarge from './visualCardLarge'

import { imagesConfig } from '/config'

function HomeVisualCard(props) {

    const { visualCardLarge, visualCard } = props;

    return (
        <div className="home-visual">
            <Row>
                <Col lg={7}>
                    <VisualCardLarge
                        srcVisual={imagesConfig.api + visualCardLarge.image.data.attributes.url}
                        altVisual="Card image"
                        titleVisual={visualCardLarge.title}
                        textVisual={visualCardLarge.text}
                        buttonText={visualCardLarge.buttonText}
                        buttonLink={visualCardLarge.buttonLink}
                    />
                </Col>
                <Col lg={3}>
                    {visualCard.map((item, key) => {
                        return (
                            <VisualCard key={key}
                                srcVisual={imagesConfig.api + item.image.data.attributes.url}
                                altVisual="Card image"
                                titleVisual={item.title}
                                textVisual={item.text}
                                link={item.link}
                            />
                        )
                    })}

                </Col>
            </Row>

        </div>
    );
}

export default HomeVisualCard;