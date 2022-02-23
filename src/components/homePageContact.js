import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'

function HomePageContact() {
    return (
        <div className="homepage-contact">
            <Container className="p-lg-5">
                <Row className="p-5">
                    <Col>
                        <h4>Bizimle İletişime Geçebilirsiniz</h4>
                        <p className="pt-2">En son modellerimiz, ürün güncellemelerimiz ve daha fazlası hakkında bilgi almak için bizi arayın.</p>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Button className="rounded-0 border-0 my-lg-5 px-5" size="lg" type="submit">Bize Ulaşın</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HomePageContact;