import React from "react";
import { Rating } from "@material-tailwind/react";
import { ColorFill } from "react-ionicons";

function RatingStar() {
  return (
      <div className="">
        <Rating className="">
          <Rating.Star fill="orange" />
          <Rating.Star fill="orange" />
          <Rating.Star fill="orange" />
          <Rating.Star fill="orange" />
          <Rating.Star filled={false} />
        </Rating>
      </div>
  );
}

export default RatingStar;
