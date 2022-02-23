import React from 'react'
import { Form, Button } from 'react-bootstrap'


function ContactInformation() {
    return (
        <div className="contact ps-lg-5 ms-lg-5 pt-4 pt-lg-0">
            <div>
                <h1 className="pb-lg-4">İletişim Bilgilerimiz</h1>

                <div className="d-flex">
                    <p className="pe-2"><span>Telefon 1: </span></p>
                    <p> <a href="tel:+905333487249">0 (533) 348 7249</a> </p>
                </div>

                <div className="d-flex">
                    <p className="pe-2"> <span>Telefon 2: </span></p>
                    <p> <a href="tel:+905332602189">0(533) 260 2189</a> </p>
                </div>

                <div className="d-flex">
                    <p className="pe-2"> <span>Telefon 3 (Depo): </span> </p>
                    <p> <a href="tel:+902582111091"> 0 (258) 211 1091</a> </p>
                </div>

                <div className="d-flex">
                    <p className="pe-2"> <span>Mail Adresi: </span></p>
                    <p> <a href="mailto:info@harentekstil.com"> info@harentekstil.com</a> </p>
                </div>
            </div>

            <div>
                <h1 className="pb-2 pt-lg-3">Adresimiz</h1>

                <p><span>Eskihisar mahahallesi 8015 sokak 1A/Blok No: 3 Merkezefendi/Denizli</span></p>
            </div>

        </div>
    );
}

export default ContactInformation;