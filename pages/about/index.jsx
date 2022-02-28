import React, { useState, useEffect } from 'react'
import Banner from '/src/components/Banner'
import Jumbotron from '/src/components/Jumbotron'
import ProductService from '/src/components/ProductService'

import { get } from '/src/services/request'
import { servicesConfig } from '/config'


function AboutPage() {

    const [aboutPage, setAboutPage] = useState(null);

    const getAboutPageData = async () => {
        const response = await get('http://localhost:1337/api/about-page', { populate: ['productService', 'productService.image', 'productService.image.media'] });
        console.log(response);
        if (response.status === 200) {
            setAboutPage(response.data.data.attributes);
        }
    }

    useEffect(() => {
        getAboutPageData();
    }, []);

    return (

        aboutPage != null &&
        <>
            <Jumbotron
                imageUrl="/assets/images/homepage2.jpg"
                title="Biz Kimiz?"
                text="Üstün ürünler sunma tutkumuz, bu ürünlerin performansıyla örtüşmektedir. Solmaya, yıpranmaya ve küflenmeye karşı dayanıklı, bakımı kolay ve teknik olarak üstün kumaşlarla olağanüstü mekanlar tasarlamak bizim işimiz."
            />
            <Banner
                imageUrl="/assets/images/homepage2.jpg"
                title="Üstün Performanslı Ürünler"
                text="Üstün ürünler sunma tutkumuz, bu ürünlerin performansıyla örtüşmektedir. Solmaya, yıpranmaya ve küflenmeye karşı dayanıklı, bakımı kolay ve teknik olarak üstün kumaşlarla olağanüstü mekanlar tasarlamak bizim işimiz."
                bannerClass="d-flex flex-row-reverse"
            />
            {aboutPage.productService.map((item, key) => {
                return (
                    <ProductService key={key}
                        imageUrl={servicesConfig.api + item.image.data.attributes.url}
                        miniTitle={item.miniTitle}
                        title={item.title}
                        text={item.text}
                        serviceClass={item.position == "left" ? "d-flex flex-row-reverse" : " "} />
                )
            })}

        </>
    );
}

export default AboutPage;
