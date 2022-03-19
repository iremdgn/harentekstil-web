import React, { useEffect, useState } from "react";
import HomePageSlider from "/src/components/HomePageSlider";
import HomePageProduct from "/src/components/HomePageProduct";
import ProductService from "/src/components/ProductService";
import HomePageContact from "/src/components/homePageContact";
import HomeVisualCard from "/src/components/HomeVisualCard";
import HomeSliderBottom from "../../src/components/HomeSliderBottom";
import HomePageProductBottom from "/src/components/HomePageProductBottom";

import { get } from "/src/services/request";
import { apiConfig } from "/config";
import SeoComponent from "../../src/components/Seo";

function HomePage(props) {
  const { setPreloader } = props;
  const [homePage, setHomePage] = useState(null);
  const [seo, setSeo] = useState();
  const getHomePageData = async () => {
    const response = await get(apiConfig.api + "/api/home-page", {
      populate: [
        "productService",
        "productService.image",
        "productService.image.media",
        "homePageHeader",
        "homePageHeader.homePageImage",
        "homePageHeader.homePageImage.media",
        "homePageSlider",
        "homePageSlider.slide.media",
        "homePageSlider.slide.image.media",
        "visualCard",
        "visualCard.image",
        "visualCard.image.media",
        "visualCardLarge",
        "visualCardLarge.image",
        "visualCardLarge.image.media",
        "homeContact",
        "homeBottomSlider",
        "homeBottomSlider.slide.media",
        "homeBottomSlider.slide.image.media",
        "topProductList",
        "topProductList.image.media",
        "topProductList.image.image.media",
        "bottomProductList",
        "bottomProductList.image.media",
        "bottomProductList.image.image.media",
        "seo",
        "seo.metaImage.media",
        "seo.metaSocial",
        "seo.metaSocial.image.media",
      ],
    });
    console.log("homePageResponse", response);

    if (response.status === 200) {
      setPreloader(false);
      setHomePage(response.data.data.attributes);
      setSeo(response.data.data.attributes.seo);
    }
  };

  useEffect(() => {
    getHomePageData();
  }, []);

  return (
    homePage != null && (
      <>
       {seo != null && <SeoComponent seo={seo} />}
        <HomePageSlider
          imageUrl={
            apiConfig.api +
            homePage.homePageHeader.homePageImage.data.attributes.url
          }
          title={homePage.homePageHeader.homePageTitle}
          firstText={homePage.homePageHeader.homePageFirstText}
          text={homePage.homePageHeader.homePageText}
          swiperImage={homePage.homePageSlider.slide}
        />

        <HomePageProduct productList={homePage.topProductList} />
        {homePage.productService.map((item, key) => {
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

        <HomePageContact
          title={homePage.homeContact.title}
          text={homePage.homeContact.text}
          link={homePage.homeContact.link}
        />

        <HomeVisualCard
          visualCard={homePage.visualCard}
          visualCardLarge={homePage.visualCardLarge}
        />

        <HomePageProductBottom productList={homePage.bottomProductList} />

        <HomeSliderBottom bottomSlider={homePage.homeBottomSlider.slide} />
      </>
    )
  );
}

export default HomePage;
