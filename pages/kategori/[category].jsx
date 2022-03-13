import React, { useEffect, useState } from "react";
import ProductPageSlider from "/src/components/ProductPageSlider";
import Products from "/src/components/Products";
import Banner from "/src/components/Banner";

import { useRouter } from "next/router";
import { getNoToken } from "/src/services/request";

function ProductsPage() {
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryRoute, setCategoryRoute] = useState(null);

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    const { category } = router.query;

    if (category) {
      getCategories();
      setCategoryRoute(category);
    }
  }, [router.isReady, router]);

  useEffect(() => {
    getSelectedCategories(categoryRoute);
  }, [categories,categoryRoute]);

  const getCategories = async () => {
    setCategories([]);
    const response = await getNoToken(
      "http://localhost:1337/api/product-category/getSubCategories/"
    );
    if (response.data.isSuccess) {
      setCategories(response.data.cat);
    }
  };

  const getSelectedCategories = (route) => {
    const category = categories.find((item) => item.route == route);
    setSelectedCategory(category);
  };

  return (
    <>
      {categories && categories.length > 0 && (
        <ProductPageSlider
          categories={categories}
          getSelectedCategories={getSelectedCategories}
        />
      )}
      {selectedCategory != null && (
        <>
          {selectedCategory.Banner && (
            <Banner
              imageUrl={`http://localhost:1337${selectedCategory.Banner.Image.url}`}
              title={selectedCategory.Banner.title}
              text={selectedCategory.Banner.text}
              bgColor={selectedCategory.Banner.bgColor}
            />
          )}

          <Products Category={selectedCategory} />
        </>
      )}

      {/* <HomeSliderBottom /> */}
    </>
  );
}

export default ProductsPage;
