import React, { useState, useEffect } from "react";
import BlogContentBanner from "/src/components/BlogContent/blogContentBanner";
import BlogContent from "/src/components/BlogContent";
import OtherContent from "/src/components/BlogContent/otherContents";

import { useRouter } from "next/router";

import { postNoToken } from "/src/services/request";
import { apiConfig } from "/config";
import SeoComponent from "../../src/components/Seo";

function BlogContentPage(props) {
  const { setPreloader } = props;
  const router = useRouter();
  const [seo, setSeo] = useState();

  const [blogPost, setBlogPost] = useState(null);

  const getBlogPostData = async (route) => {
    const response = await postNoToken(
      apiConfig.api + "/api/custom-blog/getBlogPost",
      { route: route }
    );
    console.log("responses", response);
    if (response.status === 200) {
      setBlogPost(response.data.blogPost[0]);
      setSeo(response.data.blogPost[0].seo);
      setPreloader(false);
    }
  };

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    const { blogPost } = router.query;

    console.log("blogPost", blogPost);
    if (blogPost) {
      getBlogPostData(blogPost);
    }
  }, [router.isReady]);

  useEffect(() => {
    console.log("blogPsssost", blogPost);
  }, [blogPost]);

  return (
    blogPost != null && (
      <div className="blogPostMain">
        {seo != null && <SeoComponent seo={seo} />}
        <BlogContentBanner
          imageUrl={apiConfig.api + blogPost.jumbotronImage.url}
          title={blogPost.title}
        />

        <BlogContent
          imageUrl={apiConfig.api + blogPost.featuredImage.url}
          miniTitle={blogPost.miniTitle}
          title={blogPost.title}
          text={blogPost.content}
        />
        {/* <OtherContent /> */}
      </div>
    )
  );
}

export default BlogContentPage;
