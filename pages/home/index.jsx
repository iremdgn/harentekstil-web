import React from 'react'
import HomePageSlider from '/src/components/HomePageSlider'
import HomePageProduct from '/src/components/HomePageProduct'
import ProductService from '/src/components/ProductService'
import HomePageContact from '/src/components/homePageContact'
import HomeVisualCard from '/src/components/HomeVisualCard'
import HomeSliderBottom from '../../src/components/HomeSliderBottom'
import HomePageProductBottom from '/src/components/HomePageProductBottom'

function HomePage() {
    return (
        <>
            <HomePageSlider />
            <HomePageProduct />
            <ProductService 
                imageUrl="/assets/images/homepage2.jpg"
                miniTitle="lüksü yaşamak"
                title="TÜM DETAYLAR ÖNEMLİ"
                text="Üstün ürünler sunma tutkumuz, bu ürünlerin performansıyla örtüşmektedir. Solmaya, yıpranmaya ve küflenmeye karşı dayanıklı, bakımı kolay ve teknik olarak üstün kumaşlarla olağanüstü mekanlar tasarlamak bizim işimiz."
            />
            <ProductService 
                imageUrl="/assets/images/homepage.jpg"
                miniTitle="lüksü yaşamak"
                title="TÜM DETAYLAR ÖNEMLİ"
                text="Üstün ürünler sunma tutkumuz, bu ürünlerin performansıyla örtüşmektedir. Solmaya, yıpranmaya ve küflenmeye karşı dayanıklı, bakımı kolay ve teknik olarak üstün kumaşlarla olağanüstü mekanlar tasarlamak bizim işimiz."
                serviceClass="d-flex flex-row-reverse" />
            <HomePageContact />

            <HomeVisualCard />

            <HomePageProductBottom />
            
            <HomeSliderBottom />
        </>
    );
}

export default HomePage;
