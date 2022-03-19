import React, { useEffect } from "react";
import Head from "next/head";

export default function SeoComponent(props) {
  const { seo } = props;

  console.log("seo", seo);

  return (
    <>
      <Head>
        <title>{seo.metaTitle}</title>
        {seo.metaDescription && (
          <meta name="description" content={seo.metaDescription} />
        )}
        {seo.keywords && <meta name="keywords" content={seo.keywords} />}
        <meta name="author" content="Red Vizor" />
        <meta
          name="viewport"
          content={
            seo.metaViewport
              ? seo.metaViewport
              : "initial-scale=1.0, width=device-width"
          }
        />
        {seo.metaRobots && <meta name="robots" content={seo.metaRobots} />}
        <link
          rel="canonical"
          href={
            seo.canonicalURL ? seo.canonicalURL : "https://www.harentekstil.com"
          }
        />

        {seo.metaSocial.length > 0 &&
          seo.metaSocial.map((item) => {
            return (
              <>
                <meta
                  property={
                    item.socialNetwork == "Facebook"
                      ? "og:title"
                      : "twitter:title"
                  }
                  content={item.title}
                />

                <meta
                  property={
                    item.socialNetwork == "Facebook"
                      ? "og:description"
                      : "twitter:description"
                  }
                  content={item.description}
                />

                <meta
                  property={
                    item.socialNetwork == "Facebook"
                      ? "og:image"
                      : "twitter:image"
                  }
                  content={item.image.data.attributes.url}
                />
              </>
            );
          })}
      </Head>
    </>
  );
}
