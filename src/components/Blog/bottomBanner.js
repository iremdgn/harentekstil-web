import React from 'react'
import { Button } from 'react-bootstrap'


function BottomBanner() {
    return (
        <div className="bottom-banner d-flex justify-content-center align-items-center" style={{ backgroundImage: "url('/assets/images/homepage2.jpg')" }}>
            <div className="text-area">
                <h1>Daha Fazla Bilgiye Mi İhtiyacınız Var?</h1>
                <p className="py-2">Haren Tekstil ürünleri hakkında daha fazla bilgiye ihtiyacınız varsa bize ulaşabilirsiniz.</p>
                <Button className="py-2">Bize Ulaşın</Button>
            </div>
        </div>
    );
}

export default BottomBanner;