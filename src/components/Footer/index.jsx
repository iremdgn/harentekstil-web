import React from 'react';
import { Container } from 'react-bootstrap'
import Image from 'next/image'

function Footer() {
    return (
        <div className="footer py-5">
            <Container>
                <div>
                    <h3>
                        <span className="mx-3">
                            <Image src="/assets/images/logo.jpg" alt="logo" width="45" height="45" />
                        </span>
                        <span>HAREN TEKSTİL</span>
                    </h3>
                    <p className="px-3 pt-3">Copyright © 2020 Haren Tekstil | All Rights Reserved | Designed By Red Vizor</p>
                </div>
            </Container>
        </div>
    );
}

export default Footer;
