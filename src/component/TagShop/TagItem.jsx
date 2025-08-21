import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import Tag from "../../component/TagItem/Tag";

function TagItem() {
  const [showItem, setShowItem] = useState(true);
  const TagClick = () => {
    setShowItem(!showItem);
  };
  return (
    <>
      <div className="hidden md:block">
        <button className="w-full" onClick={TagClick}>
          <div className="flex items-center justify-between mt-5">
            <p className="text-[#1A1A1A] text-[20px] font-medium leading-[30px]">
              Popular Tag
            </p>
            <div className="">
              {showItem ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </div>
          </div>{" "}
        </button>

        <div>{showItem && <Tag />}</div>
      </div>
    </>
  );
}

export default TagItem;
