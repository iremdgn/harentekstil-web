import React from 'react';
import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

function Layout({ children }) {
    return (
        <div>
            <Head>
                <title>Haren Tekstil</title>       
                <link href="https://fonts.googleapis.com/css2?family=Cormorant+SC:wght@300;400;500;600;700&family=DM+Serif+Display&family=Poppins:wght@200;300;400;500;600;700;800;900&family=Qwitcher+Grypen:wght@400;700&display=swap" 
                rel="stylesheet"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
