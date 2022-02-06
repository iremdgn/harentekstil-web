import React from 'react';
import { Row, Col, } from 'react-bootstrap'
import JumbotronText from './jumbotronText'

function Jumbotron(props) {
    return (
        <>
            <Row className="jumbotron mt-3">
                <Col sm={5} >
                    <hr></hr>
                    <div className="jumbotron-text py-2">
                        <JumbotronText
                            title={props.title}
                            text={props.text}
                        />
                    </div>
                </Col>
                <Col sm={7} style={{ backgroundImage: `url(${props.imageUrl})` }}>

                </Col>
            </Row>
        </>
    );
}

export default Jumbotron;
