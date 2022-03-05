import React from 'react'


function BlogContentBanner(props) {
    return (
        <div className="content-banner d-flex align-items-center" style={{ backgroundImage: `url(${props.imageUrl})` }}>
            <hr className="me-3"></hr>
            <div className="text-area">
                <h1>{props.title}</h1>
                <p className="py-2">{props.text}</p>
            </div>
        </div>
    );
}

export default BlogContentBanner;