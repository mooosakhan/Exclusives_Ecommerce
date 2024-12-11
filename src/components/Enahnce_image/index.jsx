import React from "react";
import radio from "../../assets/assets/radio.png";
import time from "../../assets/assets/time.png";

const Index = () => {
  return (
    <div className="flex flex-col lg:flex-row flex-initial h-auto lg:h-[55vh] bg-black mx-6 lg:mx-20 my-12 lg:my-24 rounded-md justify-center lg:justify-around items-center gap-12 lg:gap-20 p-6">
      <div className="text flex flex-col gap-6 text-center lg:text-left">
        <p className="text-green-500 text-xl lg:text-2xl">Categories</p>
        <h1 className="text-3xl lg:text-5xl text-zinc-200 font-semibold">
          Enhance Your Music Experience
        </h1>
        <div className="logos flex justify-center lg:justify-start">
          <img src={time} className="w-40 lg:w-64" alt="Timer" />
        </div>
        <button className="text-zinc-100 font-semibold bg-green-500 w-36 py-3 rounded-lg text-lg self-center lg:self-start">
          Buy now
        </button>
      </div>

      <div className="flex justify-center">
        <img src={radio} className="w-72 lg:w-[32rem]" alt="Radio" />
      </div>
    </div>
  );
};

export default Index;
