import React from 'react'
import Jumbotron from '/src/components/Jumbotron'
import Blog from '/src/components/Blog'
import BottomBanner from '/src/components/Blog/bottomBanner'

function BlogPage() {
    return (
        <>
            <Jumbotron
                imageUrl="/assets/images/homepage2.jpg"
                title="BlogPage"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elit tortor, facilisis sed sapien sed, ultrices pellentesque erat. "
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
