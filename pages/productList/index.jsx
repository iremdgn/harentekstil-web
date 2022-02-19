import React from 'react'
import Jumbotron from '/src/components/Jumbotron'


function ProductListPage() {
    return (
        <>
           <Jumbotron 
               imageUrl="/assets/images/homepage2.jpg"
                miniTitle="KATEGORİ"
                title="MARİN HAVLU"
                text="Üstün ürünler sunma tutkumuz, bu ürünlerin performansıyla örtüşmektedir."
           />
        </>
    );
}

export default ProductListPage;
