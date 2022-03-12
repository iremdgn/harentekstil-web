import React, { useEffect, useState } from 'react'
import SingleProduct from '/src/components/SingleProduct'

import { useRouter } from 'next/router'
import { getNoToken } from '/src/services/request'

function Product() {

    const router = useRouter();
    const [category, setCategory] = useState([]);

    useEffect(() => {
        category  && getCategory();
        if (!router.isReady) {
            return;
        }

        const { category } = router.query;

        if (category) {
            console.log('cateogry', category);  
            //getSelectedCategory(category);
        }

    }, [router.isReady,router]);

    const getCategory = async () => {
        const response = await getNoToken('http://localhost:1337/api/product-category/getSubCategories/');
        if (response.data.isSuccess) {
            setCategory(response.data.cat);
        }
    }

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
