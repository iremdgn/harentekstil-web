import React from 'react'
import Banner from '/src/components/Banner'
import Jumbotron from '/src/components/Jumbotron'
import ProductService from '/src/components/ProductService'


function AboutPage() {
    return (
        <>
            <Jumbotron
                imageUrl="/assets/images/homepage2.jpg"
                miniTitle="HAKKIMIZDA"
                title="Biz Kimiz?"
                text="Üstün ürünler sunma tutkumuz, bu ürünlerin performansıyla örtüşmektedir. Solmaya, yıpranmaya ve küflenmeye karşı dayanıklı, bakımı kolay ve teknik olarak üstün kumaşlarla olağanüstü mekanlar tasarlamak bizim işimiz."
            />  
            <Banner
                imageUrl="/assets/images/homepage2.jpg"
                title="Üstün Performanslı Ürünler"
                text="Üstün ürünler sunma tutkumuz, bu ürünlerin performansıyla örtüşmektedir. Solmaya, yıpranmaya ve küflenmeye karşı dayanıklı, bakımı kolay ve teknik olarak üstün kumaşlarla olağanüstü mekanlar tasarlamak bizim işimiz."
                bannerClass="d-flex flex-row-reverse"
            />
            <ProductService imageUrl="/assets/images/homepage2.jpg"
                miniTitle="lüksü yaşamak"
                title="TÜM DETAYLAR ÖNEMLİ"
                text="Üstün ürünler sunma tutkumuz, bu ürünlerin performansıyla örtüşmektedir. Solmaya, yıpranmaya ve küflenmeye karşı dayanıklı, bakımı kolay ve teknik olarak üstün kumaşlarla olağanüstü mekanlar tasarlamak bizim işimiz."
            />
            <ProductService imageUrl="/assets/images/homepage.jpg"
                miniTitle="lüksü yaşamak"
                title="TÜM DETAYLAR ÖNEMLİ"
                text="Üstün ürünler sunma tutkumuz, bu ürünlerin performansıyla örtüşmektedir. Solmaya, yıpranmaya ve küflenmeye karşı dayanıklı, bakımı kolay ve teknik olarak üstün kumaşlarla olağanüstü mekanlar tasarlamak bizim işimiz."
                serviceClass="d-flex flex-row-reverse" />

        </>
    );
}

export default AboutPage;
