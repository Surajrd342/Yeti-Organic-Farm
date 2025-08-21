import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa6";

function SubscriptionNews() {
  return (
    <>
      <section className="p-4 mt-10 bg-[#F2F2F2] md:container md:mx-auto md:px-28">
        <div className="lg:flex items-center lg:justify-between justify-center mt-5 mb-5 space-y-6">
          <div className="lg:w-[448px] p-1">
            <p className="text-[24px] leading-[36px] font-semibold lg:text-left text-center">
              Subcribe our Newsletter
            </p>
            <p className="text-[14px] leading-[21px] text-[#999999] mt-1 lg:text-left text-center">
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
              Phasellus imperdiet elit eu magna.
            </p>
          </div>
          <div className="md:ml-[30px] lg:mr-[-70px] md:flex content-center">
            <div className="flex items-center justify-center">
              <input
                className="text-[16px] leading-[24px] text-[#808080] md:text-left text-center border border-grey rounded-full py-[14px] md:px-[24px] w-full md:w-[400px] lg:w-[470px] h-[52px] md:mr-[-90px]"
                type="text"
                placeholder="Your email address"
              />
            </div>
            <div className="flex justify-center md:mt-0 mt-2">
              <button className="bg-primary text-white py-[16px] px-[40px] rounded-full hover:bg-[#2C742F] duration-150 ">
                Subscribe
              </button>
            </div>
          </div>
          <div className="flex gap-2 text-[#4D4D4D] justify-center">
            <div className="hover:bg-primary p-3 rounded-full hover:text-white duration-150">
              <FaFacebookF size={""} />
            </div>
            <div className="hover:bg-primary p-3 rounded-full hover:text-white duration-150">
              <FaTwitter size={""} />
            </div>
            <div className="hover:bg-primary p-3 rounded-full hover:text-white duration-150">
              <FaPinterestP size={""} />
            </div>
            <div className="hover:bg-primary p-3 rounded-full hover:text-white duration-150">
              <FaInstagram size={""} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SubscriptionNews;
