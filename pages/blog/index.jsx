import React, { useState, useEffect } from 'react'
import Jumbotron from '/src/components/Jumbotron'
import Blog from '/src/components/Blog'
import BottomBanner from '/src/components/Blog/bottomBanner'

import { get } from '/src/services/request'
import { imagesConfig } from '/config'

function BlogPage() {

    const [blogPage, setBlogPage] = useState(null);

    const [blogList, setBlogList] = useState(null);

    const getBlogJumbotron = async () => {
        const response = await get('http://localhost:1337/api/blog-page',
            {
                populate: [
                    'jumbotron',
                    'jumbotron.image',
                    'jumbotron.image.media',
                ]
            });
        console.log("blogJumbotron", response);

        if (response.status === 200) {
            setBlogPage(response.data.data.attributes);
        }
    }

    const getBlogList = async () => {
        const response = await get('http://localhost:1337/api/blogs',
            {
                populate: [
                    'featuredImage',
                    'featuredImage.media'
                ]
            });
        console.log("blogList", response);

        if (response.status === 200) {
            setBlogList(response.data.data);
        }
    }

    useEffect(() => {
        getBlogJumbotron();
        getBlogList();
    }, []);

    return (

        <>
            {blogPage != null &&
                <Jumbotron
                    imageUrl={imagesConfig.api + blogPage.jumbotron.image.data.attributes.url}
                    title={blogPage.jumbotron.title}
                    text={blogPage.jumbotron.text}
                />
            }

            {blogList != null && blogList.length > 0 && blogList.map((item, key) => {
                return (
                    <Blog key={key}
                        imageUrl={imagesConfig.api + item.attributes.featuredImage.data.attributes.url}
                        title={item.attributes.title}
                        text={item.attributes.content.substring(0, 300) + "..."}
                        id={item.id}

                    />
                )
            })
            }

            <BottomBanner />
        </>
    );
}

export default BlogPage;
