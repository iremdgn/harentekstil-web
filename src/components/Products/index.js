import React from "react";
import ProductCard from "../HomePageProduct/productCard";
import { Container, Row, Col } from "react-bootstrap";

import { apiConfig } from "/config";

function Products(props) {
  const { Category, setPreloader } = props;

  return (
    <>
      <Container className="p-lg-5 py-lg-0 py-3">
        <Row className="p-lg-5">
          <h1 className="category-title pb-lg-5"> {Category.Name}</h1>

          {Category &&
            Category.product_categories &&
            Category.product_categories.map((item, key) => {
              return (
                <Col key={key} xs={12} xl={6} className="py-3">
                  {item.Image && (
                    <ProductCard
                      url={item.route}
                      src={`${apiConfig.api + item.Image.url}`}
                      alt={item.Name}
                      title={item.Name}
                      text={item.subTitle}
                      setPreloader={setPreloader}
                    />
                  )}
                </Col>
              );
            })}
        </Row>
      </Container>
    </>
  );
}

export default Products;
