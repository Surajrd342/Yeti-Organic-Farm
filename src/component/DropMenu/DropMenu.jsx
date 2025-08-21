import React, { useState } from "react";
import { Dropdown } from "flowbite-react";
import { IoIosArrowDown } from "react-icons/io";
import { filterProducts } from "../../features/productSlice";
import { useDispatch } from "react-redux";
// import SortButton from "../SortButton/SortButton";

function DropMenu() {
  // Redux
  const sortButton = ["popularProducts", "hotDeals", "featuredProducts"];
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <div className="flex flex-wrap gap-2">
          {sortButton.map((item, index) => (
            <div key={index}>
              <button
                className="bg-primary p-2 text-white hover:bg-[#2C742F] rounded-lg transition-all duration-300"
                onClick={() => dispatch(filterProducts(item))}
              >
                {item}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* <select
        onChange={handleChange}
        id="cars"
        className="w-48 rounded-md border-grey border-1 text-[#4D4D4D] text-[14px] leading-[21px]"
      >
        <SortButton handleChange={handleChange} value="" title="All products" />
        <SortButton
          handleChange={handleChange}
          value="popularProducts"
          title="Popular Products"
        />
        <SortButton
          handleChange={handleChange}
          value="hotDeals"
          title="Hot Deals Products"
        />
        <SortButton
          handleChange={handleChange}
          value="featuredProducts"
          title="Featured Products"
        />
      </select> */}

      <div className="flex gap-2 ">
        {/* <SortButton
          onClickHandler={() => dispatch(filterProducts)}
          value=""
          title="All products"
        /> */}
        {/* <SortButton
          onClickHandler={handleClick}
          value="popularProducts"
          title="Popular Products"
        /> */}
        {/* <SortButton
          onClickHandler={handleClick}
          value="hotDeals"
          title="Hot Deals Products"
        /> */}
        {/* <SortButton
          onClickHandler={handleClick}
          value="featuredProducts"
          title="Featured Products"
        /> */}
      </div>
    </>
  );
}

export default DropMenu;
