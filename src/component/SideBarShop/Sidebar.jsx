import React from "react";
import TagItem from "../../component/TagShop/TagItem";
import PriceSlider from "../../component/PriceSliderShop/PriceSlider";
import AllCategories from "../../component/CategoriesShop/AllCategories";
import RatingBox from "../../component/RatingShop/RatingBox";

function Sidebar({ handleChange }) {
  return (
    <>
      {/* All Categories list */}
      <div className="hidden md:block">
        <AllCategories />
      </div>

      {/* Price Slider range */}
      <PriceSlider />

      {/* Product rating filter  */}
      <RatingBox />

      {/* Popular tags list  */}
      <TagItem />
    </>
  );
}

export default Sidebar;
