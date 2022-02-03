import React from 'react'
import HomePageSlider from '/src/components/HomePageSlider'
import HomePageProduct from '/src/components/HomePageProduct'
import ProductService from '/src/components/ProductService'
import HomePageContact from '/src/components/homePageContact'
import HomeVisualCard from '/src/components/HomeVisualCard'
import HomeSliderBottom from '../../src/components/HomeSilderBottom'


function HomePage() {
    return (
        <>
            <HomePageSlider />
            <HomePageProduct />
            <ProductService />
            <HomePageContact />
            <HomeVisualCard />
            <HomePageProduct />
            <HomeSliderBottom />
        </>
    );
}

export default HomePage;
