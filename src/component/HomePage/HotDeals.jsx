import React, { Component, useEffect } from "react";
import { GoArrowRight } from "react-icons/go";
import { Rating } from "flowbite-react";
import { GoHeart } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { HoteDealsMain } from "../../Data/Data";
import Card from "../Card/Card";
import { AllProductData } from "../../Data/ProductList";

import { useDispatch, useSelector } from "react-redux";
import { hotProduct } from "../../features/productSlice";

function HotDeals() {
  const filterProductHot = AllProductData.filter(
    (hProduct) => hProduct.hotDeals === true
  );
  
  return (
    <>
      <section className="p-4 mt-10 bg-[#F7F7F7] lg:container lg:mx-auto lg:px-28 md:container md:mx-auto md:px-10">
        <div className="flex justify-between mt-7 ">
          <p className="md:text-[32px] text-lg leading-8 font-medium ">
            Hot Deals
          </p>
          <a
            className="flex gap-3 text-[16px] items-center text-primary hover:text-[#2C742F] duration-150"
            href=""
          >
            View all <GoArrowRight size={20} color="primary" className="" />
          </a>
        </div>

        <div className="grid lg:grid-cols-10 md:grid-cols-3 mt-6 border transition-colors bg-white mb-10 duration-150 ">
          {/* Hot Deals main sale card */}
          {HoteDealsMain.map((item, index) => (
            <div
              key={index}
              className="relative justify-center lg:col-span-4 md:col-span-2 row-span-2 transition-colors duration-150 p-2 border border-grey hover:border-[#2C742F]  hover:shadow-[rgba(11,_145,_11,_0.7)_0px_4px_6px_-1px]"
            >
              <div className="flex ">
                <span className="absolute bg-[#EA4B48] text-white text-[14px] px-[8px] py-[8px] rounded-md top-[16px] left-[16px]">
                  Sale 50%
                </span>
                <span className="absolute bg-[#2388FF] text-white text-[14px] px-[8px] py-[8px] rounded-md top-[16px] left-[100px]">
                  Best Sale
                </span>
              </div>
              <div className="mt-24 ">
                <img src={item.img} alt="" className="" />
              </div>

              <div className="p-2 mt-[-30px] ">
                <div className=" grid grid-cols-6 gap-4 items-center justify-center p-3">
                  <div className=" w-12 h-12 group/icon bg-[#F2F2F2] hover:bg-primary rounded-full p-2 items-center">
                    <GoHeart
                      className="group-hover/icon:fill-white"
                      size={30}
                      color="black"
                    />
                  </div>
                  <div className="col-span-4 flex md:mb-0">
                    <button
                      className=" bg-primary text-primary rounded-full py-3 px-8
                       text-center font-semibold transition-colors duration-150 hover:bg-[#2C742F] hover:text-white w-full"
                    >
                      <div className="flex items-center space-x-2 justify-center ">
                        <span className="text-white md:text-base text-sm">
                          Add to Cart
                        </span>
                        <HiOutlineShoppingBag
                          size={20}
                          color="white"
                          className="eye-margin"
                        />
                      </div>
                    </button>
                  </div>
                  <div className=" group/icon w-12 h-12 bg-[#F2F2F2] hover:bg-primary rounded-full p-2 ">
                    <IoEyeOutline
                      className="group-hover/icon:fill-white"
                      size={30}
                      color="black"
                    />
                  </div>
                </div>

                <div className="text-center mt-4 ">
                  <p className=" text-[18px] leading-4 text-[#2C742F]">
                    {item.title}
                  </p>
                  <div className="flex gap-2 text-[24px] leading-9 justify-center mt-3">
                    <p className="font-medium ">{item.price}</p>
                    <p className="line-through  text-[#999999]">
                      {item.initialPrice}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 justify-center mt-2">
                    <div className="">
                      <span className="text-[#ffa500] text-[24px]">
                        {"★".repeat(Math.round(item.star))}
                      </span>
                      <span className="text-gray-400  text-[24px]">
                        {"★".repeat(5 - Math.round(item.star))}
                      </span>
                    </div>
                    {/* {item.Component} */}
                    <p className="text-[#808080] text-[12px] leading-4">
                      (524 Feedback)
                    </p>
                  </div>
                </div>

                <div className="text-center mt-4">
                  <p className="text-[14px] leading-4 text-tertiary font-normal">
                    {item.offerTag}
                  </p>
                  <div className="">{item.Components}</div>
                </div>
              </div>
            </div>
          ))}

          {/* Hot Deals sale card */}
          {filterProductHot.map((hProduct, index) => (
            <div key={index} className="lg:col-span-2">
              <Card
                id={hProduct.id}
                img={hProduct.img}
                title={hProduct.title}
                price={hProduct.price}
                initialPrice={hProduct.initialPrice}
                type={hProduct.type}
                star={hProduct.star}
                tag={hProduct.tag}
                sale={hProduct.sale}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default HotDeals;
