import React from "react";
import { GoArrowRight } from "react-icons/go";

import { data } from "../../Data/Data";

function PopularCategories() {
  return (
    <>
      <section className="p-3 mt-10 lg:container lg:mx-auto lg:px-28 md:container md:mx-auto md:px-10">
        <div className="flex justify-between">
          <p className="md:text-[32px] text-[25px] leading-8 font-medium ">
            Popular Categories
          </p>
          <a
            className="flex gap-3 text-[16px] items-center text-primary hover:text-[#2C742F] duration-150"
            href=""
          >
            View all <GoArrowRight size={20} color="primary" className="" />
          </a>
        </div>

        {/* <div className="grid md:grid-cols-12 gap-3 md:mt-8 duration-150 md:p-0 p-7">
          {data.popCatData.map((item, index) => (
            <div
              key={index}
              className="grid justify-center col-span-2 border border-grey hover:border-[#2C742F] hover:text-[#2C742F] hover:shadow-[rgba(11,_145,_11,_0.7)_0px_4px_6px_-1px]"
            >
              <img src={item.imgCategory} className="" />
              <p className="text-center text-[18px] leading-6 font-medium p-[25px] ">
                {item.nameCategory}
              </p>
            </div>
          ))}
        </div> */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 mt-4 md:mt-8 duration-150 p-4 md:p-0">
          {data.popCatData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center md:col-span-1 sm:col-span-2 sm:row-span-6 border border-gray-300 hover:border-[#2C742F] hover:text-[#2C742F] hover:shadow-[rgba(11,_145,_11,_0.7)_0px_4px_6px_-1px] transition duration-150"
            >
              <img
                src={item.imgCategory}
                className="w-full h-auto object-cover"
                alt={item.nameCategory}
              />
              <p className="text-center text-[16px] md:text-[18px] leading-6 font-medium p-4 md:p-[25px]">
                {item.nameCategory}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default PopularCategories;
