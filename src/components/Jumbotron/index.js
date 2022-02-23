import React from 'react';
import { Row, Col, } from 'react-bootstrap'
import JumbotronText from './jumbotronText'

function Jumbotron(props) {
    return (
        <>
            <Row className="jumbotron mt-lg-3">
                <Col xs={12} lg={5} >
                    <hr></hr>
                    <div className="jumbotron-text py-lg-2">
                        <JumbotronText
                            title={props.title}
                            text={props.text}
                        />
                    </div>
                </Col>
                <Col className="jumbotron-image" xs={12} lg={7} style={{ backgroundImage: `url(${props.imageUrl})` }}>

                </Col>
            </Row>
        </>
    );
}

export default Jumbotron;
