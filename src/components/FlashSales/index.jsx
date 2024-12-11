import React from "react";

const index = ({main,text,type,type2}) => {
   console.log(main)
  return (
    <div className="flex flex-col mx-[9vw] gap-4 my-24">
      <div className="todays  flex items-center gap-4">
        <div className="bg-red-500 h-12 w-6 rounded-md"></div>
        <div className="text-red-500 font-bold text-2xl">{main}</div>
      </div>
      <div className="flashSales flex justify-between items-center">
        <div className="flashTime flex justify-around gap-24 items-end">
        <div className="text-2xl lg:text-4xl font-semibold">{text}</div>
        <div className="time flex gap-4  justify-center items-center " style={{visibility:type}} >
          <span className="flex flex-col">
            <span className="text-md font-semibold">Days</span>
            <span className="text-4xl font-bold">03</span>
          </span>
          <span className="text-4xl flex font-bold text-red-500 items-start">:</span>
          <span className="flex flex-col">
            <span className="text-md font-semibold">Hours</span>
            <span className="text-4xl font-bold">23</span>
          </span>
          <span className="text-4xl font-bold text-red-500">:</span>
          <span className="flex flex-col">
            <span className="text-md font-semibold">Minutes</span>
            <span className="text-4xl font-bold">19</span>
          </span>
          <span className="text-4xl font-bold text-red-500">:</span>
          <span className="flex flex-col">
            <span className="text-md font-semibold">Seconds</span>
            <span className="text-4xl font-bold">58</span>
          </span>
         
        </div>
        </div>
        <div style={{visibility:type2}} className="arrows flex gap-2">
          <div className="left bg-zinc-200 h-14 w-14 rounded-full flex items-center justify-center text-2xl">
            <i class="fa-solid fa-arrow-left"></i>
          </div>
          <div className="right bg-zinc-200 h-14 w-14 rounded-full flex items-center justify-center text-2xl"><i class="fa-solid fa-arrow-right"></i></div>
        </div>
      </div>
    </div>
  );
};

export default index;
