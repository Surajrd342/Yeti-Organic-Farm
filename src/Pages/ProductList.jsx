import React, { useState, useEffect } from "react";
import { LuSettings2 } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";
import bgImg from "../assets/sidebar.png";
import { Rating } from "flowbite-react";
import SubscriptionNews from "../component/HomePage/SubscriptionNews";
import HeaderShop from "../component/HeaderShop/HeaderShop";
import AllProduct from "../component/AllProductShop/AllProduct";
//Date
import { AllProductData } from "../Data/ProductList";
import { data } from "../Data/Data";
import Card from "../component/Card/Card";
import Sidebar from "../component/SideBarShop/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { resetFilters } from "../features/productSlice";
import AllCategories from "../component/CategoriesShop/AllCategories";

function ProductList() {
  const products = AllProductData;
  const dispatch = useDispatch();
  const filteredProducts = useSelector(
    (state) => state.products.filteredProducts
  );
  useEffect(() => {
    // Dispatch the resetFilters action when the component mounts
    dispatch(resetFilters());
  }, [dispatch]);
  return (
    <>
      <div className="mt-[5px] md:container md:mx-auto md:px-10 lg:container lg:mx-auto lg:px-28 p-4">
        {/* Header Description */}
        <div>
          <HeaderShop />
        </div>

        {/* For Mobile device */}
        <div className="md:hidden mt-[-30px]">
          <AllCategories />
        </div>

        <section className=" ">
          <div className="md:grid grid-flow-col-dense grid-cols-12 gap-5">
            {/* Left side */}
            <div className=" col-span-3 py-5 hidden lg:block">
              {/* Filter Button */}
              <div className="hidden md:block">
                <button
                  className="flex items-center gap-2 duration-150 text-white bg-primary rounded-full 
                       text-center px-[32px] py-[14px] font-semibold hover:bg-[#2C742F] hover:text-white"
                >
                  Filter
                  <LuSettings2 size={25} color="primary" className="" />
                </button>
              </div>

              <Sidebar />

              {/* Sale Banner  */}
              <div className="hidden md:block container mt-7 w-full h-[295px] ">
                <div
                  className="text-center space-y-2 rounded-lg"
                  style={{
                    width: "100%",
                    height: "295px", // You can adjust the height as needed
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundImage: `url(${bgImg})`,
                  }}
                >
                  <p className="text-[24px] leading-[36px] font-normal pt-5">
                    <span className="text-[32px] leading-[38.4px] font-semibold text-[#ff8a00] m-2">
                      79%
                    </span>
                    Discount
                  </p>
                  <p className="text-[16px] leading-[24px] text-[#4D4D4D] font-normal">
                    on your first order
                  </p>
                  <div className="flex items-center text-center justify-center ">
                    <button className="flex items-center gap-2 text-[16px] leading-[19.2px] font-semibold text-primary transition duration-300 ease-in-out">
                      Shop Now{" "}
                      <span>
                        <FaArrowRightLong />
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Sale products items  */}
              <div className=" mt-6 hidden md:block">
                <p className="text-[#1A1A1A] text-[20px] font-medium leading-[30px]">
                  Sale Products
                </p>
                {data.saleData.map((item, index) => (
                  <div
                    key={index}
                    className="group border rounded-md p-3 mt-3 flex items-center gap-3 hover:border-primary hover:shadow-md 
                  "
                  >
                    <img
                      src={item.img}
                      alt=""
                      className="w-[102px] h-[102px]"
                    />
                    <div className="space-y-1">
                      <p className="text-[14px] leading-[21px] text-[#4D4D4D] font-normal group-hover:text-primary">
                        {item.name}
                      </p>
                      <p className="text-[16px] leading-[24px] text-[#1A1A1A] font-medium">
                        {item.price}{" "}
                        <span
                          className="text-[#999999] font-normal line-through
"
                        >
                          {item.initialPrice}
                        </span>
                      </p>
                      <div className="">
                        <Rating className="">
                          <Rating.Star fill="orange" fontSize={15} />
                          <Rating.Star fill="orange" fontSize={15} />
                          <Rating.Star fill="orange" fontSize={15} />
                          <Rating.Star fill="orange" fontSize={15} />
                          <Rating.Star filled={false} fontSize={15} />
                        </Rating>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side */}
            <div className="lg:col-span-9 md:col-span-12 md:py-8">
              <div className="mt-[-50px] mb-9 hidden md:block lg:hidden">
                <AllCategories />
              </div>

              <AllProduct />

              <div className="lg:hidden flex gap-4">
                {/* Sale Banner  */}
                <div className="hidden md:block container mt-14 w-1/2 ">
                  <div
                    className="text-center space-y-2 rounded-lg"
                    style={{
                      width: "100%",
                      height: "440px", // You can adjust the height as needed
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundImage: `url(${bgImg})`,
                    }}
                  >
                    <p className="text-[24px] leading-[36px] font-normal pt-5">
                      <span className="text-[32px] leading-[38.4px] font-semibold text-[#ff8a00] m-2">
                        79%
                      </span>
                      Discount
                    </p>
                    <p className="text-[16px] leading-[24px] text-[#4D4D4D] font-normal">
                      on your first order
                    </p>
                    <div className="flex items-center text-center justify-center ">
                      <button className="flex items-center gap-2 text-[16px] leading-[19.2px] font-semibold text-primary transition duration-300 ease-in-out">
                        Shop Now{" "}
                        <span>
                          <FaArrowRightLong />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Sale products items  */}
                <div className="md:flex flex-col gap-2 md:w-1/2 w-full mt-14 lg:hidden">
                  <p className="text-[#1A1A1A] text-center mb-2 md:mb-0 text-[20px] font-medium leading-[30px]">
                    Sale Products
                  </p>
                  {data.saleData.map((item, index) => (
                    <div
                      key={index}
                      className="group border rounded-md p-3 mb-2 md:mb-0 flex items-center justify-center gap-7 hover:border-primary hover:shadow-md 
                  "
                    >
                      <img
                        src={item.img}
                        alt=""
                        className="w-[102px] h-[102px]"
                      />
                      <div className="space-y-1">
                        <p className="text-[14px] leading-[21px] text-[#4D4D4D] font-normal group-hover:text-primary">
                          {item.name}
                        </p>
                        <p className="text-[16px] leading-[24px] text-[#1A1A1A] font-medium">
                          {item.price}{" "}
                          <span
                            className="text-[#999999] font-normal line-through
"
                          >
                            {item.initialPrice}
                          </span>
                        </p>
                        <div className="">
                          <Rating className="">
                            <Rating.Star fill="orange" fontSize={15} />
                            <Rating.Star fill="orange" fontSize={15} />
                            <Rating.Star fill="orange" fontSize={15} />
                            <Rating.Star fill="orange" fontSize={15} />
                            <Rating.Star filled={false} fontSize={15} />
                          </Rating>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <SubscriptionNews />
    </>
  );
}

export default ProductList;
