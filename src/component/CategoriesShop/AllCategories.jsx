import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import RadioB from "../RadioButton/RadioB";

function AllCategories() {
  const [showItem, setShowItem] = useState(true);
  const catClick = () => {
    setShowItem(!showItem);
  };
  // console.log(handleChange)

  return (
    <>
      <div className="">
        <div className="w-full">
          <button
            className="flex items-center justify-between mt-5 w-full"
            onClick={catClick}
          >
            <p className="text-[#1A1A1A] text-[20px] font-medium leading-[30px]">
              All Categories
            </p>
            <div className="">
              {showItem ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </div>
          </button>
        </div>
        <div className="md:border-b">
          {showItem && (
            <div className="mt-3 mb-2">
              <RadioB />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default AllCategories;
