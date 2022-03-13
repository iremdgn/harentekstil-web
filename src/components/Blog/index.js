import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Image from 'next/image'
import { useRouter } from 'next/router'

function Blog(props) {

    const { id } = props;

    const router = useRouter();

    const readBlogPost = () => { 
        id != null && router.push({
            pathname: '/blogContent',
            query: {
                blogPostId: id,
            }
        })
    }

    return (
        <>
            <Container className="p-lg-5 p-4 my-3 my-lg-0 blog ">
                <Row className={"p-lg-4 " + props.blogClass}>
                    <Col xs={12} xl={6}>
                        <Image loader={() => { return props.imageUrl }} src={props.imageUrl} alt="slider1" width="600" height="500" />
                    </Col>
                    <Col xs={12} xl={6} className="d-flex">
                        <div className="ps-1 ms-lg-4 blog-text my-auto">
                            <h1>{props.title}</h1>
                            <p className="pt-lg-3 pt-1">{props.text}</p>
                            <Button onClick={readBlogPost} className="py-lg-2 mt-lg-3 "><a className="blog-button">Okumaya Devam Et</a></Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Blog;