import React from "react";
import FiveStar88 from "./../../assets/assets/FiveStar88.png";

const Cards = ({ Gamepad }) => {
  return (
    <div className="mb-6 flex flex-col gap-5 justify-center items-center mx-4">
      <div className="flex flex-wrap justify-center gap-4">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="h-96 w-72 sm:w-68 flex flex-col align-top gap-2"
          >
            <div className="image flex align-middle h-[60%] justify-center items-center bg-zinc-300 bg-cover">
              <img className="bg-cover w-56" src={Gamepad} alt="Gamepad" />
            </div>
            <div className="title text-2xl font-semibold">
              HAVIT HV-G92 
            </div>
            <div className="price text-red-500 text-lg">
              $120{" "}
              <span className="text-zinc-500 line-through">$160</span>
            </div>
            <img src={FiveStar88} className="w-44" alt="Five Star Rating" />
          </div>
        ))}
      </div>
      <div className="button">
        <button className="bg-red-500 font-semibold text-zinc-50 rounded-lg p-3 text-lg">
          View all Products
        </button>
      </div>
    </div>
  );
};

export default Cards;
