import React, { useState, useEffect } from "react";
import Jumbotron from "/src/components/Jumbotron";
import Blog from "/src/components/Blog";
import BottomBanner from "/src/components/Blog/bottomBanner";

import { get } from "/src/services/request";
import { apiConfig } from "/config";

function BlogPage(props) {
  const { setPreloader } = props;
  const [blogPage, setBlogPage] = useState(null);
  const [blogList, setBlogList] = useState(null);

  const getBlogJumbotron = async () => {
    const response = await get(apiConfig.api + "/api/blog-page", {
      populate: ["jumbotron", "jumbotron.image", "jumbotron.image.media"],
    });
    console.log("blogJumbotron", response);

    if (response.status === 200) {
      setBlogPage(response.data.data.attributes);
    }
  };

  const getBlogList = async () => {
    const response = await get(apiConfig.api + "/api/blog-posts", {
      populate: ["featuredImage", "featuredImage.media"],
    });
    console.log("blogList", response);

    if (response.status === 200) {
      setBlogList(response.data.data);
      setPreloader(false);
    }
  };

  useEffect(() => {
    getBlogJumbotron();
    getBlogList();
  }, []);

  return (
    <>
      {blogPage != null && (
        <Jumbotron
          imageUrl={
            apiConfig.api + blogPage.jumbotron.image.data.attributes.url
          }
          title={blogPage.jumbotron.title}
          text={blogPage.jumbotron.text}
        />
      )}

      {blogList != null &&
        blogList.length > 0 &&
        blogList.map((item, key) => {
          return (
            <Blog
              key={key}
              imageUrl={
                apiConfig.api +
                item.attributes.featuredImage.data.attributes.url
              }
              title={item.attributes.title}
              text={item.attributes.content.substring(0, 300) + "..."}
              id={item.id}
              route={item.attributes.route}
            />
          );
        })}

      <BottomBanner />
    </>
  );
}

export default BlogPage;
