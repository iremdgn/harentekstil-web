import React, { useEffect, useState } from 'react'
import HomePageSlider from '/src/components/HomePageSlider'
import HomePageProduct from '/src/components/HomePageProduct'
import ProductService from '/src/components/ProductService'
import HomePageContact from '/src/components/homePageContact'
import HomeVisualCard from '/src/components/HomeVisualCard'
import HomeSliderBottom from '../../src/components/HomeSliderBottom'
import HomePageProductBottom from '/src/components/HomePageProductBottom'

import { get } from '/src/services/request'
import { imagesConfig } from '/config'

function HomePage() {

    const [homePage, setHomePage] = useState(null);

    const getHomePageData = async () => {
        const response = await get('http://localhost:1337/api/home-page',
            {
                populate: [
                    'productService',
                    'productService.image',
                    'productService.image.media',
                    'homePageHeader',
                    'homePageHeader.homePageImage',
                    'homePageHeader.homePageImage.media',
                    'homePageSlider',
                    'homePageSlider.slide.media',
                    'homePageSlider.slide.image.media',
                    'visualCard',
                    'visualCard.image',
                    'visualCard.image.media',
                    'visualCardLarge',
                    'visualCardLarge.image',
                    'visualCardLarge.image.media',
                    'homeContact',
                    'homeBottomSlider',
                    'homeBottomSlider.slide.media',
                    'homeBottomSlider.slide.image.media',
                    'topProductList',
                    'topProductList.image.media',
                    'topProductList.image.image.media',
                    'bottomProductList',
                    'bottomProductList.image.media',
                    'bottomProductList.image.image.media'
                ]
            });
        console.log("homePageResponse", response);

        if (response.status === 200) {
            setHomePage(response.data.data.attributes);
        }
    }

    useEffect(() => {
        getHomePageData();
    }, []);

    return (

        homePage != null &&

        <>
            <HomePageSlider
                imageUrl={imagesConfig.api + homePage.homePageHeader.homePageImage.data.attributes.url}
                title={homePage.homePageHeader.homePageTitle}
                firstText={homePage.homePageHeader.homePageFirstText}
                text={homePage.homePageHeader.homePageText}
                swiperImage={homePage.homePageSlider.slide}
            />

            <HomePageProduct
                productList={homePage.topProductList}
            />
            {homePage.productService.map((item, key) => {
                return (
                    <ProductService key={key}
                        imageUrl={imagesConfig.api + item.image.data.attributes.url}
                        miniTitle={item.miniTitle}
                        title={item.title}
                        text={item.text}
                        serviceClass={item.position == "left" ? "d-flex flex-row-reverse" : " "} />
                )
            })}

            <HomePageContact
                title={homePage.homeContact.title}
                text={homePage.homeContact.text}
                link={homePage.homeContact.link}

            />

            <HomeVisualCard
                visualCard={homePage.visualCard}
                visualCardLarge={homePage.visualCardLarge}
            />

            <HomePageProductBottom
                productList={homePage.bottomProductList}
            />

            <HomeSliderBottom
                bottomSlider={homePage.homeBottomSlider.slide}
            />
        </>
    );
}

export default HomePage;
