import React from 'react'
import HomePageSlider from '/src/components/HomePageSlider'
import HomePageProduct from '/src/components/HomePageProduct'
import ProductService from '/src/components/productService'
import HomePageContact from '/src/components/homePageContact'


function HomePage() {
    return (
        <>
            <HomePageSlider />
            <HomePageProduct />
            <ProductService />
            <HomePageContact />
        </>
    );
}

export default HomePage;
