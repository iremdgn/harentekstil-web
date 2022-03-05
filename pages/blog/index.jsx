import React, { useState, useEffect }from 'react'
import Jumbotron from '/src/components/Jumbotron'
import Blog from '/src/components/Blog'
import BottomBanner from '/src/components/Blog/bottomBanner'

import { get } from '/src/services/request'
import { imagesConfig } from '/config'

function BlogPage() {

    const [blogPage, setBlogPage] = useState(null);

    const getBlogData = async () => {
        const response = await get('http://localhost:1337/api/blog-page',
            {
                populate: [
                    'jumbotron',
                    'jumbotron.image',
                    'jumbotron.image.media',
                ]
            });
        console.log(response);

        if (response.status === 200) {
            setBlogPage(response.data.data.attributes);
        }
    }

    useEffect(() => {
        getBlogData();
    }, []);

    return (

       blogPage != null &&

        <>
            <Jumbotron
                imageUrl={imagesConfig.api + blogPage.jumbotron.image.data.attributes.url}
                title={blogPage.jumbotron.title}
                text={blogPage.jumbotron.text}
            />

            <Blog
                imageUrl="/assets/images/slider3.jpg"
                title="Lorem ipsum dolor sit amet consectetur"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elit tortor, facilisis sed sapien sed, ultrices pellentesque erat.Donec a efficitur leo. Donec tempus nibh sed nulla sagittis, nec ornare augue placerat."
            />

            <Blog
                imageUrl="/assets/images/slider3.jpg"
                title="Lorem ipsum dolor sit amet consectetur"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elit tortor, facilisis sed sapien sed, ultrices pellentesque erat.Donec a efficitur leo. Donec tempus nibh sed nulla sagittis, nec ornare augue placerat."
                blogClass="d-flex flex-row-reverse"
            />

            <Blog
                imageUrl="/assets/images/slider3.jpg"
                title="Lorem ipsum dolor sit amet consectetur"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elit tortor, facilisis sed sapien sed, ultrices pellentesque erat.Donec a efficitur leo. Donec tempus nibh sed nulla sagittis, nec ornare augue placerat."
            />

            <BottomBanner />
        </>
    );
}

export default BlogPage;
