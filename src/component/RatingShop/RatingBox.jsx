import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import RatingCheck from "../../component/RatingComp/RatingCheck";

function RatingBox() {
  const [showItem, setShowItem] = useState(true);
  const ratingClick = () => {
    setShowItem(!showItem);
  };

  return (
    <>
      <div className="border-b w-full hidden md:block">
        <button onClick={ratingClick} className="w-full">
          <div className="flex items-center justify-between mt-5">
            <p className="text-[#1A1A1A] text-[20px] font-medium leading-[30px]">
              Rating
            </p>
            <div className="">
              {showItem ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </div>
          </div>{" "}
        </button>

        <div className="mb-3">{showItem && <RatingCheck />}</div>
      </div>
    </>
  );
}

export default RatingBox;
