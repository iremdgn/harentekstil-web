import React, { useState, useEffect } from 'react'
import Banner from '/src/components/Banner'
import Jumbotron from '/src/components/Jumbotron'
import ProductService from '/src/components/ProductService'

import { get } from '/src/services/request'
import { imagesConfig } from '/config'


function AboutPage() {

    const [aboutPage, setAboutPage] = useState(null);

    const getAboutPageData = async () => {
        const response = await get('http://localhost:1337/api/about-page',
            {
                populate: [
                    'productService',
                    'productService.image',
                    'productService.image.media',
                    'jumbotron',
                    'jumbotron.image',
                    'jumbotron.image.media',
                    'banner',
                    'banner.image',
                    'banner.image.media'
                ]
            });
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
                imageUrl={imagesConfig.api + aboutPage.jumbotron.image.data.attributes.url}
                title={aboutPage.jumbotron.title}
                text={aboutPage.jumbotron.text}
            />
            <Banner
                imageUrl={imagesConfig.api + aboutPage.banner.image.data.attributes.url}
                title={aboutPage.banner.title}
                text={aboutPage.banner.text}
                bannerClass={aboutPage.banner.position == "left" ? "" : "d-flex flex-row-reverse"}
            />
            {aboutPage.productService.map((item, key) => {
                return (
                    <ProductService key={key}
                        imageUrl={imagesConfig.api + item.image.data.attributes.url}
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
