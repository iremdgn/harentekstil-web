import React, { useState, useEffect } from "react";
import Jumbotron from "/src/components/Jumbotron";
import Contact from "/src/components/Contact";

import { get } from "/src/services/request";
import { apiConfig } from "/config";

function ContactPage(props) {
  const { setPreloader } = props;
  const [contactPage, setContactPage] = useState(null);

  const getContactData = async () => {
    const response = await get(apiConfig.api + "/api/contact-page", {
      populate: ["jumbotron", "jumbotron.image", "jumbotron.image.media"],
    });

    if (response.status === 200) {
      setContactPage(response.data.data.attributes);
      setPreloader(false);
    }
  };

  useEffect(() => {
    getContactData();
  }, []);

  return (
    contactPage != null && (
      <>
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
