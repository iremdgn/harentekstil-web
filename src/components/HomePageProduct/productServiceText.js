import React from 'react';
import { Row, Col } from 'react-bootstrap'

function ProductServiceText(props) {
  return (
    <>
    
          <div className="text-area">
            <p className="mini-title">{props.miniTitle}</p>
            <h1>{props.title}</h1>
            <p className="service-text pt-3">{props.text}</p>
          </div>

    </>
  );
}

export default ProductServiceText;