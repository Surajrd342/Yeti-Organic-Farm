import React from "react";
// import appleFull from "../assets/appleFull.jfif";
import { CiUser } from "react-icons/ci";
import { CiChat1 } from "react-icons/ci";
import { GoTag } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

import { data } from "../../Data/Data";

function LatestNews() {
  return (
    <>
      {/* Latest News */}
      <section className="p-4 mt-10 mb-10 lg:container lg:mx-auto lg:px-28 md:container md:mx-auto md:px-10">
        <div className="">
          <p className="md:text-[32px] text-[25px] leading-[38.4px] font-medium text-center">
            Latest News
          </p>
          <div className="grid md:grid-cols-12 gap-5 mt-5 duration-150">
            {data.latestNews.map((item, index) => (
              <div
                className="group/edit col-span-4 hover:shadow-lg"
                key={index}
              >
                <div className="latestbgImg1 relative">
                  <img className="" src={item.img} alt="" />
                  <div className="absolute bg-white opacity-[90%] rounded bottom-3 left-[24px] lg:w-[58px] md:w-[40px] p-2 items-center text-center">
                    <p className=" lg:text-[20px] text-[16px] font-medium leading-[30px]">
                      {item.day}
                    </p>
                    <p className="text-[12px] text-tertiary font-medium leading-[12px]">
                      {item.month}{" "}
                    </p>
                  </div>
                </div>
                <div className="p-5 border border-grey rounded-md ">
                  <div className="lg:flex gap-3 text-tertiary text-[14px] leading-[21px]">
                    <p className="flex items-center gap-1">
                      <GoTag />
                      {item.category}
                    </p>
                    <p className="flex items-center gap-1">
                      <CiUser />
                      {item.type}
                    </p>
                    <p className="flex items-center gap-1">
                      <CiChat1 />
                      {item.comments}
                    </p>
                  </div>
                  <p className="text-[#1A1A1A] group-hover/edit:text-[#2C742F] text-[18px] font-medium leading-[27px] mt-2">
                    {item.title}
                  </p>
                  <a
                    className="flex gap-3 text-[16px] leading-[19.2px] font-semibold items-center text-primary hover:text-[#2C742F] mt-4"
                    href=""
                  >
                    {item.button}{" "}
                    <GoArrowRight size={20} color="primary" className="" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default LatestNews;
