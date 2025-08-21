import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { catFilter } from "../../features/productSlice";

function RadioB() {
  const radioCat = ["FreshFruit", "vegetables", "meat"];
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState("");
  const handleRadioChange = (item) => {
    setSelectedCategory(item);
    dispatch(catFilter(item));
  };

  return (
    <>
      {radioCat.map((item, index) => (
        <label key={index} className="flex items-center gap-3 mb-2">
          <input
            name="category"
            type="radio"
            value={item}
            checked={selectedCategory === item}
            onChange={() => handleRadioChange(item)}
          />
          <span className="">{item}</span>
        </label>
      ))}
    </>
  );
}

export default RadioB;
