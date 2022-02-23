import React from 'react'
import SwiperSliderBottom from './swiperSliderBottom'

function HomeSliderBottom() {
    return (
        <div className="slider-bottom pt-lg-5">
            <div className="slider-bottom-text d-flex">
                <hr className="mt-5"/>
                <h1 className="mt-3 ps-4 pt-1">Kuallanım Alanları</h1>
            </div>
            <div className="slider-area mt-5 pt-lg-5">
                <SwiperSliderBottom />
            </div>
        </div>
    );
}

export default HomeSliderBottom;