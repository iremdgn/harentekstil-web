import React from 'react'
import { Button } from 'react-bootstrap'


function BlogContentBanner(props) {
    return (
        <div className="content-banner d-flex align-items-center" style={{ backgroundImage: "url('/assets/images/homepage2.jpg')" }}>
            <hr className="me-3"></hr>
            <div className="text-area">
                <h1>{props.title}</h1>
                <p className="py-2">{props.text}</p>
            </div>
        </div>
    );
}

export default BlogContentBanner;