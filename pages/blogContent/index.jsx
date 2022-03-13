import React, { useState, useEffect } from "react";
import BlogContentBanner from "/src/components/BlogContent/blogContentBanner";
import BlogContent from "/src/components/BlogContent";
import OtherContent from "/src/components/BlogContent/otherContents";

import { useRouter } from "next/router";

import { get } from "/src/services/request";
import { apiConfig } from "/config";

function BlogContentPage() {
  const router = useRouter();

  const [id, setId] = useState();

  const [blogPost, setBlogPost] = useState(null);

  const getBlogPostData = async (postId) => {
    const response = await get(`${apiConfig.api + postId}`, {
      populate: [
        "featuredImage",
        "featuredImage.media",
        "jumbotronImage",
        "jumbotronImage.media",
      ],
    });
    console.log("blogPost", response);

    if (response.status === 200) {
      setBlogPost(response.data.data);
    }
  };

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    const { blogPostId } = router.query;

    if (blogPostId) {
      setId(blogPostId);
      getBlogPostData(blogPostId);
    }
  }, [router.isReady]);

  return (
    blogPost != null && (
      <>
        <BlogContentBanner
          imageUrl={
            apiConfig.api +
            blogPost.attributes.jumbotronImage.data.attributes.url
          }
          title={blogPost.attributes.title}
        />

        <BlogContent
          imageUrl={
            apiConfig.api +
            blogPost.attributes.featuredImage.data.attributes.url
          }
          miniTitle={blogPost.attributes.miniTitle}
          title={blogPost.attributes.title}
          text={blogPost.attributes.content}
        />
        <OtherContent />
      </>
    )
  );
}

export default BlogContentPage;
