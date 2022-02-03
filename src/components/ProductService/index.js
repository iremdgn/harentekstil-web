import React from 'react';
import { Row, Col } from 'react-bootstrap'
import ProductServiceText from './productServiceText'

function ProductService(props) {
  return (
    <>
      <Row className={'product-service ' + props.serviceClass}>
        <Col className="product-service-area">
          <ProductServiceText
            miniTitle={props.miniTitle}
            title={props.title}
            text={props.text}
          />
        </Col>
        <Col  style={{ backgroundImage: `url(${props.imageUrl})` }}>
        </Col>
      </Row>

    </>
  );
}

export default ProductService;