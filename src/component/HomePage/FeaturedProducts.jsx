import React, { useEffect } from "react";
import { GoArrowRight } from "react-icons/go";
import { AllProductData } from "../../Data/ProductList";
import Card from "../Card/Card";
import { featProduct } from "../../features/productSlice"
import { useDispatch, useSelector } from "react-redux";

function FeaturedProducts() {
  // const filterProductFeat = AllProductData.filter(
  //   (product) => product.featuredProducts === true
  // );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(featProduct(true)); // Dispatch action with the payload to filter popular products
  }, [dispatch]);

  const products = useSelector((state) => state.products.feaProductFilt);
  // console.log(products);

  return (
    <>
      <section className="p-4 mt-10 mb-10 lg:container lg:mx-auto lg:px-28 md:container md:mx-auto md:px-10">
        <div className="flex justify-between">
          <p className="md:text-[32px] text-[25px] leading-8 font-medium ">
            Featured Products
          </p>
          <a
            className="flex gap-3 text-[16px] items-center text-primary hover:text-[#2C742F] duration-150"
            href=""
          >
            View all <GoArrowRight size={20} color="" className="" />
          </a>
        </div>

        <div className=" grid lg:grid-cols-10 lg:mt-8 duration-150 lg:p-0 p-3 md:grid-cols-4">
          {products.map((fProduct, index) => (
            // <div
            //   key={index}
            //   className="group/item group transition-all duration-300 grid justify-center relative col-span-2 border border-grey hover:border-[#2C742F]  hover:shadow-[rgba(11,_145,_11,_0.7)_0px_4px_6px_-1px]"
            // >
            //   <img src={fProduct.img} className="popularProductImage h-[250px]" />
            //   {fProduct.sale ? (
            //     <span className="absolute bg-[#EA4B48] text-white text-[14px] px-[8px] py-[8px] rounded-md top-[16px] left-[16px]">
            //       {fProduct.sale}
            //     </span>
            //   ) : (
            //     <></>
            //   )}
            //   <div className="ml-3 mr-3 mt-5 mb-3">
            //     <p className="text-left text-[14px] text-[#4D4D4D] group-hover:text-primary  leading-6 font-medium  ">
            //       {fProduct.title}
            //     </p>
            //     <div className="flex justify-between fProducts-center mb-1">
            //       <div className="flex gap-1">
            //         <p className="text-[16px] leading-[24px] ">
            //           {fProduct.price}
            //         </p>
            //         <p className="text-[16px] text-[#999999] leading-[24px] line-through">
            //           {fProduct.initialPrice}
            //         </p>
            //       </div>
            //     </div>
            //     <div className="">
            //       <Rating className="">
            //         <Rating.Star fill="orange" fontSize={20} />
            //         <Rating.Star fill="orange" fontSize={20} />
            //         <Rating.Star fill="orange" fontSize={20} />
            //         <Rating.Star fill="orange" fontSize={20} />
            //         <Rating.Star filled={false} fontSize={20} />
            //       </Rating>
            //     </div>
            //   </div>
            //   <div className="group/edit invisible group-hover/item:visible absolute right-5 top-5 ">
            //     <div className="group/icon border-2 border-[#F2F2F2] bg-white hover:bg-primary rounded-full p-2 mb-4 ">
            //       <GoHeart
            //         className="group-hover/icon:fill-white"
            //         size={25}
            //         color="black"
            //       />
            //     </div>
            //     <div className="group/icon border-2 border-[#F2F2F2] bg-white hover:bg-primary rounded-full p-2 ">
            //       <IoEyeOutline
            //         className="group-hover/icon:fill-white"
            //         size={25}
            //         color="black"
            //       />
            //     </div>
            //     <div className="group/icon visible bg-[#F2F2F2] hover:bg-primary rounded-full p-2 mt-36 ">
            //       <HiOutlineShoppingBag
            //         className="group-hover/icon:fill-white"
            //         size={25}
            //         color="black"
            //       />
            //     </div>
            //   </div>
            // </div>
            <div key={index} className="col-span-2">
              <Card
                id={fProduct.id}
                img={fProduct.img}
                title={fProduct.title}
                price={fProduct.price}
                initialPrice={fProduct.initialPrice}
                type={fProduct.type}
                star={fProduct.star}
                tag={fProduct.tag}
                sale={fProduct.sale}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default FeaturedProducts;
