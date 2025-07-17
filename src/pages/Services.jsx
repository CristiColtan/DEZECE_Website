import React from "react";
import { useNavigate } from "react-router-dom";

import Footer2 from "../components/Footer2.jsx";
import Hero3 from "../components/Hero3.jsx";

import I1 from "../assets/Imagine1-edit.jpg";
import I2 from "../assets/Imagine4-edit.jpg";
import I8 from "../assets/pergola2.jpg";

import "../styles/Navbar.css";
import "../styles/Servicess2.css";

import { FaHandsHelping } from "react-icons/fa";
import { SiStylelint } from "react-icons/si";
import { FaToolbox } from "react-icons/fa";
import { SiTrustpilot } from "react-icons/si";

import PersonalizedSol from "../components/PersonalizedSol.jsx";

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-20 ">
      <div className="h-full bg-gradient-to-r from-white to-[#FFFBEC] pb-6">
        <div className="md:mx-20 pt-6 mx-10">
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-9">
            <div className="py-2 flex items-center justify-center">
              <img
                src={I1}
                alt="Imagine1 Services"
                className=" max-w-[450px] overflow-hidden"
              ></img>
            </div>

            <div className="">
              <div className="">
                <div className="grid grid-rows-3 items-center justify-center -space-y-12 sm:space-y-0 xl:-space-y-2">
                  <p className="font-serif text-2xl lg:text-4xl md:pl-12 flex justify-start items-center">
                    Rafinament, eleganță și confort
                  </p>

                  <span className="text-justify font-thin md:pl-12 flex justify-center items-center">
                    Produsele și serviciile noastre îmbină rafinamentul,
                    eleganța și confortul, transformând orice spațiu într-un loc
                    plin de stil și funcționalitate. Fiecare detaliu este atent
                    conceput pentru a exprima bun gust și sofisticare, creând o
                    atmosferă primitoare și relaxantă. Materialele premium,
                    finisajele impecabile și designul modern sunt alese special
                    pentru a vă oferi o experiență estetică desăvârșită și un
                    confort de lungă durată.
                  </span>
                  <div className="md:pl-12">
                    <button
                      onClick={() => navigate("/produse")}
                      className=" text-white bg-black py-2 px-4 rounded
                  
              font-sans font-medium hover:bg-black/60 transition duration-200"
                    >
                      Vezi produse!
                    </button>
                  </div>
                </div>
              </div>
              <br></br>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-gradient-to-r from-[#FFFBEC] to-[#f3f3f3]">
        <div className="md:mx-20 pt-6 mx-10">
          <p
            className="font-sans text-xl lg:text-2xl font-semibold
              border-l-[0.5rem] border-yellow-500 pl-2 mb-10"
          >
            {""}Ce oferim?
          </p>
          <div className="grid md:grid-cols-3 gap-6 ">
            <div className="group relative rounded shadow-xl bg-white from-[#FFFBEC] to-[#f3f3f3] justify-center items-center flex flex-col py-8 gap-2 overflow-hidden">
              <div
                className="absolute inset-0 border-2 border-yellow-500 scale-x-0 group-hover:scale-x-100 
          origin-left transition-transform duration-500"
              ></div>

              {/* Container pentru flip */}
              <div className="relative flip-container">
                {/* Fața iconiței */}
                <div className="flip-front">
                  <p className="font-serif text-4xl md:text-6xl pb-5 rounded-xl text-yellow-500 group-hover:-translate-y-3 duration-150">
                    <FaHandsHelping />
                  </p>
                </div>

                {/* Spatele iconiței */}
                <div className="flip-back">
                  <p className="font-serif text-4xl md:text-6xl pb-5 rounded-xl text-[#ac6a01] group-hover:-translate-y-3 duration-150">
                    <FaHandsHelping />
                  </p>
                </div>
              </div>

              <p className="font-serif text-xl text-[#964b01]">Consultanță</p>
              <p className="font-thin px-4 flex justify-center items-center text-justify text-[#964b01]">
                Oferim servicii de consultanță, menite să vă ajute să alegeți
                soluțiile ideale pentru nevoile și preferințele dumneavoastră.
              </p>
            </div>

            <div className="group relative rounded shadow-xl bg-white from-[#FFFBEC] to-[#f3f3f3] justify-center items-center flex flex-col py-8 gap-2 overflow-hidden">
              <div
                className="absolute inset-0 border-2 border-yellow-500 scale-x-0 group-hover:scale-x-100 
          origin-left transition-transform duration-500"
              ></div>

              {/* Container pentru flip */}
              <div className="relative flip-container">
                {/* Fața iconiței */}
                <div className="flip-front">
                  <p className="font-serif text-4xl md:text-6xl pb-5 rounded-xl text-yellow-500 group-hover:-translate-y-3 duration-150">
                    <FaToolbox />
                  </p>
                </div>

                {/* Spatele iconiței */}
                <div className="flip-back">
                  <p className="font-serif text-4xl md:text-6xl pb-5 rounded-xl text-[#ac6a01] group-hover:-translate-y-3 duration-150">
                    <FaToolbox />
                  </p>
                </div>
              </div>

              <p className="font-serif text-xl text-[#964b01]">
                Service și întreținere
              </p>
              <p className="font-thin px-4 flex justify-center items-center text-justify text-[#964b01]">
                Oferim servicii de service și întreținere de înaltă calitate,
                menite să asigure funcționarea optimă și durabilitatea
                produselor dumneavoastră.
              </p>
            </div>

            <div className="group relative rounded shadow-xl bg-white  from-[#FFFBEC] to-[#f3f3f3] justify-center items-center flex flex-col py-8 gap-2 overflow-hidden">
              <div
                className="absolute inset-0 border-2 border-yellow-500 scale-x-0 group-hover:scale-x-100 
          origin-left transition-transform duration-500"
              ></div>

              {/* Container pentru flip */}
              <div className="relative flip-container">
                {/* Fața iconiței */}
                <div className="flip-front">
                  <p className="font-serif text-4xl md:text-6xl pb-5 rounded-xl text-yellow-500 group-hover:-translate-y-3 duration-150">
                    <SiTrustpilot />
                  </p>
                </div>

                {/* Spatele iconiței */}
                <div className="flip-back">
                  <p className="font-serif text-4xl md:text-6xl pb-5 rounded-xl text-[#ac6a01] group-hover:-translate-y-3 duration-150">
                    <SiTrustpilot />
                  </p>
                </div>
              </div>

              <p className="font-serif text-xl text-[#964b01]">
                Soluții personalizate
              </p>
              <p className="font-thin px-4 flex justify-center items-center text-justify text-[#964b01]">
                Experții noștri vă vor ghida pas cu pas, oferindu-vă sfaturi
                profesionale privind materialele, designul și funcționalitatea.
              </p>
            </div>
          </div>
          <div className="text-center md:mx-80 mt-10 text-[#964b01] -mb-10 md:mb-0">
            <div className="grid md:grid-cols-[80%_20%] gap-8 items-center text-justify ">
              <p>
                Scopul nostru este să vă oferim o experiență fără griji,
                asigurându-ne că fiecare detaliu corespunde așteptărilor, pentru
                a obține un rezultat final elegant, durabil și perfect adaptat
                spațiului dorit.
              </p>
              <div className="relative flip-container">
                {/* Fața iconiței */}
                <div className="flip-front">
                  <p className="hidden md:block font-serif text-4xl md:text-6xl pb-5 rounded-xl text-yellow-500 ">
                    <SiStylelint />
                  </p>
                </div>

                {/* Spatele iconiței */}
                <div className="flip-back">
                  <p className="hidden md:block font-serif text-4xl md:text-6xl pb-5 rounded-xl text-[#ac6a01] ">
                    <SiStylelint />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r to-slate-400 from-[#f3f3f3] h-1 mt-5"></div>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="bg-white -mt-5 ">
        <img
          className="z-[-1] overflow-hidden"
          src={I2}
          alt="Imagine2 Services"
        ></img>
        <Hero3 className=""></Hero3>
      </div>
      <PersonalizedSol />
      <div className="h-full bg-white from-white to-[#FFFBEC] pb-6">
        <div className="md:mx-20 pt-6 mx-10">
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-9">
            <div className="">
              <div className="">
                <div className="grid grid-rows-4 items-center justify-center  sm:space-y-0 xl:-space-y-2">
                  <p className="font-serif text-2xl lg:text-4xl md:pl-12 flex justify-start items-center pb-2">
                    Bucură-te de confortul interior, în aer liber
                  </p>
                  <span className="text-justify font-thin md:pl-12 flex justify-center items-center">
                    Transformă spațiile exterioare într-o oază de relaxare cu
                    tot confortul unui interior modern. Cu soluții precum
                    pergole, zipscreens sau închideri din sticlă, poți crea un
                    mediu confortabil și funcțional, indiferent de sezon.
                  </span>
                  <span className="text-justify font-thin md:pl-12 flex justify-center items-center ">
                    Descoperă soluțiile care îți permit să te bucuri de natură
                    fără a face compromisuri în privința confortului!
                  </span>

                  <div className="md:pl-12">
                    <button
                      onClick={() => navigate("/produse")}
                      className=" text-white bg-black py-2 px-4 rounded
                  
              font-sans font-medium hover:bg-black/60 transition duration-200"
                    >
                      Vezi produse!
                    </button>
                  </div>
                </div>
              </div>

              <br></br>
            </div>
            <div className="py-2 flex items-center justify-center">
              <img
                src={I8}
                alt="Imagine3 Services"
                className=" overflow-hidden"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default Services;
