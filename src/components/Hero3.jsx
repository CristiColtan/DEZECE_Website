import React from "react";
import { useNavigate } from "react-router-dom";

import { HiArrowNarrowRight } from "react-icons/hi";

const Hero3 = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="hidden md:block h-full z-49 pl-8 -mt-24 md:-mt-8 w-full">
        <div className="h-full flex justify-center items-center p-6">
          <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="-translate-y-96 translate-x-3/4 space-y-2.5 bg-black/60 p-3">
              <h1 className="text-3xl lg:text-5xl font-bold font-serif text-gray-200/95 text-right">
                DESCOPERĂ FRUMUSEȚEA PERGOLELOR
              </h1>
            </div>
            <br></br>
            <div className="flex">
              <button
                onClick={() => navigate("/produse/pergola-bioclimatica")}
                className="bg-yellow-500 py-2 px-3 flex items-center justify-center
                 hover:bg-yellow-600/90 duration-300 group relative text-right
            -translate-y-96 translate-x-[46.5rem] font-serif lg:text-3xl lg:pr-52 text-gray-200/95"
              >
                <span className="group-hover:text-transparent ">PERGOLE</span>
                <span
                  className="absolute left-1/2 top-1/2 transform 
                              -translate-y-1/2 -translate-x-20 opacity-0 
                              group-hover:translate-x-0 text-5xl
                group-hover:opacity-100 transition-all duration-300"
                >
                  <HiArrowNarrowRight />
                </span>
              </button>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="md:hidden bg-black/55">
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

export default Hero3;
