import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Assuming you're using react-router-dom
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import farmlogo from "../../assets/farmary.png";
import { GrSubtract, GrAdd } from "react-icons/gr";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa6";
import { BsDot } from "react-icons/bs";
import { GoHeart, GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import IncrementDecrementBtn from "../../component/Counter/CounterButton";

function Product() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const product = useSelector((state) => state.products.singleProduct);
  const cartItem = useSelector((state) =>
    state.cart.cart.find((item) => item.id === parseInt(id))
  );
  const [count, setCount] = useState(cartItem ? cartItem.amount : 1);

  const handleIncrement = () => {
    setCount(count + 1);
    // dispatch(updateQuantity({ id: product.id, amount: newCount }));
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
      // dispatch(updateQuantity({ id: product.id, amount: newCount }));
    }
  };

  return (
    <>
      {product.map((item, index) => (
        <section key={index} className="lg:container lg:mx-auto lg:px-28 md:container md:mx-auto md:px-10">
          {/* Header Description */}
          <section className="p-2 lg:mb-10 lg:mt-[-20px] mt-10 lg:w-1/3 text-[#999999] leading-6 text-[14px] font-normal bg-cover">
            <div className="flex items-center space-x-2 lg:h-[70px] ">
              <div className="hover:text-[#00B207]">
                <GoHome size={20} />
              </div>
              <IoIosArrowForward />
              <p className="">Products</p>
              <IoIosArrowForward />
              <p className="">{item.category}</p>
              <IoIosArrowForward />
              <p className="text-[#00B207]">{item.title}</p>
            </div>
          </section>
          <div className="lg:flex md:flex-row flex-col justify-around p-2 lg:p-0">
            {/* image sliders */}
            <div className="lg:w-1/2">
              <div className="flex items-center justify-center">
                {/* <Carousel /> */}
                <div className="w-full">
                  <img src={item.img} alt="" className="w-[500px] h-auto" />
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="lg:w-1/2 md:w-full">
              <div className="border-solid border-b-2 border-grey">
                <div className="flex items-center space-x-2 mb-2">
                  <p className="md:text-[36px] text-[25px] md:leading-[43.2px] leading-[30px] font-semibold">
                    {item.title}
                  </p>
                  <span className="text-[#2C742F] md:text-[14px] text-[10px] leading-[21px] bg-[#20B526] bg-opacity-[20%] px-[5px] py-[5px] rounded">
                    In Stock
                  </span>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex items-center space-x-2">
                    <div className="">
                      <span className="text-[#ffa500] text-[22px]">
                        {"★".repeat(Math.round(item.star))}
                      </span>
                      <span className="text-gray-400 text-[22px]">
                        {"★".repeat(5 - Math.round(item.star))}
                      </span>
                    </div>
                    <p className="text-[14px] leading-[21px] text-[#666666]">
                      {item.star} Review
                    </p>
                  </div>
                  <BsDot color="#B3B3B3" size={25} />
                  <p className="text-[#333333] text-[14px] leading-[21px] font-medium">
                    SKU:{" "}
                    <span className="text-[#666666] font-normal">
                      "251,598"
                    </span>
                  </p>
                </div>
                <div className="flex items-center space-x-3 mb-5">
                  <div className="flex items-center space-x-1">
                    <p className="text-[#2C742F] text-[24px] leading-[36px]">
                      ${item.price}
                    </p>

                    {item.initialPrice ? (
                      <p className="text-[#B3B3B3] text-[20px] leading-[30px] line-through">
                        ${item.initialPrice}
                      </p>
                    ) : null}
                  </div>

                  {item.sale ? (
                    <span className="text-[#EA4B48] text-[14px] leading-[21px] font-medium bg-[#EA4B48] bg-opacity-10 rounded-full px-[10px] py-[5px]">
                      {item.sale} Off
                    </span>
                  ) : null}
                </div>
              </div>

              {/* Brand logo and Description */}
              <div className="">
                <div className="lg:flex flex-row items-center justify-between mt-8">
                  <div className="flex items-center space-x-2 md:mb-0 mb-2">
                    <p className="text-[14px] leading-[21px]">Brand:</p>
                    <img src={farmlogo} alt="" className="md:w-16 w-9" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <p className="text-[14px] leading-[21px] font-normal">
                      Share item:
                    </p>
                    <div className="flex gap-2 text-[#4D4D4D] justify-center">
                      <div className="hover:bg-primary p-3 rounded-full hover:text-white duration-150">
                        <FaFacebookF />
                      </div>
                      <div className="hover:bg-primary p-3 rounded-full hover:text-white duration-150">
                        <FaTwitter />
                      </div>
                      <div className="hover:bg-primary p-3 rounded-full hover:text-white duration-150">
                        <FaPinterestP />
                      </div>
                      <div className="hover:bg-primary p-3 rounded-full hover:text-white duration-150">
                        <FaInstagram />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-[#808080] text-[14px] leading-[21px] mt-3 text-wrap md:w-10/12">
                  "Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel
                  consequat nec, ultrices et ipsum. Nulla varius magna a
                  consequat pulvinar."
                </p>
              </div>

              {/* Add to cart Line */}
              <div className="mt-8 ">
                <div className="md:grid grid-cols-12 gap-4 space-x-2 items-center border-y-2 border-grey">
                  <div className="col-span-2 mt-4 mb-4 md:w-full flex space-x-4 justify-center">
                    <IncrementDecrementBtn
                      count={count}
                      onIncrement={handleIncrement}
                      onDecrement={handleDecrement}
                    />
                    <div className="col-span-2 group md:hidden">
                      <div className="group/item bg-[#20B526] bg-opacity-10 rounded-full items-center justify-center inline-flex w-12 h-12 hover:bg-[#20B526]">
                        <GoHeart
                          className="heartIcon group-hover/item:fill-white"
                          size={20}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-span-8 flex mb-[-25px] md:mb-0">
                    <button
                      onClick={() =>
                        dispatch(
                          addToCart({
                            id: item.id,
                            img: item.img,
                            title: item.title,
                            price: item.price,
                            amount: count,
                            totalPrice: item.price * count,
                            star: item.star,
                          })
                        )
                      }
                      className="bg-primary text-primary rounded-full py-3 px-8 text-center font-semibold transition-colors duration-150 hover:bg-[#2C742F] hover:text-white w-full"
                    >
                      <div className="">
                        <div className="flex items-center space-x-2 justify-center">
                          <span className="text-white md:text-base text-sm">
                            Add to Cart
                          </span>
                          <HiOutlineShoppingBag
                            size={20}
                            color="white"
                            className="eye-margin"
                          />
                        </div>
                      </div>
                    </button>
                  </div>

                  <div className="col-span-2 group invisible md:visible">
                    <div className="group/item bg-[#20B526] bg-opacity-10 rounded-full items-center justify-center inline-flex w-12 h-12 hover:bg-[#20B526]">
                      <GoHeart
                        className="heartIcon group-hover/item:fill-white"
                        size={20}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Category and Tag */}
              <div className="mt-8 space-y-3">
                <p className="text-[14px] leading-[21px] font-medium">
                  Category:{" "}
                  <span className="text-[#808080] font-normal">
                    {item.category}
                  </span>
                </p>
                <p className="text-[14px] leading-[21px] font-medium">
                  Tag:{" "}
                  <span className="text-[#808080] font-normal">
                    Vegetables Healthy{" "}
                    <span className="text-[black] underline decoration-solid">
                      Chinese {""}
                    </span>
                    Cabbage Green Cabbage
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
export default Product;
