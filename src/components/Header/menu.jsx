import React from 'react'
import { Nav } from 'react-bootstrap'

function Menu() {
    return (
        <>
            <Nav className="justify-content-center" >
                <Nav.Item>
                    <Nav.Link  href="/home" eventKey="link-1">ANASAYFA</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link  href="/products" eventKey="link-2">ÜRÜNLERİMİZ</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link  href="/about" eventKey="link-3">HAKKIMIZDA</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link  href="/blog" eventKey="link-3">BLOG</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link  href="/contact" eventKey="link-4">İLETİŞİM</Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    )
}

export default Menu;