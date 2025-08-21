import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { GrSubtract } from "react-icons/gr";
import { AllProductData } from "../../Data/ProductList";

function valuetext(value) {
  return `${value}`;
}

// const products = AllProductData;

const minDistance = 10;

export default function SliderComp() {
  const [value1, setValue1] = React.useState([10, 59]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  //   const filteredProducts = products.filter(
  //     (product) => product.price >= value1[0] && product.price <= value1[1]
  //   );

  return (
    <>
      <Box sx={{ width: 300 }}>
        <Slider
          getAriaLabel={() => "Minimum distance"}
          value={value1}
          onChange={handleChange1}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          disableSwap
          color=""
        />
      </Box>
      <div>
        <p className="flex items-center text-[14px] leading-[21px] font-normal gap-2 text-[#808080] ">
          Price:{" "}
          <span className="flex items-center  text-[14px] leading-[21px] font-medium text-black">
            {value1[0]}
            <GrSubtract />
            {value1[1]}
          </span>
        </p>
      </div>
    </>
  );
}
