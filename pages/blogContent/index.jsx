import React from 'react'
import BlogContentBanner from '/src/components/BlogContent/blogContentBanner'
import BlogContent from '/src/components/BlogContent'
import OtherContent from '/src/components/BlogContent/otherContents'


function BlogContentPage() {
    return (
        <>
            <BlogContentBanner
                title="Lorem ipsum dolor sit amet"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elit tortor, facilisis sed sapien sed, ultrices pellentesque erat.Donec a efficitur leo. Donec tempus nibh sed nulla sagittis, nec ornare augue placerat."
            />
            <BlogContent
                imageUrl="/assets/images/slider3.jpg"
                miniTitle="Lorem Ipsum"
                title="LOREM IPSUM DOLOR SİT AMET"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elit tortor, facilisis sed sapien sed, ultrices pellentesque erat. Donec a efficitur leo. Donec tempus nibh sed nulla sagittis, nec ornare augue placerat. Vestibulum eu arcu vitae elit dignissim varius. Vestibulum rutrum metus quis iaculis aliquam. Donec tincidunt metus eu dignissim luctus. Suspendisse blandit auctor velit eu vestibulum.
                Pellentesque posuere gravida quam, eu malesuada ligula. Duis sagittis ipsum arcu. Quisque suscipit nibh sed leo gravida, non rhoncus sapien ornare. Ut ut magna eget libero consectetur congue eu id neque. Suspendisse potenti. Morbi at venenatis nunc, quis posuere ligula. Ut sed metus mauris. Nam tincidunt sagittis commodo. Nam ligula neque, condimentum ac pellentesque nec, blandit eget tortor."
            />
            <BlogContent
                imageUrl="/assets/images/slider3.jpg"
                miniTitle=" "
                title=" "
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elit tortor, facilisis sed sapien sed, ultrices pellentesque erat. Donec a efficitur leo. Donec tempus nibh sed nulla sagittis, nec ornare augue placerat. Vestibulum eu arcu vitae elit dignissim varius. Vestibulum rutrum metus quis iaculis aliquam. Donec tincidunt metus eu dignissim luctus. Suspendisse blandit auctor velit eu vestibulum.
                Pellentesque posuere gravida quam, eu malesuada ligula. Duis sagittis ipsum arcu. Quisque suscipit nibh sed leo gravida, non rhoncus sapien ornare. Ut ut magna eget libero consectetur congue eu id neque. Suspendisse potenti. Morbi at venenatis nunc, quis posuere ligula. Ut sed metus mauris. Nam tincidunt sagittis commodo. Nam ligula neque, condimentum ac pellentesque nec, blandit eget tortor."
                contentClass="d-flex flex-row-reverse"
            />

            <OtherContent />
        </>
    );
}

export default BlogContentPage;
