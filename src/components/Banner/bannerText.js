import React from 'react';

function BannerText(props) {
    return (
        <>
            <div className="text-area">
                <h1>{props.title}</h1>
                <p className="banner-text pt-3">{props.text}</p>
            </div>

        </>
    );
}

export default BannerText;