import React from 'react';
import { Row, Col } from 'react-bootstrap'
import ProductServiceText from './productServiceText'

function ProductService(props) {
  return (
    <div className="service">
      <Row className={'product-service ' + props.serviceClass}>
        <Col xs={12} xl={6} className="product-service-area">
          <ProductServiceText
            miniTitle={props.miniTitle}
            title={props.title}
            text={props.text}
          />
        </Col>
        <Col className="product-service-image" xs={12} xl={6}  style={{ backgroundImage: `url(${props.imageUrl})` }}>
        </Col>
      </Row>

    </div>
  );
}

export default ProductService;