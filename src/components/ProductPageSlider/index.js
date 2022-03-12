import React from 'react'
import ProductSwiperSlider from './productSwiperSlider'

function ProductPageSlider(props) {
    return (
        <>
            <div className="product-slider">
                <ProductSwiperSlider categories={props.categories} getSelectedCategories={props.getSelectedCategories}/>
            </div>
        </>
    )
}

export default ProductPageSlider;