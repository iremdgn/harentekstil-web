import React from 'react'
import OtherContentSlider from './otherContentSlider';

function OtherContent() {
    return (
        <>

            <div className="other-content pt-5">
                <div className="other-content-text d-flex">
                    <hr className="mt-5" />
                    <h1 className="mt-3 ps-4 pt-1">Diğer Yazılarımız</h1>
                </div>
                <div className="other-content-area my-3 py-4">
                    <OtherContentSlider />
                </div>
            </div>


        </>
    );
}

export default OtherContent;