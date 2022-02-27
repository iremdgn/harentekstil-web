import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { get } from '/src/services/request'


function ContactInformation() {

    const [contactData, setContactData] = useState(null);

    const getContactData = async () => {
        const response = await get('http://localhost:1337/api/contact-page', { populate: '*' });

        console.log(response);
        //console.log(response.data.data.attributes);
        if (response.status === 200) {
            setContactData(response.data.data.attributes);
        }
    }

    useEffect(() => {
        getContactData();
    }, []);

    return (

        contactData != null ?

            <div className="contact ps-lg-5 ms-lg-5 pt-4 pt-lg-0">
                <div>
                    <h1 className="pb-lg-4">İletişim Bilgilerimiz</h1>

                    {contactData.companyPhones.map((item, key) => {
                        return (
                            <div className="d-flex" key={key}>
                                <p className="pe-2"><span>{item.title}</span></p>
                                <p> <a href={`tel:+9${item.phone}`}>{item.phone}</a> </p>
                            </div>
                        );
                    })}

                    <div className="d-flex">
                        <p className="pe-2"> <span>Mail Adresi: </span></p>
                        <p> <a href={`mailto:${contactData.eMail}`}>{contactData.eMail}</a> </p>
                    </div>
                </div>

                <div>
                    <h1 className="pb-2 pt-lg-3">Adresimiz</h1>

                    <p><span>{contactData.Address}</span></p>
                </div>

            </div> : <p>Data Bulunamadı... :(</p>
    );
}

export default ContactInformation;