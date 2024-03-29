import React, { useState, useEffect } from "react";
import Banner from "/src/components/Banner";
import Jumbotron from "/src/components/Jumbotron";
import ProductService from "/src/components/ProductService";

import { get } from "/src/services/request";
import { apiConfig } from "/config";
import SeoComponent from "../../src/components/Seo";

function AboutPage(props) {
  const { setPreloader } = props;
  const [aboutPage, setAboutPage] = useState(null);
  const [seo, setSeo] = useState();

  const getAboutPageData = async () => {
    const response = await get(apiConfig.api + "/api/about-page", {
      populate: [
        "productService",
        "productService.image",
        "productService.image.media",
        "jumbotron",
        "jumbotron.image",
        "jumbotron.image.media",
        "banner",
        "banner.image",
        "banner.image.media",
        "seo",
        "seo.metaImage.media",
        "seo.metaSocial",
        "seo.metaSocial.image.media",
      ],
    });
    if (response.status === 200) {
      setAboutPage(response.data.data.attributes);
      setSeo(response.data.data.attributes.seo);
      setPreloader(false);
    }
  };

  useEffect(() => {
    getAboutPageData();
  }, []);

  return (
    aboutPage != null && (
      <>
        {seo != null && <SeoComponent seo={seo} />}
        <Jumbotron
          imageUrl={
            apiConfig.api + aboutPage.jumbotron.image.data.attributes.url
          }
          title={aboutPage.jumbotron.title}
          text={aboutPage.jumbotron.text}
        />
        <Banner
          imageUrl={apiConfig.api + aboutPage.banner.image.data.attributes.url}
          title={aboutPage.banner.title}
          text={aboutPage.banner.text}
          bannerClass={
            aboutPage.banner.position == "left" ? "" : "d-flex flex-row-reverse"
          }
        />
        {aboutPage.productService.map((item, key) => {
          return (
            <ProductService
              key={key}
              imageUrl={apiConfig.api + item.image.data.attributes.url}
              miniTitle={item.miniTitle}
              title={item.title}
              text={item.text}
              serviceClass={
                item.position == "left" ? "d-flex flex-row-reverse" : " "
              }
            />
          );
        })}
      </>
    )
  );
}

export default AboutPage;
