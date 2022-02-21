import React from 'react'
import Jumbotron from '/src/components/Jumbotron'
import SingleProduct from '/src/components/SingleProduct'

function Product() {
    return (
        <>
           <SingleProduct 
               Title="Marin Havlu"
               Code="Ürün Kodu"
               Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elit tortor, facilisis sed sapien sed, ultrices pellentesque erat. Donec a efficitur leo. Donec tempus nibh sed nulla sagittis, nec ornare augue placerat. Vestibulum eu arcu vitae elit dignissim varius. Vestibulum rutrum metus quis iaculis aliquam."
           />
        </>
    );
}

export default Product;
