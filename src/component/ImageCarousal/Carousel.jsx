import React, { useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { RxDotFilled } from "react-icons/rx";


import { data } from "../../Data/Data";

const Carousel = () => {
  
  const slides = data.slides

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="md:max-w-[1400px] h-[600px] w-full m-auto py-16 relative group">
      <div
        style={{ backgroundImage: `url(${data.slides[currentIndex].url})` }}
        className="w-[100%] h-full bg-center bg-cover duration-250 "
      ></div>

      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <FiChevronLeft onClick={prevSlide} size={20} />
      </div>

      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <FiChevronRight onClick={nextSlide} size={20} />
      </div>

      {/* dot */}
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer hover:text-primary "
          >
            <RxDotFilled className="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
