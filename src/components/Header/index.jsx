import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import Menu from './menu'
import Image from 'next/image'

function Header() {
    return (
        <>
            <Navbar bg="white">
                <Container className="justify-content-center">
                    <Navbar.Brand href="/" className="fs-2">
                        <span>HAREN</span>
                        <span className="mx-3">
                            <Image src="/assets/images/logo.jpg" alt="logo" width="50" height="50" />
                        </span>
                        <span className="ps-1">TEKSTİL</span></Navbar.Brand>
                </Container>
            </Navbar>
            <Menu />
        </>
    )
}

export default Header;
