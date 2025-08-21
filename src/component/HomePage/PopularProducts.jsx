import React, { useEffect } from "react";
import { Rating } from "flowbite-react";
import { GoHeart } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GoArrowRight } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { popProduct } from "../../features/productSlice";
import Card from "../Card/Card";
import { AllProductData } from "../../Data/Data";

function PopularProducts({ star }) {
  // const popProduct = AllProductData.filter(
  //   (hProduct) => hProduct.popularProduct === true

  // );
  const dispatch = useDispatch();

  // Assuming you want to fetch popular products on component mount
  useEffect(() => {
    dispatch(popProduct(true)); // Dispatch action with the payload to filter popular products
  }, [dispatch]);

  const products = useSelector((state) => state.products.popProductFilt);
  // console.log(products);

  return (
    <>
      <section className="p-4 mt-10 mb-10 lg:container lg:mx-auto lg:px-28 md:container md:mx-auto md:px-10">
        <div className="flex justify-between">
          <p className="md:text-[32px] text-[25px] leading-8 font-medium ">
            Popular Products
          </p>
          <a
            className="flex gap-3 text-[16px] items-center text-primary hover:text-[#2C742F] duration-150"
            href=""
          >
            View all <GoArrowRight size={20} color="primary" className="" />
          </a>
        </div>

        <div className=" grid lg:grid-cols-10 md:grid-cols-3 mt-8 duration-150 md:p-0 p-3">
          {products.map((product, index) => (
            <div key={index} className="lg:col-span-2">
              <Card
                id={product.id}
                img={product.img}
                title={product.title}
                price={product.price}
                initialPrice={product.initialPrice}
                type={product.type}
                star={product.star}
                tag={product.tag}
                sale={product.sale}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default PopularProducts;
