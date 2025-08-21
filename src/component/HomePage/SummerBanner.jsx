import React from "react";
import { GoArrowRight } from "react-icons/go";
import { NavLink } from "react-router-dom";

function SummerBanner() {
  return (
    <>
      <section className="p-4 mb-12 mt-10 lg:container lg:mx-auto lg:px-28 md:container md:mx-auto md:px-10">
        <div className="salebg flex justify-end items-center h-[358px] bg-cover bg-left-top md:bg-[url('../src/assets/dbanner.jfif')] rounded-md">
          <div className=" lg:p-2 p-7 lg:w-[441px] lg:mr-7 md:w-[300px]">
            <p className="text-[14px] leading-[14px] space-x-1 text-white mb-3">
              SUMMER SALE
            </p>
            <p className="text-[56px] leading-[56px] font-semibold text-white mb-4">
              <span className="text-orange">37%</span> OFF
            </p>
            <p className="text-[16px] leading-[24px] text-white opacity-[70%]">
              Free on all your order, Free Shipping and 30 days money-back
              guarantee
            </p>
            <NavLink to="/allproducts">
              <button
                className="flex items-center gap-2 duration-150 text-white bg-primary rounded-full 
                       text-center px-[36px] py-[12px] mt-5 font-semibold hover:bg-white hover:text-primary"
              >
                Shop now <GoArrowRight size={20} color="primary" className="" />
              </button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}

export default SummerBanner;
