import * as React from "react";
import SliderComp from "./SliderComp";

function MinimumDistanceSlider({handleChange}) {
  return (
    <>
      <SliderComp 
      handleChange1={handleChange}
      value1={100}
      />
    </>
  );
}

export default MinimumDistanceSlider;
