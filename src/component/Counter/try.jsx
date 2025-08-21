import React from "react";
import { FaInstagram, FaPinterestP, FaTwitter } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { TiSocialFacebook } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import brand from "../../assets/image/brand.png";
import Counter from "../../components/Counter";
import { addToCart, updateQuantity } from "../../features/slices/CartSlice";
import Description from "./Description";
import RelatedProducts from "./RelatedProducts";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.singleProductFun);
  const product = products.find((product) => product.id === parseInt(id));
  const cartItem = useSelector((state) =>
    state.cart.cart.find((item) => item.id === parseInt(id))
  );
  const handleIncrement = () => {
    dispatch(
      updateQuantity({ id: parseInt(id), quantity: cartItem.quantity + 1 })
    );
  };
  const handleDecrement = () => {
    if (cartItem.quantity > 1) {
      dispatch(
        updateQuantity({ id: parseInt(id), quantity: cartItem.quantity - 1 })
      );
    }
  };
  if (!product) {
    return <p>Product not found</p>;
  }
  return (
    <section className="md:mx-auto md:px-28 px-3 mt-6">
      <div className="grid grid-cols-12 gap-6 mb-8">
        <div className="col-span-12 md:col-span-6">
          <div className="w-full">
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-auto mb-4 rounded-md"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="border-b pb-4 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-[#1A1A1A] text-4xl font-semibold">
                {product.title}
              </h2>
              <span className="bg-[#79e67d33] text-[#2C742F] text-[14px] px-[8px] py-[4px] rounded-md">
                In Stock
              </span>
            </div>
            <div className="flex items-center gap-4 mb-2">
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <span className="text-[#FFA500] text-[24px]">
                    {"★".repeat(Math.round(product.rating))}
                  </span>
                  <span className="text-gray-400 text-[24px]">
                    {"★".repeat(5 - Math.round(product.rating))}
                  </span>
                </div>
                <span className="text-[#666666] text-sm font-normal">
                  {product.rating} Review
                </span>
              </div>
              <div className="text-[#666666]">.</div>
              <div className="text-[#333333] text-sm font-medium">
                <span className="mr-2">SKU:</span>
                <span className="text-[#666666] text-sm font-normal">
                  2,51,594
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <div>
                <del className="text-[#B3B3B3] text-xl font-normal mr-2">
                  {product.initial}
                </del>
                <span className="text-[#2C742F] text-2xl font-medium">
                  ${product.price}
                </span>
              </div>
              {product.sale && (
                <div className="text-[#EA4B48] bg-[#ee4a481a] p-2 text-sm font-medium rounded-full">
                  64% Off
                </div>
              )}
            </div>
          </div>
          <div className="border-b pb-4 mb-4">
            <div className="my-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span>Brand:</span>
                  <img src={brand} alt="" className="w-[56px] h-[56px]" />
                </div>
                <div className="flex gap-2 items-center">
                  <p>Share item:</p>
                  <div className="hover:bg-primary h-8 w-8 flex justify-center items-center rounded-full hover:text-white">
                    <TiSocialFacebook size={25} />
                  </div>
                  <div className="hover:bg-primary h-8 w-8 flex justify-center items-center rounded-full hover:text-white">
                    <FaTwitter size={20} />
                  </div>
                  <div className="hover:bg-primary h-8 w-8 flex justify-center items-center rounded-full hover:text-white">
                    <FaPinterestP size={20} />
                  </div>
                  <div className="hover:bg-primary h-8 w-8 flex justify-center items-center rounded-full hover:text-white">
                    <FaInstagram size={20} />
                  </div>
                </div>
              </div>
              <p className="text-[#808080] text-sm font-normal mt-2">
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel
                consequat nec, ultrices et ipsum. Nulla varius magna a consequat
                pulvinar.
              </p>
            </div>
          </div>
          <div className="border-b pb-4 mb-4">
            <div className="flex items-center justify-between gap-3 my-5">
              <Counter
                count={cartItem ? cartItem.quantity : 0}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
              />
              <div
                className="bg-[#00B207] rounded-full h-[45px] w-[350px] text-white flex items-center justify-center gap-3 hover:bg-[#2C742F] duration-150"
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: product.id,
                      img: product.img,
                      title: product.title,
                      price: product.price,
                      quantity: 1,
                      totalPrice: product.price,
                    })
                  )
                }
              >
                <p>Add to Cart</p>
                <HiOutlineShoppingBag size={18} />
              </div>
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#20B5261A] hover:bg-primary text-[#2C742F]">
                <GoHeart size={20} />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 my-4">
            <div className="text-[#1A1A1A] text-sm font-medium">
              Category:
              <span className="font-normal text-[#808080] ml-2">
                Vegetables
              </span>
            </div>
            <div className="text-[#1A1A1A] text-sm font-medium">
              Tag:
              <span className="font-normal text-[#808080] ml-2">
                Vegetables Healthy Chinese Cabbage Green Cabbage
              </span>
            </div>
          </div>
        </div>
      </div>
      <Description />
      <RelatedProducts />
    </section>
  );
};

// cartSystem code
{
  /* <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
              <thead class="text-xs text-[#808080] uppercase border-b">
                <tr className="uppercase">
                  <th scope="col" class="px-6 py-3">
                    <span
                      scope="col"
                      class="font-medium text-[14px] leading-[14px]"
                    >
                      Product
                    </span>
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 font-medium text-[14px] leading-[14px]"
                  >
                    price
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 font-medium text-[14px] leading-[14px]"
                  >
                    Quantity
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 font-medium text-[14px] leading-[14px]"
                  >
                    subtotal
                  </th>
                </tr>
              </thead>

              <tbody className="">
                {" "}
                {data.map((item, index) => (
                  <tr class="bg-white border-b">
                    <td class="p-4 flex items-center">
                      <img
                        src={item.img}
                        class="w-16 md:w-32 max-w-full max-h-full"
                        alt="Apple Watch"
                      />
                      <p className="text-[16px] leading-[24px] text-gray-900">
                        {item.name}
                      </p>
                    </td>
                    <td class="px-6 py-4 font-normal text-gray-900 dark:text-white text-[16px] leading-[24px]">
                      ${item.price}
                    </td>
                    <td class="px-6 py-4">
                      <div className="flex items-center rounded-full border-solid border-2 border-grey p-1 justify-between w-[130px] ">
                        <button className="bg-[#F2F2F2] p-3 rounded-full">
                          <GrSubtract size={13} />
                        </button>
                        <input
                          className="md:text-sm text-sm w-10 text-center border-none"
                          type="text"
                          placeholder={item.quantity}
                        />
                        <button className="bg-[#F2F2F2] p-3 rounded-full">
                          <GrAdd size={13} />
                        </button>
                      </div>
                    </td>
                    <td class="px-6 py-4 font-medium text-gray-900 dark:text-white text-[16px] leading-[24px]">
                      ${item.subtotal}
                    </td>
                    <td class="px-6 py-4">
                      <CiCircleRemove size={25} fill="#666666" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table> */
}

// product.jsx
{
  /* <div className="flex items-center space-x-1 rounded-full border-solid border-2 border-grey p-1 md:justify-evenly md:w-full ">
                      <div className="bg-[#F2F2F2] p-2 rounded-full">
                        <GrSubtract size={13} />
                      </div>
                      <p className="md:text-lg text-sm ">{""}</p>
                      <div className="bg-[#F2F2F2] p-2 rounded-full">
                        <GrAdd size={13} />
                      </div>
                    </div> */
}

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      // Add to cart logic
    },
    updateQuantity: (state, action) => {
      // Find the item and update its quantity
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.amount = quantity;
        item.totalPrice = item.price * quantity;
      }
    },
  },
});

export const { addToCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;





// ----------
// before try simran code
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Assuming you're using react-router-dom
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity, addToCart } from "../../features/cartSlice";
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
  const product = useSelector((state) => state.products.singleProduct);

  // State to keep track of the quantity
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    dispatch(updateQuantity({ id: product.id, amount: newCount }));
  };

  const handleDecrement = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      dispatch(updateQuantity({ id: product.id, amount: newCount }));
    }
  };

  return (
    <>
      {product.map((item, index) => (
        <section key={index} className="md:container md:mx-auto md:px-28">
          {/* Header Description */}
          <section className="p-2 mb-10 mt-[-20px] w-1/3 text-[#999999] leading-6 text-[14px] font-normal bg-cover">
            <div className="flex items-center space-x-2 h-[70px]">
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
          <div className="flex md:flex-row flex-col justify-around">
            {/* image sliders */}
            <div className="md:w-1/2">
              <div className="flex items-center justify-center">
                {/* <Carousel /> */}
                <div className="w-full">
                  <img src={item.img} alt="" className="w-full h-auto" />
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="md:w-1/2">
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
                <div className="md:flex flex-row items-center justify-between mt-8">
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
              <div className="mt-8">
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
                            totalPrice: item.price,
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

// export default Product;



// ------------------