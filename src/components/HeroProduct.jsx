import React from "react";
import { useNavigate } from "react-router-dom";

import { HiArrowNarrowRight } from "react-icons/hi";

const HeroProduct = ({ bigText }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className=" h-full z-49 pl-8 -mt-24 md:-mt-8 w-full">
        <div className="h-full flex justify-center items-center p-6">
          <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="md:-translate-y-32 md:translate-x-1/8 space-y-2.5 bg-black/60 p-3">
              <h1 className="text-xl lg:text-5xl font-bold font-serif text-gray-200/95 text-right">
                {bigText}
              </h1>
            </div>
            <br></br>

            <div></div>
          </div>
        </div>
      </div>

      <div className="hidden bg-black/55">
        <br></br>
        <div className="flex items-center justify-start ml-10">
          <button
            className="bg-yellow-500 rounded   py-3 px-9 
             text-center flex hover:bg-yellow-600/90 duration-300
              font-serif text-xl lg:pr-52 text-gray-200/95"
          >
            PERGOLE
          </button>
        </div>
        <br></br>
      </div>
    </>
  );
};

export default HeroProduct;
