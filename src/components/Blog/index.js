import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Image from 'next/image'

function Blog(props) {
    return (
        <>
            <Container className="p-5 blog ">
                <Row className={"p-4" + props.blogClass}>
                    <Col>
                        <Image src={props.imageUrl} alt="slider1" width="600" height="500"/>
                    </Col>
                    <Col>
                        <div className="ps-1 ms-4 blog-text">
                            <h1>{props.title}</h1>
                            <p className="pt-3">{props.text}</p>
                            <Button className="py-2 mt-3"><a className="blog-button">Okumaya Devam Et</a></Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Blog;