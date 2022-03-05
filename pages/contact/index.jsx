import React, { useState, useEffect } from 'react'
import Jumbotron from '/src/components/Jumbotron'
import Contact from '/src/components/Contact'

import { get } from '/src/services/request'
import { imagesConfig } from '/config'

function ContactPage() {

    const [contactPage, setContactPage] = useState(null);

    const getContactData = async () => {
        const response = await get('http://localhost:1337/api/contact-page',
            {
                populate: [
                    'jumbotron',
                    'jumbotron.image',
                    'jumbotron.image.media',
                ]
            });
        console.log(response);

        if (response.status === 200) {
            setContactPage(response.data.data.attributes);
        }
    }

    useEffect(() => {
        getContactData();
    }, []);


    return (

        contactPage != null &&

        <>
            <Jumbotron
                imageUrl={imagesConfig.api + contactPage.jumbotron.image.data.attributes.url}
                miniTitle="İLETİŞİM"
                title={contactPage.jumbotron.title}
                text={contactPage.jumbotron.text}
            />
            <Contact />
        </>
    );
}

export default ContactPage;
