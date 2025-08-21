import React from "react";
import { Tag } from "primereact/tag";


const data = [
    {
        tagName: `Healthy`
    },
    {
        tagName: `Low fat`
    },
    {
        tagName: `Vegetarian`
    },
    {
        tagName: `Kid foods`
    },
    {
        tagName: `Vitamins`
    },
    {
        tagName: `Bread`
    },
    {
        tagName: `Meat`
    },
    {
        tagName: `Snacks`
    },
    {
        tagName: `Tiffin`
    },
    {
        tagName: `Launch`
    },
    {
        tagName: `Dinner`
    },
    {
        tagName: `Breackfast`
    },
    {
        tagName: `Fruit`
    },
]

function Tags() {
  return (
    <>
      <div className="card flex flex-wrap justify-content-center gap-2 text-[14px] leading-[21px] mt-4">
        {
            data.map((item, index) => (
                <Tag key={index}
                value={item.tagName}
                className="text-[#1A1A1A] bg-[#F2F2F2] rounded-full text-center px-[16px] py-[6px] font-normal hover:bg-primary hover:text-white"
              ></Tag>
            ))
        }
      </div>
    </>
  );
}

export default Tags;
