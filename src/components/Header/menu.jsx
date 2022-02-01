import React from 'react'
import { Nav } from 'react-bootstrap'

function Menu() {
    return (
        <>
            <Nav className="justify-content-center" >
                <Nav.Item>
                    <Nav.Link eventKey="link-1">ÜRÜNLERİMİZ</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">KULLANIM ALANLARI</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3">HAKKIMIZDA</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-4">İLETİŞİM</Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    )
}

export default Menu;