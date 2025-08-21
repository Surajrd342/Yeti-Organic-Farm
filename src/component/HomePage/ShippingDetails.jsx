import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiCustomerService2Line } from "react-icons/ri";
import { HiShoppingBag } from "react-icons/hi2";
import { MdAssignmentReturn } from "react-icons/md";

function ShippingDetails() {
  return (
    <>
      <section className="py-6">
        <div className="container mx-auto px-4 lg:px-28 md:container md:mx-auto md:px-10">
          <div className="grid gap-6 p-6 md:p-8 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] md:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center p-3 space-x-3 col-span-1">
              <LiaShippingFastSolid size={40} color="#00B207" />
              <div>
                <p className="text-[14px] md:text-[16px] font-bold">
                  Free Shipping
                </p>
                <p className="text-[14px] md:text-[16px] text-[#999999]">
                  Free shipping on all your orders
                </p>
              </div>
            </div>

            <div className="flex items-center p-3 space-x-3 col-span-1">
              <RiCustomerService2Line size={40} color="#00B207" />
              <div>
                <p className="text-[14px] md:text-[16px] font-bold">
                  Customer Support 24/7
                </p>
                <p className="text-[14px] md:text-[16px] text-[#999999]">
                  Instant access to Support
                </p>
              </div>
            </div>

            <div className="flex items-center p-3 space-x-3 col-span-1">
              <HiShoppingBag size={40} color="#00B207" />
              <div>
                <p className="text-[14px] md:text-[16px] font-bold">
                  100% Secure Payment
                </p>
                <p className="text-[14px] md:text-[16px] text-[#999999]">
                  We ensure your money is safe
                </p>
              </div>
            </div>

            <div className="flex items-center p-3 space-x-3 col-span-1">
              <MdAssignmentReturn size={40} color="#00B207" />
              <div>
                <p className="text-[14px] md:text-[16px] font-bold">
                  Money-Back Guarantee
                </p>
                <p className="text-[14px] md:text-[16px] text-[#999999]">
                  30 Days Money-Back Guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ShippingDetails;
