// import React from "react";
// import fashionWomen from "../../assets/assets/womanBlackbg.png";
// import poder from "../../assets/assets/poder.png";
// import PC from "../../assets/assets/psGaming.png";
// import perfume from "../../assets/assets/perfume.png";

// const index = () => {
//   return (
//     <div className="flex mx-44 overflow-hidden">
//       <div className="first flex w-50vw">
//         <img className="w-[100%] " src={fashionWomen} alt="" />
//       </div>
//       <div className="second flex flex-col w-50vw">
//         <div className="top w-50vw">
//           <img src={poder} 
//           className="w-[100%]" alt="" />
//         </div>
//         <div className="bottom flex">
//           <div className="left">
//             <img src={PC} alt="" />
//           </div>
//           <div className="right">
//             <img src={perfume} alt="" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default index;
import React from "react";
import ps5Image from "../../assets/assets/psGaming.png"; // Replace with actual image path
import fashionWomen from "../../assets/assets/womanBlackbg.png"; // Replace with actual image path
import speakers from "../../assets/assets/poder.png"; // Replace with actual image path
import perfume from "../../assets/assets/perfume.png"; // Replace with actual image path

const NewArrival = () => {
  return (
    <div className="p-6 lg:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Large Left Item */}
        <div className="relative group">
          <img
            src={ps5Image}
            alt="PlayStation 5"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
            <h3 className="text-white text-xl font-bold">PlayStation 5</h3>
            <p className="text-gray-300">
              Black and White version of the PS5 coming out on sale.
            </p>
            <button className="mt-4 bg-white text-black py-2 px-4 rounded-lg">
              Shop Now
            </button>
          </div>
        </div>

        {/* Right Column Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Women's Collections */}
          <div className="relative group">
            <img
              src={fashionWomen}
              alt="Women's Collections"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-white text-xl font-bold">
                Women's Collections
              </h3>
              <p className="text-gray-300">
                Featured women's collections that give you another vibe.
              </p>
              <button className="mt-4 bg-white text-black py-2 px-4 rounded-lg">
                Shop Now
              </button>
            </div>
          </div>

          {/* Speakers */}
          <div className="relative group">
            <img
              src={speakers}
              alt="Speakers"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-white text-xl font-bold">Speakers</h3>
              <p className="text-gray-300">Amazon wireless speakers.</p>
              <button className="mt-4 bg-white text-black py-2 px-4 rounded-lg">
                Shop Now
              </button>
            </div>
          </div>

          {/* Perfume */}
          <div className="relative group">
            <img
              src={perfume}
              alt="Perfume"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-white text-xl font-bold">Perfume</h3>
              <p className="text-gray-300">GUCCI INTENSE OUD EDP.</p>
              <button className="mt-4 bg-white text-black py-2 px-4 rounded-lg">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
