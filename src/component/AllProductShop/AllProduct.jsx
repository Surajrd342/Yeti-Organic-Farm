import React from "react";
import DropMenu from "../DropMenu/DropMenu";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function AllProduct() {
  const products = useSelector((state) => state.products.filteredProducts);
  // console.log(products);

  const { type } = useParams();
  // const params = useParams();
  // console.log("params:", params);

  return (
    <>
      <div className="md:flex items-center justify-between ">
        <div className="md:flex items-center md:space-x-2">
          <p className="md:text-[14px] leading-[21px] text-[#808080] font-normal mt-5 md:mt-0 mb-2">
            Sort by:
          </p>
          <DropMenu  />
        </div>
        <div>
          <p className="text-[16px] leading-[19.2px] text-[black] font-semibold mt-5 md:mt-0 mb-3 md:mb-0">
            {products.length}{" "}
            <span className="text-[16px] leading-[24px] text-[#808080] font-normal">
              Results Found
            </span>
          </p>
        </div>
      </div>

      <div className="md:mt-6">
        <div className="md:grid grid-cols-3 gap-4 ">
          {/* Filter Redux */}
          {products
            // .filter(
            //   (product) => product.type === type
            // )
            .map((product, index) => {
              return (
                <div key={index}>
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
              );
            })}
        </div>
      </div>
    </>
  );
}

export default AllProduct;
