import React from 'react'
import ProductSwiperSlider from './productSwiperSlider'

function ProductPageSlider(props) {
    return (
        <>
            <div className="product-slider">
                <ProductSwiperSlider setPreloader={props.setPreloader} categories={props.categories} getSelectedCategories={props.getSelectedCategories}/>
            </div>
        </>
    )
}

export default ProductPageSlider;