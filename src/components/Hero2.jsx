import React from "react";
import { useNavigate } from "react-router-dom";

import { HiArrowNarrowRight } from "react-icons/hi";

const Hero2 = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="hidden md:block h-full relative z-49 pl-8 pt-6 -mt-24 md:-mt-8 xl:ml-16">
        <div className="h-full flex justify-center items-center p-4">
          <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="translate-y-40 space-y-2.5 bg-black/60 p-3">
              <h1 className="text-3xl lg:text-5xl font-bold font-serif text-gray-200/95">
                ÎNCHIDERI DIN STICLĂ
              </h1>
              <p className="font-serif lg:text-3xl lg:pr-52 text-gray-200/95">
                PERGOLE
              </p>
            </div>
            <br></br>
            <div className="flex">
              <button
                onClick={() => navigate("/produse")}
                className="bg-yellow-500 text-center py-2 px-3 flex items-center justify-center
                 hover:bg-yellow-600/90 duration-300 group relative
            translate-y-48 font-serif lg:text-3xl lg:pr-52 text-gray-200/95"
              >
                <span className="group-hover:text-transparent">PRODUSE</span>
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
      <div className="md:hidden bg-black/50 -mb-6">
        <br></br>
        <div className="flex items-center justify-start ml-10">
          <button
            className="bg-yellow-500 rounded   py-3 px-9 
            text-center flex hover:bg-yellow-600/90 duration-300
             font-serif text-xl lg:pr-52 text-gray-200/95"
          >
            PRODUSE
          </button>
        </div>
        <br></br>
      </div>
    </>
  );
};

export default Hero2;
