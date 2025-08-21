import React from "react";
import AllCategories from "../../component/CategoriesShop/AllCategories";


function Sidebar({ handleChange }) {
  return (
    <>
      {/* All Categories list */}
      <div className="hidden md:block">
        <AllCategories />
      </div>

    </>
  );
}

export default Sidebar;
