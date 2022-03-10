import React, { useEffect } from 'react'
import ProductPageSlider from '/src/components/ProductPageSlider'
import Products from '/src/components/Products'
import Banner from '/src/components/Banner'
import HomeSliderBottom from '../../src/components/HomeSliderBottom'
import { useRouter } from 'next/router'

function ProductsPage() {
    const router = useRouter();

    
    useEffect(() => {

        if (!router.isReady) {
            return;
        }

        const { category } = router.query;

        if (category) {
            console.log('cateogry', category)
            // setId(blogPostId);
            // getBlogPostData(blogPostId)
        }

    }, [router.isReady]);


    return (
        <>
            <ProductPageSlider />
            <Banner 
                imageUrl="/assets/images/homepage2.jpg"
                title="Üstün Performanslı Ürünler"
                text="Üstün ürünler sunma tutkumuz, bu ürünlerin performansıyla örtüşmektedir. Solmaya, yıpranmaya ve küflenmeye karşı dayanıklı, bakımı kolay ve teknik olarak üstün kumaşlarla olağanüstü mekanlar tasarlamak bizim işimiz."
                bgColor="#F7A945"
            />
            
            <Products 
                Category="Tekne / Yat Kumaşları"
            />
            
            {/* <HomeSliderBottom /> */}
        </>
    );
}

export default ProductsPage;
