import React, { useEffect, useState } from "react";
import SingleProduct from "/src/components/SingleProduct";

import { useRouter } from "next/router";
import { postNoToken } from "/src/services/request";

function Product() {
  const router = useRouter();
  const [parentCat, setParentCat] = useState([]);
  const [childCat, setChildCat] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    const { category } = router.query;

    if (category) {
      console.log("cateogry", category);
      category && getCategory({ route: category });
    }
  }, [router.isReady, router]);

  const getCategory = async (data) => {
    const response = await postNoToken(
      "http://localhost:1337/api/product-category/getProduct/",
      data
    );
    console.log("response", response);
    if (response.data.isSuccess) {
      setParentCat(response.data.parentCategory);
      setChildCat(response.data.childCategory);
      setProducts(response.data.products);
    }
  };

  return parentCat && products.length > 0 ? (
    <SingleProduct
      parentCat={parentCat}
      childCat={childCat}
      products={products}
    />
  ) : null;
}

export default Product;
