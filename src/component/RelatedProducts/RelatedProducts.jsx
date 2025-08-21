import React from "react";
import { data } from "../../Data/Data";
import { Rating } from "flowbite-react";
import { GoHeart } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";


function RelatedProducts() {
  return (
    <>
      <section className="p-4 mt-10 mb-10 lg:container lg:mx-auto lg:px-28 md:container md:mx-auto md:px-10">
        <div>
          <p className="text-center text-[25px] leading-[24px] font-semibold">
            Related Products
          </p>
          <div className=" grid lg:grid-cols-12 md:grid-cols-2 md:mt-8 duration-150 md:p-0 p-3">
            {data.relatedProducts.map((item, index) => (
              <div
                key={index}
                className="group/item group transition-all duration-300 grid justify-center relative lg:col-span-3 md:col-span-1 border border-grey hover:border-[#2C742F]  hover:shadow-[rgba(11,_145,_11,_0.7)_0px_4px_6px_-1px]"
              >
                <img
                  src={item.img}
                  className="popularProductImage w-[280px] h-[300px] p-2"
                />
                {item.sale ? (
                  <span className="absolute bg-[#EA4B48] text-white text-[14px] px-[8px] py-[8px] rounded-md top-[16px] left-[16px]">
                    {item.sale}
                  </span>
                ) : (
                  <></>
                )}
                <div className="ml-3 mr-3 mt-5 mb-3">
                  <p className="text-left text-[14px] text-[#4D4D4D] group-hover:text-primary  leading-6 font-medium  ">
                    {item.name}
                  </p>
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex gap-1">
                      <p className="text-[16px] leading-[24px] ">
                        {item.price}
                      </p>
                      <p className="text-[16px] text-[#999999] leading-[24px] line-through">
                        {item.initialPrice}
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <Rating className="">
                      <Rating.Star fill="orange" fontSize={20} />
                      <Rating.Star fill="orange" fontSize={20} />
                      <Rating.Star fill="orange" fontSize={20} />
                      <Rating.Star fill="orange" fontSize={20} />
                      <Rating.Star filled={false} fontSize={20} />
                    </Rating>
                  </div>
                </div>
                <div className="group/edit invisible group-hover/item:visible absolute right-5 top-5 ">
                  <div className="group/icon border-2 border-[#F2F2F2] bg-white hover:bg-primary rounded-full p-2 mb-4 ">
                    <GoHeart
                      className="group-hover/icon:fill-white"
                      size={25}
                      color="black"
                    />
                  </div>
                  <div className="group/icon border-2 border-[#F2F2F2] bg-white hover:bg-primary rounded-full p-2 ">
                    <IoEyeOutline
                      className="group-hover/icon:fill-white"
                      size={25}
                      color="black"
                    />
                  </div>
                  <div className="group/icon visible bg-[#F2F2F2] hover:bg-primary rounded-full p-2 mt-52 ">
                    <HiOutlineShoppingBag
                      className="group-hover/icon:fill-white"
                      size={25}
                      color="black"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default RelatedProducts;
