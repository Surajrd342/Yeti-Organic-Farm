import "../App.css";
import { GoArrowRight } from "react-icons/go";
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiCustomerService2Line } from "react-icons/ri";
import { HiShoppingBag } from "react-icons/hi2";
import { MdAssignmentReturn } from "react-icons/md";
import ClientTestomonial from "../component/HomePage/ClientTestomonial";

import FollowPartner from "../component/HomePage/FollowPartner";
import PopularProducts from "../component/HomePage/PopularProducts";
import FeaturedProducts from "../component/HomePage/FeaturedProducts";
import PopularCategories from "../component/HomePage/PopularCategories";
import SaleMonth from "../component/HomePage/SaleMonth";
import SubscriptionNews from "../component/HomePage/SubscriptionNews";
import HotDeals from "../component/HomePage/HotDeals";
import SummerBanner from "../component/HomePage/SummerBanner";
import ShippingDetails from "../component/HomePage/ShippingDetails";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="">
      {/* Home section */}
      <section className="md:mt-3">
        <div className="grid md:grid-flow-row-dense lg:grid-cols-3 lg:gap-6 md:gap-3 container lg:container lg:mx-auto lg:px-28 md:container md:mx-auto md:px-10 px-3">
          <div className="gridone flex items-center md:col-span-2 row-span-2 h-[600px] md:bg-[url('./assets/banner.png')] bg-cover rounded-md ">
            <div className="gap-5 p-10">
              <p className="text-[48px] lg:w-[500px] md:w-[580px] font-semibold text-white leading-[57px]">
                Fresh & Healthy Organic Food
              </p>
              <div className="border-l-2 border-[#84D187] mt-6 pl-2">
                <div className="flex space-x-2 text-[20px] text-white items-center">
                  <p>Sale up to</p>
                  <p className="font-medium bg-orange px-[12px] py-[4px] rounded">
                    30% OFF
                  </p>
                </div>
                <p className="text-[14px] text-white opacity-[80%] mt-2">
                  Free shipping on all your order.
                </p>
              </div>
              <NavLink to="/allproducts">
                <button className="buttonPrimary">
                  Shop now{" "}
                  <GoArrowRight size={20} color="primary" className="" />
                </button>
              </NavLink>
            </div>
          </div>

          <div className="relative row-span-1 h-[288px] bg-[url('./assets/hBanner2.png')] bg-cover rounded-md">
            <div className="absolute top-[32px] left-[32px] gap-5">
              <p className="text-[#1A1A1A] text-[14px]">SUMMER SALE</p>
              <p className="text-[32px] font-semibold">75% OFF</p>
              <p className="text-[#666666] text-[14px] mt-2">
                Only Fruit & Vegetable
              </p>
              <NavLink to="/allproducts">
                <button className="buttonSecondary">
                  Shop Now{" "}
                  <GoArrowRight size={20} color="primary" className="" />
                </button>
              </NavLink>
            </div>
          </div>

          <div className="hidden row-span-1 md:flex items-center justify-center h-[288px] bg-[url('./assets/hBanner3.png')] bg-cover rounded-md">
            <div className=" flex flex-col items-center gap-2 text-white ">
              <p className="text-[14px] text-center leading-3 mb-3">
                Best Deal
              </p>
              <p className="text-[32px] text-center leading-[38px] font-bold w-[343px] h-[76px]">
                Special Products Deal of the Month
              </p>
              <div className="flex place-content-center mt-2 ">
                <NavLink to="/allproducts">
                  <button className="buttonTertiary">
                    Shop Now{" "}
                    <GoArrowRight size={20} color="primary" className="" />
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping details */}
      <ShippingDetails />

      {/* Popular Categories */}
      <PopularCategories />

      {/* Popular Products */}
      <PopularProducts />

      {/* Sale of the month */}
      <SaleMonth />

      {/* Hot deals */}
      <HotDeals />

      {/* SUMMER SALE BANNER */}
      <SummerBanner />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Client Testominial */}
      <ClientTestomonial />

      {/* follow us and partner logo */}
      <FollowPartner />

      {/* Subscribe and Newsletter */}
      <SubscriptionNews />
    </div>
  );
}

export default Home;
