import React from 'react'
import ContactForm from './contactForm'
import ContactInformation from './contactInformations'
import { Container, Row, Col } from 'react-bootstrap'


function Contact() {
    return (
        <>
            <Container className="p-lg-5 p-3">
                <Row className="p-lg-5 p-3">
                    <Col xs={12} lg={6}>
                       <ContactForm />
                    </Col>
                    <Col xs={12} lg={6}>
                       <ContactInformation />
                    </Col>
                </Row>
                
            </Container>

        </>
    );
}

export default Contact;