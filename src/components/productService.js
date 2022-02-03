import React from 'react';
import { Row, Col } from 'react-bootstrap'
import ProductServiceText from './productServiceText'

function ProductService() {
  return (
    <>
      <Row className="product-service">
        <Col className="area-left">
          <ProductServiceText
            miniTitle="lüksü yaşamak"
            title="TÜM DETAYLAR ÖNEMLİ"
            text="Üstün ürünler sunma tutkumuz, bu ürünlerin performansıyla örtüşmektedir. Solmaya, yıpranmaya ve küflenmeye karşı dayanıklı, bakımı kolay ve teknik olarak üstün kumaşlarla olağanüstü mekanlar tasarlamak bizim işimiz."
          />
        </Col>
        <Col className="" style={{ backgroundImage: "url('/assets/images/homepage2.jpg')" }}>
        </Col>
      </Row>

      <Row className="product-service">
        <Col style={{ backgroundImage: "url('/assets/images/homepage.jpg')" }}>
        </Col>
        <Col className="area-right">
          <ProductServiceText
            miniTitle="olağanüstü tasarım"
            title="KALİTENİN ADRESİ"
            text="Ürünlerimiz, işini seven yetenekli tasarımcılar ve zanaatkarlar tarafından yaratılmıştır. Harika insanlar ve olağanüstü üretim yeteneklerinin birleşimi, olağanüstü tasarım ve performansla sonuçlanır."
          />
        </Col>
      </Row>

    </>
  );
}

export default ProductService;