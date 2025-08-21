import { MdOutlineCheck } from "react-icons/md";
import pricetag from "../assets/price-tag 1.png";
import leaf from "../assets/Group.png";
import SubscriptionNews from "../component/HomePage/SubscriptionNews";
import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import {data} from '../Data/Data'
import RelatedProducts from "../component/RelatedProducts/RelatedProducts";
import Product from "../component/SinglePageProduct/Product";


const SingleProduct = () => {

  return (
    <>
      <div>
        {/* Header Description */}
        {/* <section className="p-1 md:container md:mx-auto md:px-28 text-[#999999] leading-6 text-[14px] font-normal md:bg-[url('./assets/bg-banner.jfif')] bg-cover ">
          <div className="flex items-center space-x-2 h-[70px] ">
            <div className="hover:text-[#00B207]">
              <GoHome size={20} />
            </div>
            <IoIosArrowForward />
            <p className="">Category</p>
            <IoIosArrowForward />
            <p className="">Vegetables</p>
            <IoIosArrowForward />
            <p className="text-[#00B207]">Chinese Cabbage</p>
          </div>
        </section> */}

        {/* Product details */}
        <Product/>

        {/* Description and videos */}
        <section className="p-4 lg:container lg:mx-auto lg:px-28 md:container md:mx-auto md:px-10">
          {data.descData.map((item, index) => (
            <div className="" key={index}>
              <p className="text-center text-[25px] leading-[24px] font-semibold">
                Description
              </p>
              <div className="lg:grid grid-cols-8 grid-flow-row gap-32 mt-5">
                <div className="col-span-4">
                  <p className="mb-2 text-[#808080] text-[14px] leading-[21px]">
                    {item.descone}
                  </p>
                  <p className="text-[#808080] text-[14px] leading-[21px]">
                    {item.desctwo}
                  </p>
                  <ul className="text-[#808080] text-[14px] leading-[21px] space-y-2 mt-2">
                    <li className="flex gap-2">
                      <MdOutlineCheck
                        color="white"
                        size={20}
                        className="bg-primary rounded-full p-1"
                      />
                      {item.lione}
                    </li>
                    <li className="flex gap-2">
                      <MdOutlineCheck
                        color="white"
                        size={20}
                        className="bg-primary rounded-full p-1"
                      />
                      {item.litwo}
                    </li>
                    <li className="flex gap-2">
                      <MdOutlineCheck
                        color="white"
                        size={20}
                        className="bg-primary rounded-full p-1"
                      />
                      {item.lithree}
                    </li>
                    <li className="flex gap-2">
                      <MdOutlineCheck
                        color="white"
                        size={20}
                        className="bg-primary rounded-full p-1"
                      />
                      {item.lifour}
                    </li>
                  </ul>
                  <p className="text-[#808080] text-[14px] leading-[21px] mt-2">
                    {item.pend}
                  </p>
                </div>

                <div className="col-span-4 mt-16">
                  <div className="flex items-center justify-center">
                    <div class="aspect-video">
                      <iframe
                        width=""
                        src={item.youLink}
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>

                  <div className="flex items-center space-x-10 border-solid border-2 border-grey rounded-md p-5 justify-center mt-3">
                    <div className="flex items-center gap-2">
                      <img src={pricetag} alt="" className="w-[25px]" />
                      <div className="">
                        <p className="text-[#1A1A1A] text-[14px] leading-[21px] font-medium">
                          {item.discountRate} Discount
                        </p>
                        <p className="text-[#808080] text-[13px] leading-[19.5px]">
                          Save your {item.discountRate} money with us
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src={leaf} alt="" className="w-[25px]" />
                      <div className="">
                        <p className="text-[#1A1A1A] text-[14px] leading-[21px] font-medium">
                          100% Organic
                        </p>
                        <p className="text-[#808080] text-[13px] leading-[19.5px]">
                          100% Organic Vegetables
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Related Products */}
        <RelatedProducts/>

        {/* Subscribe and Newsletter */}
        <SubscriptionNews />
      </div>
    </>
  );
};


export default SingleProduct;
