import React from 'react'
import { Form, Button} from 'react-bootstrap'


function ContactForm() {
    return (
        <div className="contact">
            <h1 className="pb-4">Mesajınızı İletin!</h1>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" name="name" placeholder="Ad Soyad" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="email" name="email" placeholder="E-mail" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" name="subject" placeholder="Konu" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control type="text" name="textarea" placeholder="Mesajınız..." as="textarea" rows={3} />
                </Form.Group>
                <Button className="py-2" type="submit" name="submit">GÖNDER</Button>
            </Form>

        </div>
    );
}

export default ContactForm;