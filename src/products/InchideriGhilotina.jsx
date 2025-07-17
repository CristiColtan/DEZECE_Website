import React from "react";
import { useNavigate } from "react-router-dom";

import { HiArrowNarrowRight } from "react-icons/hi";

import HeroProduct from "../components/HeroProduct.jsx";
import Footer2 from "../components/Footer2.jsx";
import SystemCard from "../imports/SystemCard.jsx";
import B4 from "../assets/Glisanta.jpg";
import Vv from "../assets/Vidio.mp4";

import Brosura from "../assets/brosura-winter-garden.png";

import I2 from "../assets/WG-1.jpg";
import I4 from "../assets/p1.jpg";
import I6 from "../assets/Imagine4.jpg";
import I7 from "../assets/Bioclimatica-retractabila-edit.jpg";
import I8 from "../assets/zipscreen1.jpg";

import leftimg from "../assets/ghilotina3.png";
import rightimg from "../assets/ghilotina1.png";

const InchideriGhilotina = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-20">
      <div className="bg-white -mt-5 ">
        <img
          className="z-[-1] overflow-hidden w-full md:h-[680px] object-cover"
          src={window.innerWidth >= 768 ? B4 : B4}
          alt="Background Inchideri Ghilotina"
        ></img>
        <HeroProduct bigText="ÎNCHIDERI TIP GHILOTINĂ"></HeroProduct>
      </div>

      <div className="container h-full md:mx-20 px-8 md:px-0 -mt-10 md:-mt-24">
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-9 gap-6">
          <div className="flex flex-col justify-center space-y-6 h-full">
            <video autoPlay muted loop className="">
              <source src={Vv} type="video/mp4" />
            </video>
          </div>
          <div className="flex flex-col justify-center space-y-4 h-full">
            <p className="font-serif text-2xl lg:text-4xl flex">
              Deschidere verticală, confort maxim!
            </p>
            <p className="font-thin  flex justify-center items-center">
              Sistemele de tip ghilotină sunt soluția ideală pentru închideri
              verticale elegante și funcționale. Panourile de sticlă glisează
              lin în sus sau în jos, oferind ventilație controlată și protecție
              împotriva intemperiilor, fără a compromite vizibilitatea. Perfecte
              pentru terase, balcoane sau fațade comerciale, aceste sisteme
              impresionează prin designul modern și ușurința în utilizare,
              putând fi acționate manual sau automatizat.
            </p>
            <p className="font-serif text-2xl lg:text-4xl flex justify-center items-center">
              Dorești o ofertă pentru închideri tip ghilotină?
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
              alt="Left Inchideri Ghilotina"
            ></img>
          </div>

          <div className="py-2 flex items-center justify-center">
            <img
              src={rightimg}
              className="w-full md:h-[400px] object-cover max-w-[600px] overflow-hidden"
              alt="Right Inchideri Ghilotina"
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
              href="/brochure.pdf"
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
          title="Pergole bioclimatice"
          onClick={() => navigate("/produse/bioclimatica")}
        />
        <SystemCard
          image={I7}
          title="Pergole retractabile"
          onClick={() => navigate("/produse/retractabila-pvc")}
        />
        <SystemCard
          image={I4}
          title="Rulouri exterioare"
          onClick={() => navigate("/produse/rulouri")}
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

export default InchideriGhilotina;
