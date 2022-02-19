import React from 'react'
import ContactForm from './contactForm'
import ContactInformation from './contactInformations'
import { Container, Row, Col } from 'react-bootstrap'


function Contact() {
    return (
        <>
            <Container className="p-5">
                <Row className="p-5">
                    <Col>
                       <ContactForm />
                    </Col>
                    <Col>
                       <ContactInformation />
                    </Col>
                </Row>
                
            </Container>

        </>
    );
}

export default Contact;