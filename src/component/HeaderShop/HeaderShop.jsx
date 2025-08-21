import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { GoHome } from "react-icons/go";

function HeaderShop() {
  return (
    <section className="  text-[#999999] leading-6 text-[14px] font-normal ">
      <div className="flex items-center space-x-2 h-[70px] ">
        <div className="hover:text-[#00B207]">
          <GoHome size={20} />
        </div>
        <IoIosArrowForward />
        <p className="">Shop</p>
        <IoIosArrowForward />
        <p className="text-[#00B207]">Products</p>
      </div>
    </section>
  );
}

export default HeaderShop;
