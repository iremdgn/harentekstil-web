import React from 'react'
import Jumbotron from '/src/components/Jumbotron'
import Contact from '/src/components/Contact'

function ContactPage() {
    return (
        <>
            <Jumbotron
                imageUrl="/assets/images/homepage2.jpg"
                miniTitle="İLETİŞİM"
                title="Bize Ulaşın!"
                text="Haren Tekstil müşterilerine üstün hizmet sunmaya adanmıştır. Bizimle iletişime geçmek için aşağıda bulunan formu doldurabilir veya telefon numaramızdan bize ulaşabilirsiniz. Sizlerin sorularını cevaplandırmayı dört gözle bekliyoruz."
            />
            <Contact />
        </>
    );
}

export default ContactPage;
