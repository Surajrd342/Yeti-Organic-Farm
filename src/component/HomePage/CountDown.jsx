import React, { useEffect, useState } from "react";

function CountDown({ className, color }) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);

  const deadline = "April, 25, 2024";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMins(Math.floor((time / 1000 / 60) & 60));
    setSecs(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className={`flex md:flex-wrap p-3 text-center space-x-6 justify-center lg:text-[24px] md:text-[16px] text-[24px] leading-9 mt-3 ${className}`}
      >
        <div className="">
          <p>{days < 10 ? "0" + days : days}</p>
          <p className="text-[12px] leading-3">DAYS</p>
        </div>
        <div className="lg:items-start">
          <p>:</p>
        </div>
        <div>
          <p>{hours < 10 ? "0" + hours : hours}</p>
          <p className="text-[12px] leading-3 ">HOURS</p>
        </div>
        <div className="lg:items-start">
          <p>:</p>
        </div>
        <div>
          <p>{mins < 10 ? "0" + mins : mins}</p>
          <p className="text-[12px] leading-3 ">MINS</p>
        </div>
        <div className="lg:items-start">
          <p>:</p>
        </div>
        <div>
          <p>{secs < 10 ? "0" + secs : secs}</p>
          <p className="text-[12px] leading-3 ">SECS</p>
        </div>
      </div>
    </>
  );
}

export default CountDown;
