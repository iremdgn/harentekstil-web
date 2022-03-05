import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'

function HomePageContact(props) {
    return (
        <div className="homepage-contact">
            <Container className="p-lg-5">
                <Row className="p-5">
                    <Col>
                        <h4>{props.title}</h4>
                        <p className="pt-2">{props.text}</p>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Button href={props.link} className="custom-button rounded-0 border-0 my-lg-5 px-5" size="lg" type="submit">Bize Ulaşın</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HomePageContact;