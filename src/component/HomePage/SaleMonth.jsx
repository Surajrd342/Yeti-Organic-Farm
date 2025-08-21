import React, { Component } from "react";
import { GoArrowRight } from "react-icons/go";
import { data } from "../../Data/Data";
import { NavLink } from "react-router-dom";

function SaleMonth() {
  return (
    <>
      <section className="p-4 mt-10 lg:container lg:mx-auto lg:px-28 md:container md:mx-auto md:px-10">
        <div className="grid lg:grid-cols-12 md:grid-cols-3 md:gap-2 lg:gap-6 gap-2">
          {data.saleMonth.map((item, index) => (
            <div
              key={index}
              className="lg:col-span-4 bg-cover text-center object-contain rounded-md"
              style={{
                backgroundImage: `url(${item.img})`,
                objectFit: "cover",
                width: "auto",
                height: "600px",
              }}
            >
              <p className="lg:text-[14px] md:text-[12px] text-white mt-10  font-medium uppercase">
                {item.heading}
              </p>
              <p className="lg:text-[40px] md:text-[20px] leading-[48px] text-[20px] font-bold text-white lg:mt-3 ">
                {item.title}
              </p>
              {item.Component}
              <div className=" flex justify-center mt-3">
                <NavLink to="/allproducts">
                  <button
                    className="flex items-center gap-2 duration-150 text-primary bg-white rounded-full 
                       text-center lg:px-[36px] lg:py-[12px] md:px-[18px] md:py-[6px] px-[36px] py-[12px] md:text-[14px] lg:text-[16px] mt-5 font-semibold hover:bg-primary hover:text-white"
                  >
                    {item.button}{" "}
                    <GoArrowRight size={20} color="primary" className="" />
                  </button>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default SaleMonth;
