import logo from "../../assets/logoWeb.png";
import applepay from "../../assets/ApplePay.png";
import visa from "../../assets/Visa.png";
import discover from "../../assets/Discover.png";
import mastercard from "../../assets/Mastercard.png";
import securepay from "../../assets/secureP.png";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="p-4 bg-[#1A1A1A] lg:container lg:mx-auto lg:px-28 md:container md:mx-auto md:px-10">
      <div className="grid md:grid-cols-12 gap-3 mt-10 mb-10">
        <div className="col-span-4 mb-3">
          <NavLink to="/">
            <div className="w-28 lg:w-24">
              <img src={logo} alt="logo" />
            </div>
          </NavLink>
          <p className="text-[#808080] text-[14px] leading-[21px] mt-2 lg:w-[336px]">
            "Bringing the Pure taste of Himalayas to Your table, We offer
            fresh,organic, & locally Sourced food items straight from the Heart
            of Mountains.Healthy , Natural , & Chemical-free. - Just the way
            NATURE intended."
          </p>
          <div className="lg:flex gap-2 items-center mt-5">
            <p className="text-[14px] leading-[21px] text-white hover:decoration-solid hover:underline hover:decoration-[#00b207] hover:decoration-2 hover:underline-offset-8 ">
              (977) 981-8741679
            </p>
            <p className="text-[14px] leading-[21px] text-[#808080]">or</p>
            <p className="text-[14px] leading-[21px] text-white hover:decoration-solid hover:underline hover:decoration-[#00b207] hover:decoration-2 hover:underline-offset-8 ">
              yetigreenstore@gmail.com
            </p>
          </div>
        </div>
        <div className="col-span-2 ">
          <p className="text-[16px] leading-[24px] text-white font-medium">
            My Account
          </p>
          <div className="mt-4 space-y-2">
            <p className="footerP">My Account</p>
            <p className="footerP">Order History</p>
            <p className="footerP">Shoping Cart</p>
            <p className="footerP">Wishlist</p>
          </div>
        </div>
        <div className="col-span-2 ">
          <p className="text-[16px] leading-[24px] text-white font-medium">
            Helps
          </p>
          <div className="mt-4 space-y-2">
            <p className="footerP">Contact</p>
            <p className="footerP">Faqs</p>
            <p className="footerP">Terms & Condition</p>
            <p className="footerP">Privacy Policy</p>
          </div>
        </div>
        <div className="col-span-2 md:mt-0 mt-3">
          <p className="text-[16px] leading-[24px] text-white font-medium">
            Proxy
          </p>
          <div className="mt-4 space-y-2">
            <p className="footerP">About</p>
            <p className="footerP">Shop</p>
            <p className="footerP">Product</p>
            <p className="footerP">Track Order</p>
          </div>
        </div>
        <div className="col-span-2 md:mt-0 mt-3 ">
          <p className="text-[16px] leading-[24px] text-white font-medium">
            Categories
          </p>
          <div className="mt-4 space-y-2">
            <p className="footerP">Fruit & Vegetables</p>
            <p className="footerP">Meat & Fish</p>
            <p className="footerP">Bread & Bakery</p>
            <p className="footerP">Beauty & Health</p>
          </div>
        </div>
      </div>

      <div className="md:flex justify-between items-center pt-4 border-t-[1px] border-[#333333] space-y-2">
        <p className="text-[#808080] text-[14px] leading-[21px] text-center">
          Yeti Green Store © 2025. All Rights Reserved
        </p>
        <div className="flex gap-2 h-[32px] justify-center">
          <div className="flex  gap-2">
            <img src={applepay} alt="" />
            <img src={visa} alt="" />
            <img src={discover} alt="" />
            <img src={mastercard} alt="" />
            <img src={securepay} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
