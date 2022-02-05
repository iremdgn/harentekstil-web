import React from 'react'
import ProductPageSlider from '/src/components/ProductPageSlider'
import Products from '/src/components/Products'
import Banner from '/src/components/Banner'
import HomeSliderBottom from '../../src/components/HomeSliderBottom'

function ProductPage() {
    return (
        <>
            <ProductPageSlider />
            <Banner 
                imageUrl="/assets/images/homepage2.jpg"
                title="Üstün Performanslı Ürünler"
                text="Üstün ürünler sunma tutkumuz, bu ürünlerin performansıyla örtüşmektedir. Solmaya, yıpranmaya ve küflenmeye karşı dayanıklı, bakımı kolay ve teknik olarak üstün kumaşlarla olağanüstü mekanlar tasarlamak bizim işimiz."
            />
            <Products />
            <HomeSliderBottom />
        </>
    );
}

export default ProductPage;
