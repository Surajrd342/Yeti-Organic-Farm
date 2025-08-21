import React from "react";
import { Rating } from "flowbite-react";
import { GoHeart } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { singleProduct } from "../../features/productSlice";
import { Link } from "react-router-dom";

const Card = ({
  id,
  img,
  title,
  price,
  initialPrice,
  type,
  star,
  tag,
  sale,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <Link
          to={`/singleproduct/` + id}
          onClick={() => dispatch(singleProduct(id))}
          className="group group/item transition-all  duration-300 grid justify-center relative col-span-2 
      border border-grey hover:border-[#2C742F]  hover:shadow-[rgba(11,_145,_11,_0.7)_0px_4px_6px_-1px]"
        >
          <img src={img} className="popularProductImage h-[250px]" />
          {sale ? (
            <span className="absolute bg-[#EA4B48] text-white text-[14px] px-[8px] py-[8px] rounded-md top-[16px] left-[16px]">
              {sale}
            </span>
          ) : (
            <></>
          )}
          <div className="ml-3 mr-3 mt-5 mb-3">
            <p className="text-left text-[14px] text-[#4D4D4D] group-hover:text-primary  leading-6 font-medium  ">
              {title}
            </p>
            <div className="flex justify-between items-center mb-1">
              <div className="flex gap-1">
                <p className="text-[16px]  leading-[24px] ">${price}</p>
                <p className="text-[16px] leading-[24px] line-through text-[#999999]">
                  {initialPrice}
                </p>
              </div>
            </div>
            <div className="">
              <span className="text-[#ffa500] text-[24px]">
                {"★".repeat(Math.round(star))}
              </span>
              <span className="text-gray-400  text-[24px]">
                {"★".repeat(5 - Math.round(star))}
              </span>
            </div>
          </div>
          <div className="group/edit invisible group-hover/item:visible absolute right-5 top-5 ">
            <div className="group/icon border-2 border-[#F2F2F2] bg-white hover:bg-primary rounded-full p-2 mb-4 ">
              <GoHeart
                className="group-hover/icon:fill-white"
                size={25}
                color="black"
              />
            </div>
            <div className="group/icon border-2 border-[#F2F2F2] bg-white hover:bg-primary rounded-full p-2 ">
              <IoEyeOutline
                className="group-hover/icon:fill-white"
                size={25}
                color="black"
              />
            </div>
            <div className="bag visible bg-[#F2F2F2] hover:bg-primary rounded-full p-2 mt-36 ">
              {/* <button
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: item.id,
                      img: item.img,
                      title: item.title,
                      price: item.price,
                      amount: 1,
                      totalPrice: item.price,
                      star: item.star,
                    })
                  )
                }
              > */}
              <HiOutlineShoppingBag
                className="group-hover/bag:text-white "
                size={25}
                color="black"
              />
              {/* </button> */}
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Card;
