import React from 'react'
import Jumbotron from '/src/components/Jumbotron'
import SingleProduct from '/src/components/SingleProduct'

function Product() {
    return (
        <>
           <Jumbotron 
               imageUrl="/assets/images/homepage2.jpg"
                miniTitle="KATEGORİ"
                title="MARİN HAVLU"
                text="Üstün ürünler sunma tutkumuz, bu ürünlerin performansıyla örtüşmektedir."
           />
           <SingleProduct />
        </>
    );
}

export default Product;
