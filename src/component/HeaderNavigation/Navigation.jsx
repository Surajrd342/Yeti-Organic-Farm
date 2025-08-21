import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RxSlash } from "react-icons/rx";
import Devider from "../../assets/Devider.svg";
import Logo from "../../assets/logoWeb.png";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FiPhoneCall } from "react-icons/fi";
import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import Navlinks from "../Navbar/NavLinks";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navigation = () => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const navItemsNo = [
    { link: "Blog", path: "" },
    { link: "About Us", path: "" },
    { link: "Contact Us", path: "" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="">
      <div className=" w-full text-tertiary text-xs ">
        {/* location part */}
        <div className="border-solid border-b-2 border-grey ">
          <div className="h-[30px] md:flex items-center justify-between lg:container lg:mx-auto lg:px-28 md:container md:mx-auto md:px-10">
            <div className="flex space-x-1 items-center text-[12px] leading-[15.6px] ">
              <CiLocationOn className="" size={20} />
              <a className="flex items-center space-x-1">
                Samakhusi, Kathmandu
              </a>
            </div>

            <div className="flex items-center space-x-2">
              <div className="flex space-x-1 items-center cursor-pointer">
                <NavLink className="flex items-center" to="/signin">
                  Sign in
                </NavLink>
                <a>
                  <RxSlash className="" />
                </a>
                <NavLink className="flex items-center" to="/signup">
                  Sign Up
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        {/* logo and seacrch bar */}
        <div className="h-[70px] md:flex hidden items-center justify-between lg:container lg:mx-auto lg:px-28 md:container md:mx-auto md:px-10 ">
          <div className="logo ">
            <NavLink to="/">
              {" "}
              <img className="w-20 lg:w-24 h-auto" src={Logo} alt="logo" />
            </NavLink>
          </div>

          <div className="md:flex hidden">
            <div
              className=" flex py-[12px] pr-[18px] pl-[16px] lg:w-[400px] md:w-[150px] h-[45px] border-solid border-2 
            rounded-l-lg border-grey border-r-0"
            >
              <div className=" flex items-center">
                <CiSearch size={20} color="black" />
                <input
                  type="text"
                  placeholder="Search"
                  className="lg:w-[350px] border-none outline-none  text-[15px] p-1 bg-transparent "
                />
              </div>
            </div>
            <button
              className=" bg-primary rounded-r-lg border-primary text-white text-[14px] pt-2 pb-2 pl-5 pr-5
            hover:bg-[#2C742F] duration-150"
            >
              Search
            </button>
          </div>

          <div className="hidden md:flex space-x-4">
            <div className="border-r pr-4 hover:text-primary hidden lg:block">
              {/* <img src={Devider} alt="" /> */}
              <GoHeart className="rheart" size={32} color="black" />
            </div>

            <div className="flex space-x-3 relative">
              <NavLink to="/cart">
                <div className="cursor-pointer">
                  <HiOutlineShoppingBag
                    className="rcart"
                    size={32}
                    color="black"
                  />
                  {/* <span className="flex absolute bg-primary rounded-[50%] text-white w-[20px] h-[20px] text-center items-center">2</span> */}
                </div>{" "}
              </NavLink>
              <div className="">
                <p className="text-tertiary">Shopping cart:</p>
                <span className="font-bold text-black">${totalPrice}</span>
              </div>
              {totalAmount > 0 ? (
                <div className="absolute w-6 h-6 flex bg-[#2C742F] text-white rounded-full p-2 items-center justify-center top-[-5px] left-[5px] ">
                  <p className="text-[10px] leading-[10px] font-medium ">
                    {totalAmount}
                  </p>{" "}
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>

        {/* nav items  */}
        <div className="bg-[#333333] h-[50px] md:flex hidden items-center justify-between lg:container lg:mx-auto lg:px-28 md:container md:mx-auto md:px-10">
          <div className=" ">
            <ul className="flex space-x-3 text-[14px] leading-[21px] duration-500 ">
              <Navlinks className="" />
              {navItemsNo.map(({ link, path }) => (
                <a
                  key={path}
                  href={path}
                  className={`flex items-center hover:text-grey`}
                >
                  {link}
                </a>
              ))}
            </ul>
          </div>

          <div className="flex space-x-2 items-center">
            <FiPhoneCall color="white" className="" size={20} />
            <p className="text-[14px] text-white hover:decoration-solid hover:underline hover:decoration-[#00b207] hover:decoration-2 hover:underline-offset-4 ">
              (219) 555-0114
            </p>
          </div>
        </div>

        {/* logo and buton for mobile deviced */}
        <div className="navMobile md:hidden flex items-center justify-between p-3 bg-transparent bg-white transition-all duration-150">
          <div className="logo ">
            <NavLink to="/">
              {" "}
              <img className="w-24" src={Logo} alt="logo" />
            </NavLink>
          </div>

          {/* menu items bar showing only in mobile devices */}
          <div className="md:hidden flex items-center gap-2">
            <div className="flex space-x-3 relative">
              <NavLink to="/cart">
                <div className="cursor-pointer">
                  <HiOutlineShoppingBag
                    className="rcart"
                    size={23}
                    color="green"
                  />
                  {/* <span className="flex absolute bg-primary rounded-[50%] text-white w-[20px] h-[20px] text-center items-center">2</span> */}
                </div>{" "}
              </NavLink>
              {totalAmount > 0 ? (
                <div className="absolute w-3 h-3 flex bg-[#2C742F] text-white rounded-full p-2 items-center justify-center top-[-6px] left-[-2px] ">
                  <p className="text-[10px] leading-[10px] font-medium ">
                    {totalAmount}
                  </p>{" "}
                </div>
              ) : (
                <></>
              )}
            </div>
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-primary"
            >
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6 text-primary" />
              ) : (
                <FaBars className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>

        {/* nav-items for mobile devices */}
        <div
          className={`z-40 space-y-3 px-5 pt-20 pb-5 bg-[#102B0D] text-[16px] leading-[21px] duration-250 ${
            isMenuOpen
              ? "block fixed top-0 right-0 left-0 w-[410px] m-2 rounded-md"
              : "hidden"
          }`}
        >
          <Navlinks toggleOff={() => toggleMenu(false)} />
          {navItemsNo.map(({ link, path }) => (
            <a
              key={path}
              href={path}
              onClick={() => toggleMenu(false)}
              className="block hover:text-grey"
            >
              {link}
            </a>
          ))}
          <div className="flex space-x-1 items-center cursor-pointer">
            <NavLink
              className="flex items-center hover:decoration-solid hover:underline hover:decoration-[#00b207] hover:decoration-2 hover:underline-offset-4 "
              to="/signin"
              onClick={() => toggleMenu(false)}
            >
              Sign in
            </NavLink>
            <a>
              <RxSlash className="" />
            </a>
            <NavLink
              className="flex items-center hover:decoration-solid hover:underline hover:decoration-[#00b207] hover:decoration-2 hover:underline-offset-4"
              to="/signup"
              onClick={() => toggleMenu(false)}
            >
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
