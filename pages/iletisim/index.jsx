import React, { useState, useEffect } from "react";
import Jumbotron from "/src/components/Jumbotron";
import Contact from "/src/components/Contact";

import { get } from "/src/services/request";
import { apiConfig } from "/config";
import SeoComponent from "../../src/components/Seo";

function ContactPage(props) {
  const { setPreloader } = props;
  const [contactPage, setContactPage] = useState(null);
  const [seo, setSeo] = useState();

  const getContactData = async () => {
    const response = await get(apiConfig.api + "/api/contact-page", {
      populate: [
        "jumbotron",
        "jumbotron.image",
        "jumbotron.image.media",
        "seo",
        "seo.metaImage.media",
        "seo.metaSocial",
        "seo.metaSocial.image.media",
      ],
    });

    if (response.status === 200) {
      setContactPage(response.data.data.attributes);
      setPreloader(false);
      setSeo(response.data.data.attributes.seo);
    }
  };

  useEffect(() => {
    getContactData();
  }, []);

  return (
    contactPage != null && (
      <>
        {seo != null && <SeoComponent seo={seo} />}
        <Jumbotron
          imageUrl={
            apiConfig.api + contactPage.jumbotron.image.data.attributes.url
          }
          miniTitle="İLETİŞİM"
          title={contactPage.jumbotron.title}
          text={contactPage.jumbotron.text}
        />
        <Contact />
      </>
    )
  );
}

export default ContactPage;
