import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import MinimumDistanceSlider from "../SliderPriceRange/SliderRange";

function PriceSlider({ handleChange }) {
  const [showItem, setShowItem] = useState(true);
  const catClick = () => {
    setShowItem(!showItem);
  };
  return (
    <>
      <div className="border-b w-full hidden md:block">
        <button onClick={catClick} className="w-full">
          <div className="flex items-center justify-between mt-5 w-full">
            <p className="text-[#1A1A1A] text-[20px] font-medium leading-[30px]">
              Price
            </p>
            <div className="">
              {showItem ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </div>
          </div>
        </button>
        {showItem && (
          <div className="mt-1 mb-3">
            <MinimumDistanceSlider handleChange={handleChange} />
          </div>
        )}
      </div>
    </>
  );
}

export default PriceSlider;
