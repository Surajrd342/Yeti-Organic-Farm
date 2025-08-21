import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { Rating } from "flowbite-react";

export default function RatingCheck() {
  const [checkedIndices, setCheckedIndices] = useState([0]); // Initially set to contain the index of the first checkbox

  const handleCheckboxChange = (index) => {
    if (checkedIndices.includes(index)) {
      // If the index is already in the array, remove it
      setCheckedIndices(checkedIndices.filter((i) => i !== index));
    } else {
      // If the index is not in the array, add it
      setCheckedIndices([...checkedIndices, index]);
    }
  };

  const filledColor = "orange";
  const emptyColor = "#CCCCCC";
  const checkboxColor = "#00B207";

  return (
    <>
      {[5, 4, 3, 2, 1].map((value, index) => (
        <div key={value} className="flex items-center gap-1">
          <Checkbox
            checked={checkedIndices.includes(index)}
            onChange={() => handleCheckboxChange(index)}
            inputProps={{ "aria-label": `checkbox-${value}` }}
            color="default"
            disableRipple //focus ripple diable
            sx={{ "& .MuiSvgIcon-root": { color: checkboxColor } }}
          />
          <Rating className="">
            {[...Array(5)].map((_, starIndex) => (
              <Rating.Star
                key={starIndex}
                fill={starIndex < value ? filledColor : emptyColor}
                fontSize={20}
              />
            ))}
          </Rating>
          <p className="text-[#1A1A1A] text-[14px] font-normal leading-[21px]">
            {value === 5 ? `${value}.0` : `${value}.0 & up`}
          </p>
        </div>
      ))}
    </>
  );
}
