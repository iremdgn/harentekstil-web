import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

function BlogContent(props) {
    return (
        <div className="blog-content">

            <Row className={" " + props.contentClass}>
                <Col>
                    <div className="ps-1 ms-4 blog-text">
                        <p className="mini-title">{props.miniTitle}</p>
                        <h1>{props.title}</h1>
                        <p className="pt-3">{props.text}</p>
                    </div>

                </Col>
                <Col style={{ backgroundImage: `url(${props.imageUrl})` }}>
                    
                </Col>
            </Row>

        </div>
    );
}

export default BlogContent;