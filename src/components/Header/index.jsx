import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import Menu from './menu'

function Header() {
    return (
        <>
            <Navbar bg="white">
                <Container className="justify-content-center">
                    <Navbar.Brand href="#home" className="fs-2">HAREN TEKSTİL</Navbar.Brand>
                </Container>
            </Navbar>
            <Menu />
        </>
    )
}

export default Header;
