import React, { useEffect, useState } from "react";
import ProductSlider from "./productSlider";
import OtherProductsSlider from "./otherProductsSlider";
import { Container, Row, Col, NavItem } from "react-bootstrap";

import { useRouter } from "next/router";

function SingleProduct(props) {
  const { parentCat, childCat, products } = props;
  const router = useRouter();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    setAllProducts([]);
    var firtProduct = true;
    products.forEach((element) => {
      element.products.forEach((product) => {
        if (firtProduct) {
          setSelectedProduct(product);
          firtProduct = false;
        }
        setAllProducts((oldValue) => [...oldValue, product]);
      });
    });
  }, [products]);

  return selectedProduct ? (
    <>
      <Container className="p-lg-5 p-3 single-product">
        <Row className="p-lg-4">
          <Col xs={12} xl={6}>
            <ProductSlider
              products={allProducts}
              setSelectedProduct={setSelectedProduct}
            />
          </Col>
          <Col xs={12} xl={6} className="px-lg-4 py-lg-4">
            <div className="ps-lg-5 ms-lg-4 product-text mt-4 mt-lg-0">
              <h2>{selectedProduct.Name}</h2>
              <p>
                <span>{selectedProduct.ProductCode}</span>
              </p>
              <p className="pt-2">{selectedProduct.description}</p>

              {childCat.length > 0 && (
                <Row className="mt-4">
                  <h3>{parentCat.Name + " Ürün Grupları"}</h3>
                  {childCat.map((element, index) => {
                    console.log("element", element);
                    return (
                      <Col key={index} xl={12}>
                        <a className="nav-link text-dark" href={element.route}>{element.Name}</a>
                      </Col>
                    );
                  })}
                </Row>
              )}
            </div>
          </Col>
        </Row>
      </Container>

      <OtherProductsSlider />
    </>
  ) : (
    <p>404</p>
  );
}

export default SingleProduct;
