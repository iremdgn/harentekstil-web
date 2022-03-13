import React from "react";
import ProductCard from "../HomePageProduct/productCard";
import { Container, Row, Col } from "react-bootstrap";

function Products(props) {
  const { Category } = props;

  return (
    <>
      <Container className="p-lg-5 py-lg-0 py-3">
        <Row className="p-lg-5">
          <h1 className="category-title pb-lg-5"> {Category.Name}</h1>

          {Category &&
            Category.product_categories &&
            Category.product_categories.map((item, key) => {
              return (
                <Col key={key} xs={12} lg={6} className="py-3">
                  {item.Image && (
                    <ProductCard
                      url={item.route}
                      src={`http://localhost:1337${item.Image.url}`}
                      alt={item.Name}
                      title={item.Name}
                      text={item.subTitle}
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
