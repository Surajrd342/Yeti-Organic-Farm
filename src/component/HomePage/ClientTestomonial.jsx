import {React, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import column from "../../assets/column.png";
import { Rating } from "flowbite-react";

import { data } from "../../Data/Data";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <IoIosArrowRoundForward
        style={{ ...style, color: "red", fontSize: "30px" }}
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <IoIosArrowRoundBack
        style={{ ...style, color: "red", fontSize: "30px" }}
      />
    </div>
  );
}

const ClientTestomonial = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <IoIosArrowRoundBack />,
    nextArrow: <IoIosArrowRoundForward />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [slider, setSlider] = useState(null);

  return (
    <section className="p-4 mt-10 mb-10 bg-[#F2F2F2] lg:container lg:mx-auto lg:px-28 md:container md:mx-auto md:px-10">
      <div className="mt-3 flex items-center justify-between">
        <div className="">
          <p className=" text-black md:text-[32px] leading-[38.4px] font-medium">
            Client Testimonials
          </p>
        </div>
        <div className="slider-buttons flex gap-2 ">
          {/* Slider buttons */}
          <button onClick={() => slider && slider.slickPrev()} class>
            <div className="h-[40px] w-[40px] rounded-full flex items-center justify-center  bg-white hover:bg-primary hover:text-white">
              <IoIosArrowRoundBack size={30} />
            </div>
          </button>{" "}
          {/* Added check for slider reference */}
          <button onClick={() => slider && slider.slickNext()} class>
            <div className="h-[40px] w-[40px] flex rounded-full items-center justify-center  bg-white hover:bg-primary hover:text-white">
              <IoIosArrowRoundForward size={30} />
            </div>
          </button>{" "}
          {/* Added check for slider reference */}
        </div>
      </div>

      <div className="w-full h-fit md:p-0">
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {data.clientTest.map((item, index) => (
            <div
              id="slider-boxes"
              key={index}
              className="bg-white p-4 rounded-xl flex flex-col mt-4 md:mt-0"
            >
              <div className="mb-5">
                <img src={column} alt="" className="w-[32px] h-[26px]" />
              </div>
              <div className="mb-5">
                <p className="text-[#4D4D4D] text-[14px] leading-[21px]">
                  {item.comment}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <img src={item.img} alt="" className="w-[52px]" />
                  <div>
                    <h1 className="text-[#4D4D4D] text-[14px] leading-[21px] font-medium">
                      {item.name}
                    </h1>
                    <p className="text-[#999999] text-[14px] leading-[21px]">
                      {item.type}
                    </p>
                  </div>
                </div>
                <div className="">
                  <Rating className="">
                    <Rating.Star fill="orange" fontSize={20} />
                    <Rating.Star fill="orange" fontSize={20} />
                    <Rating.Star fill="orange" fontSize={20} />
                    <Rating.Star fill="orange" fontSize={20} />
                    <Rating.Star filled={false} fontSize={20} />
                  </Rating>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ClientTestomonial;
