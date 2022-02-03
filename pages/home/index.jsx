import React from 'react'
import HomePageSlider from '/src/components/HomePageSlider'
import HomePageProduct from '/src/components/HomePageProduct'
import ProductService from '/src/components/ProductService'
import HomePageContact from '/src/components/homePageContact'
import HomeVisualCard from '/src/components/HomeVisualCard'


function HomePage() {
    return (
        <>
            <HomePageSlider />
            <HomePageProduct />
            <ProductService />
            <HomePageContact />
            <HomeVisualCard />
        </>
    );
}

export default HomePage;
