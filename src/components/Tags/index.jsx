import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";


const index = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 justify-center justify-items-center font-semibold">
      <div className="a flex flex-col gap-2 justify-center justify-items-center items-center">
        <div className="b">
          <TbTruckDelivery />
        </div>
        <div className="b">Free and fast Devlivery</div>
        <div className="b ">Free Delivry for all orders over $140</div>
      </div>
      <div className="a flex flex-col gap-2 justify-center justify-items-center items-center">
        <div className="b">
          <BiSupport />
        </div>
        <div className="b">24/7 customer service</div>
        <div className="b">Ferindly 24/7 customer support</div>
      </div>
      <div className="a flex flex-col gap-2 justify-center justify-items-center items-center">
        <div className="b">
             <i class="fa-solid fa-shield-heart"></i>
        </div>
        <div className="b">Money Back Guarante</div>
        <div className="b">We return money within 30 days</div>
      </div>
    </div>
  );
};

export default index;
