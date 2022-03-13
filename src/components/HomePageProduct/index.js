import React from "react";
import ProductCard from "./productCard";
import { Container, Row, Col } from "react-bootstrap";

import { apiConfig } from "/config";

function HomePageProduct(props) {
  const { productList } = props;

  console.log("toppro", productList);

  return (
    <>
      <Container className="p-5">
        <Row className="p-lg-5">
          {productList.map((item, key) => {
            return (
              <Col key={key} xs={12} xl={6} className="mb-3">
                <ProductCard
                  src={apiConfig.api + item.image.image.data.attributes.url}
                  alt="Card image"
                  title={item.title}
                  text={item.text}
                  url={item.image.url}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default HomePageProduct;
