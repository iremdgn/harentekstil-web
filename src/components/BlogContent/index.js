import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

function BlogContent(props) {
    return (
        <div className="blog-content">

            <Row className={" " + props.contentClass}>
                <Col xs={12} xl={6}>
                    <div className="ps-lg-1 ms-lg-4 blog-text">
                        <p className="mini-title">{props.miniTitle}</p>
                        <h1>{props.title}</h1>
                        <p className="pt-3">{props.text}</p>
                    </div>

                </Col>
                <Col  className="blog-image" xs={12} xl={6} style={{ backgroundImage: `url(${props.imageUrl})` }}>
                    
                </Col>
            </Row>

        </div>
    );
}

export default BlogContent;