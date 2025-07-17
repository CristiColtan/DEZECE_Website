import React from "react";
import { useNavigate } from "react-router-dom";

import { HiArrowNarrowRight } from "react-icons/hi";

import HeroProduct from "../components/HeroProduct.jsx";
import Footer2 from "../components/Footer2.jsx";
import SystemCard from "../imports/SystemCard.jsx";
import B4 from "../assets/rulouri-ext-edit.jpg";
import Vv from "../assets/rulouri-exterioare1.jpg";

import Brosura from "../assets/brosura-retractabila-pvc.png";

import I2 from "../assets/WG-1.jpg";
import I4 from "../assets/pvc1.jpg";
import I6 from "../assets/Glisanta.jpg";
import I7 from "../assets/bioclimatica-5.jpg";
import I8 from "../assets/zipscreen1.jpg";

import leftimg from "../assets/rulouri-exterioare2.jpg";
import rightimg from "../assets/rulouri-exterioare4.jpg";
const RulouriExterioare = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-20">
      <div className="bg-white -mt-5 ">
        <img
          className="z-[-1] overflow-hidden w-full md:h-[680px] object-cover"
          src={window.innerWidth >= 768 ? B4 : B4}
          alt="Background Rulouri Exterioare"
        ></img>
        <HeroProduct bigText="RULOURI EXTERIOARE"></HeroProduct>
      </div>

      <div className="container h-full md:mx-20 px-8 md:px-0 -mt-10 md:-mt-24">
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-9 gap-6">
          <div className="flex flex-col justify-center space-y-6 h-full">
            <img
              src={window.innerWidth >= 768 ? Vv : Vv}
              alt="Imagine 1 Rulouri Exterioare"
            ></img>
          </div>
          <div className="flex flex-col justify-center space-y-4 h-full">
            <p className="font-serif text-2xl lg:text-4xl flex">
              Siguranță, confort și eficiență energetică!
            </p>
            <p className="font-thin  flex justify-center items-center">
              Rulourile exterioare sunt soluții moderne și eficiente pentru
              protejarea locuinței împotriva soarelui, zgomotului, frigului și
              privirilor indiscrete. Acestea contribuie la menținerea unei
              temperaturi interioare plăcute pe tot parcursul anului și sporesc
              eficiența energetică. Disponibile cu acționare manuală sau
              automată, rulourile se integrează armonios în orice stil
              arhitectural și adaugă un plus de siguranță și intimitate.
            </p>
            <p className="font-serif text-2xl lg:text-4xl flex justify-center items-center">
              Dorești o ofertă pentru rulouri exterioare?
            </p>
            <div className="">
              <button
                onClick={() => navigate("/contact")}
                className="bg-yellow-500 py-2 px-3 flex items-center justify-center
                                         hover:bg-yellow-600/90 duration-300 group relative text-right
                                     font-serif lg:text-3xl text-white"
              >
                <span className="group-hover:text-transparent ">
                  CONTACTEAZĂ-NE!
                </span>
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
          </div>
        </div>
      </div>
      <br></br>
      <div className="bg-gradient-to-r to-slate-400 from-[#f3f3f3] h-1"></div>
      <div className="text-black flex justify-center items-center bg-white my-10">
        <div className="grid grid-cols-1">
          <div className="flex justify-center items-center pr-9 md:pr-0">
            <p className="font-serif text-2xl lg:text-4xl space-y-6 m-9 flex justify-center items-center">
              Nu ești convins?
            </p>
            <button
              onClick={() => navigate("/portofoliu")}
              className="bg-gray-600/90 py-2 px-3 flex items-center justify-center rounded-lg
                                         hover:bg-gray-600/90 duration-300 group relative text-right
                                     font-serif lg:text-3xl text-white"
            >
              <span className="group-hover:text-transparent ">
                VEZI PORTOFOLIUL NOSTRU!
              </span>
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
        </div>
      </div>

      <div className="md:mx-20 px-8 md:px-0">
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-9">
          <div className="py-2 flex items-center justify-center">
            <img
              src={leftimg}
              className=" w-full md:h-[400px] object-cover max-w-[600px] overflow-hidden"
              alt="Left Rulouri Exterioare"
            ></img>
          </div>

          <div className="py-2 flex items-center justify-center">
            <img
              src={rightimg}
              className="w-full md:h-[400px] object-cover max-w-[600px] overflow-hidden"
              alt="Right Rulouri Exterioare"
            ></img>
          </div>
        </div>
      </div>

      <div className="hidden justify-left items-center my-10 bg-white md:mx-20 px-8 md:px-0 mt-16">
        <div className="text-left  rounded-lg max-w-xs">
          <p
            className="font-sans text-xl lg:text-2xl font-semibold
              border-l-[0.5rem] border-yellow-500 pl-2 mb-5"
          >
            Broșură
          </p>
          <div className="max-w-[300px] mx-auto">
            <img
              src={Brosura}
              alt="Brochure Cover"
              className="rounded-lg shadow-md mb-6 md:h-[300px] h-[200px]"
            />

            <a
              href="/brochures/DEZECE_Catalog_Winter_Garden_RO.pdf"
              download
              className="bg-yellow-500 text-white py-2 font-bold rounded-md 
              hover:bg-yellow-600/90 transition-all w-full block text-center"
            >
              DOWNLOAD
            </a>
          </div>
        </div>
      </div>

      <div className="md:mx-20 px-8 md:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 p-8">
        <SystemCard
          image={I2}
          title="Închideri glisante"
          onClick={() => navigate("/produse/inchideri-glisante")}
        />
        <SystemCard
          image={I6}
          title="Închideri tip ghilotină"
          onClick={() => navigate("/produse/inchideri-ghilotina")}
        />
        <SystemCard
          image={I7}
          title="Pergole bioclimatice"
          onClick={() => navigate("/produse/bioclimatica")}
        />
        <SystemCard
          image={I4}
          title="Pergole retractabile"
          onClick={() => navigate("/produse/retractabila-pvc")}
        />
        <SystemCard
          image={I8}
          title="ZipScreens"
          onClick={() => navigate("/produse/zipscreens")}
        />
      </div>
      <Footer2 />
    </div>
  );
};

export default RulouriExterioare;
