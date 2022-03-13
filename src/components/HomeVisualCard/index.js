import React from "react";
import { Row, Col } from "react-bootstrap";
import VisualCard from "./visualCard";
import VisualCardLarge from "./visualCardLarge";

import { apiConfig } from "/config";

function HomeVisualCard(props) {
  const { visualCardLarge, visualCard } = props;

  return (
    <div className="home-visual">
      <Row>
        <Col xl={7}>
          <VisualCardLarge
            srcVisual={
              apiConfig.api + visualCardLarge.image.data.attributes.url
            }
            altVisual="Card image"
            titleVisual={visualCardLarge.title}
            textVisual={visualCardLarge.text}
            buttonText={visualCardLarge.buttonText}
            buttonLink={visualCardLarge.buttonLink}
          />
        </Col>
        <Col xl={5}>
          {visualCard.map((item, key) => {
            return (
              <VisualCard
                key={key}
                srcVisual={apiConfig.api + item.image.data.attributes.url}
                altVisual="Card image"
                titleVisual={item.title}
                textVisual={item.text}
                link={item.link}
              />
            );
          })}
        </Col>
      </Row>
    </div>
  );
}

export default HomeVisualCard;
