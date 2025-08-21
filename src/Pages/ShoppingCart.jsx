import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { GoHome } from "react-icons/go";
import SubscriptionNews from "../component/HomePage/SubscriptionNews";
import apple from "../assets/apple.png";
import redchili from "../assets/redchilli.png";
import CartSystem from "../component/CartItem/CartSystem";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

function ShoppingCart() {
  const cart = useSelector((state) => state.cart.cart);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <>
      {/* Header Description */}
      <section className="p-2 lg:container lg:mx-auto lg:px-28 md:container md:mx-auto md:px-10 text-[#999999] leading-6 text-[14px] font-normal mt-3 md:mt-0">
        <div className="flex items-center space-x-2 h-[70px] ">
          <div className="hover:text-[#00B207]">
            <GoHome size={20} />
          </div>
          <IoIosArrowForward />
          <p className="hover:text-[#00B207]">Cart</p>
          <IoIosArrowForward />
          <p className="hover:text-[#00B207] text-[#00B207]">Products</p>
        </div>
      </section>

      <section className="lg:mt-10 lg:container lg:mx-auto lg:px-28 md:container md:mx-auto md:px-10 p-3">
        <div>
          <p className="text-[#1A1A1A] leading-[32.8px] text-[32px] font-semibold text-center">
            My Shopping Cart
          </p>
          <div className="lg:grid md:grid-cols-12 gap-5 mt-10">
            <div className="md:col-span-8 ">
              <CartSystem />

              {/* Coupon code  */}
              <div className="mt-4 border rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <p className="text-[#1A1A1A] text-[20px] leading-[30px] font-medium">
                    Coupon Code
                  </p>
                  <div className=" md:flex content-center">
                    <div className="md:flex items-center justify-center">
                      <input
                        className="text-[16px] leading-[24px] text-[#808080] md:text-left text-center border border-grey rounded-full md:py-[14px] md:px-[24px] w-full lg:w-[550px] lg:mr-[-90px] md:w-[300px] md:mr-[-90px]"
                        type="text"
                        placeholder="Enter Code"
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      <button className="bg-[#333333] transition-all duration-250 text-white md:py-[16px] md:px-[40px] py-[7px] px-[20px] md:text-[16px] text-sm rounded-full hover:bg-[#2C742F] duration-150 md:w-[200px] md:mt-0 mt-3">
                        Apply Coupon
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cart Total */}
            <div className="md:col-span-4 mt-4 lg:mt-0">
              <div className="border p-5 rounded-lg">
                <p className="text-[#1A1A1A] leading-[30px] text-[20px] font-medium">
                  Cart Total
                </p>
                <div className="mt-2">
                  <div className="flex items-center justify-between border-b pb-3">
                    <p className="text-[14px] leading-[21px] text-[#4D4D4D]">
                      Subtotal:
                    </p>
                    <p className="text-[14px] leading-[21px] text-[#1A1A1A] font-medium">
                      ${totalPrice}
                    </p>
                  </div>
                  <div className="flex items-center justify-between  border-b mt-5 pb-3">
                    <p className="text-[14px] leading-[21px] text-[#4D4D4D]">
                      Shipping:
                    </p>
                    <p className="text-[14px] leading-[21px] text-[#1A1A1A] font-medium">
                      Free
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-5">
                    <p className="text-[16px] leading-[24px] text-[#4D4D4D] font-normal ">
                      Total:
                    </p>
                    <p className="text-[16px] leading-[19.2px] text-[#1A1A1A] font-semibold">
                      ${totalPrice}
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <button
                      className=" bg-primary text-primary rounded-full py-3 px-8 mt-7
                       text-center font-semibold transition-colors duration-150  hover:bg-[#2C742F] hover:text-white lg:w-full"
                    >
                      <div className="">
                        <div className="flex items-center space-x-2 justify-center">
                          <span className="text-white md:text-base text-sm">
                            Proceed to checkout
                          </span>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe and Newsletter */}
      <SubscriptionNews />
    </>
  );
}

export default ShoppingCart;

const data = [
  {
    img: apple,
    name: `Apple`,
    price: `12`,
    quantity: `5`,
    subtotal: `60`,
  },
  {
    img: redchili,
    name: `Red Chilli`,
    price: `15`,
    quantity: `6`,
    subtotal: `90`,
  },
];
