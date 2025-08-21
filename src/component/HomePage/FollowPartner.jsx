import React from "react";
import { LuTally1 } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa6";
import { data } from "../../Data/Data";

function FollowPartner() {
  return (
    <>
      <section className="p-4 mt-12 mb-10 lg:container lg:mx-auto lg:px-28 md:container md:mx-auto md:px-10">
        <div>
          <div className=" md:flex md:space-y-0 space-y-6 items-center md:justify-between justify-center">
            {data.followUs.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center md:justify-between"
              >
                <div className="clogo md:w-1/2 flex items-center justify-center ">
                  <img
                    src={item.logo}
                    alt=""
                    className="md:transform md:transition-all md:hover:scale-125 w-[150px]"
                  />
                </div>
                <div className="md:col-span-1 md:flex hidden">
                  <LuTally1 className="" size={40} color="#E6E6E6" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <p className="text-center md:text-[32px] font-semibold">
              Follow us on Instagram
            </p>
            <div className="grid md:grid-cols-12 gap-5 mt-5 items-center justify-center md:p-1 p-12">
              {data.followUs.map((item, index) => (
                <div key={index} className="col-span-2 rounded-xl relative overflow-hidden group ">
                  <img src={item.img} alt="" className="" />
                  <div  
                    class="absolute h-full w-full bg-[#2B572E]/50 flex items-center 
                  justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 
                  transition-all duration-300 text-white"
                  >
                    <FaInstagram className="" size={30} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FollowPartner;
