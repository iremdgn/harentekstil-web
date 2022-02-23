import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Image from 'next/image'

function Blog(props) {
    return (
        <>
            <Container className="p-lg-5 p-4 my-3 my-lg-0 blog ">
                <Row className={"p-lg-4" + props.blogClass}>
                    <Col xs={12} lg={6}>
                        <Image src={props.imageUrl} alt="slider1" width="600" height="500"/>
                    </Col>
                    <Col xs={12} lg={6}>
                        <div className="ps-1 ms-lg-4 blog-text">
                            <h1>{props.title}</h1>
                            <p className="pt-lg-3 pt-1">{props.text}</p>
                            <Button className={"py-lg-2 mt-lg-3 " + props.buttonClass}><a className="blog-button">Okumaya Devam Et</a></Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Blog;