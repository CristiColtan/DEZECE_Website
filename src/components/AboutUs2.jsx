import React from "react";

import WG2 from "../assets/WG-2.jpg";

import { FaTools } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const AboutUs2 = () => {
  return (
    <div className="h-full bg-gradient-to-r from-slate-400/20 to-[#FFFBEC]">
      <div className="md:mx-20 pt-6 mx-10">
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-9">
          <div className="py-2">
            <img
              src={WG2}
              alt="Imagine1 AboutUs"
              className="md:translate-x-10  md:block md:items-start flex  justify-center"
            ></img>
            <div className="w-full bg-gradient-to-r from-yellow-500 to-slate-400  h-3 mt-3 hidden md:block"></div>
          </div>

          <div className="xl:-translate-x-20">
            <div className="">
              <div className="grid grid-rows-2 items-center justify-center -space-y-4 sm:space-y-0 xl:-space-y-4">
                <p className="font-serif text-2xl lg:text-4xl md:pl-12 flex justify-start items-center">
                  Servicii de înaltă calitate
                </p>
                <span className="text-justify font-thin md:pl-12 flex justify-center items-center">
                  DEZECE are o gamă de produse care îndeplinesc cele mai
                  exigente cerințe în ceea ce privește calitatea,
                  funcționalitatea și designul și pot fi, de asemenea, adaptate
                  nevoilor individuale. Motivația de a oferi clienților
                  performanță și fiabilitate maximă este forța noastră motrice.
                </span>
              </div>
            </div>
            <br></br>
            <div className="md:translate-x-10">
              <div className="pb-2 grid grid-cols-1 xl:grid-cols-2 gap-4 items-center justify-center">
                <div className="group relative bg-white justify-center items-center flex flex-col py-8 gap-2 overflow-hidden">
                  <div
                    className="absolute inset-0 border-2 border-yellow-500 scale-x-0 group-hover:scale-x-100 
                  origin-left transition-transform duration-500"
                  ></div>
                  <p className="font-serif text-4xl md:text-5xl pb-5 text-yellow-500 group-hover:-translate-y-3 duration-150">
                    {<FaTools />}
                  </p>
                  <p className="font-serif md:text-xl">Montaj profesional</p>
                  <p className="font-thin px-4 flex justify-center items-center text-justify">
                    Echipa noastră realizează montaj profesional, asigurând o
                    instalare precisă, durabilă și estetică
                  </p>
                </div>
                <div className="group relative bg-white justify-center items-center flex flex-col py-8 gap-2 overflow-hidden">
                  <div
                    className="absolute inset-0 border-2 border-yellow-500 scale-x-0 group-hover:scale-x-100 
                  origin-left transition-transform duration-500"
                  ></div>
                  <p className="font-serif text-4xl md:text-5xl pb-5 text-yellow-500 group-hover:-translate-y-3 duration-150">
                    {<FaMedal />}
                  </p>
                  <p className="font-serif md:text-xl">Produse calitative</p>
                  <p className="font-thin px-4 flex justify-center items-center text-justify">
                    Produsele noastre sunt fabricate din materiale de înaltă
                    calitate, asigurând durabilitate, rezistență și un design
                    rafinat.
                  </p>
                </div>
                <div className="group relative bg-white justify-center items-center flex flex-col py-8 gap-2 overflow-hidden">
                  <div
                    className="absolute inset-0 border-2 border-yellow-500 scale-x-0 group-hover:scale-x-100 
                  origin-left transition-transform duration-500"
                  ></div>
                  <p className="font-serif text-4xl md:text-5xl pb-5 text-yellow-500 group-hover:-translate-y-3 duration-150">
                    {<FaShieldAlt />}
                  </p>
                  <p className="font-serif md:text-xl">
                    Garanție de producător
                  </p>
                  <p className="font-thin px-4 flex justify-center items-center text-justify">
                    Echipa noastră realizează montaj profesional, asigurând o
                    instalare precisă, durabilă și estetică
                  </p>
                </div>
                <div className="group relative bg-white justify-center items-center flex flex-col py-8 gap-2 overflow-hidden">
                  <div
                    className="absolute inset-0 border-2 border-yellow-500 scale-x-0 group-hover:scale-x-100 
                  origin-left transition-transform duration-500"
                  ></div>
                  <p className="font-serif text-4xl md:text-5xl pb-5 text-yellow-500 group-hover:-translate-y-3 duration-150">
                    {<IoCall />}
                  </p>
                  <p className="font-serif md:text-xl">+40 731 321 449</p>
                  <p className="font-thin px-4 flex justify-center items-center text-justify">
                    Echipa noastră oferă servicii complete pentru transformarea
                    spațiilor exterioare prin închideri din sticlă și pergole.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs2;
