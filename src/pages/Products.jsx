import React from "react";
import { useNavigate } from "react-router-dom";

import I2 from "../assets/Glisanta.jpg";
import I3 from "../assets/Imagine9-edit.jpg";
import I4 from "../assets/Imagine6.jpg";

import I5 from "../assets/Pergola-principal.jpg";
import I6 from "../assets/Inchideri-sticla-2.jpg";
import I7 from "../assets/Pergola-bioclimatica-retractabila.jpg";
import I8 from "../assets/Bioclimatica-retractabila-edit.jpg";

import Rulou from "../assets/p1.jpg";
import ZipScreen from "../assets/zipscreen1.jpg";

import { GiClick } from "react-icons/gi";
import Footer2 from "../components/Footer2";

const Products = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-20 ">
      <div className="h-full bg-white from-white to-[#FFFBEC] pb-6">
        <div className="md:mx-28 pt-6 mx-10">
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-9">
            <div className="py-2 flex items-center justify-center">
              <img
                src={I6}
                alt="Imagine1 Products"
                className=" max-w-[500px] overflow-hidden"
              ></img>
            </div>

            <div className="">
              <div className="">
                <div className="grid grid-rows-3 items-center justify-center -space-y-8 sm:space-y-0 xl:-space-y-2">
                  <p className="font-serif text-2xl lg:text-4xl md:pl-12 flex justify-start items-center">
                    Închideri din sticlă
                  </p>

                  <span className="text-justify font-thin md:pl-12 flex justify-center items-center">
                    Închiderile din sticlă reprezintă o soluție modernă și
                    versatilă pentru compartimentarea sau protejarea diferitelor
                    spații, oferind un design elegant și o funcționalitate
                    optimă. Acestea sunt ideale pentru terase, balcoane,
                    birouri, săli de conferință sau zone rezidențiale, aducând
                    un plus de luminozitate și senzație de spațiu deschis.
                  </span>

                  <span className="text-justify font-thin md:pl-12 flex justify-center items-center ">
                    Prin utilizarea închiderilor din sticlă, puteți crea spații
                    funcționale, protejate și estetice, care să răspundă perfect
                    cerințelor dumneavoastră.
                  </span>
                  <div className="md:pl-12">
                    <div className="bg-gradient-to-r to-slate-400 from-[#f3f3f3] h-1.5 mt-5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-transparent from-[#FFFBEC] to-[#f3f3f3]">
        <div className="md:mx-28 pt-6 mx-10 pb-6">
          <div className="grid md:grid-cols-3 gap-6" dir="rtl">
            {/* -------------- 1 -------------*/}
            <div className="">
              <div
                className="group relative rounded bg-white justify-center 
                      items-center flex flex-col py-0  gap-4 overflow-hidden"
              >
                <div
                  className="absolute inset-0 border-2 
                        border-yellow-500 scale-x-0 group-hover:scale-x-100 
                          origin-left transition-transform duration-500"
                ></div>
                {/* Container pentru flip */}
                <div className="relative flip-container w-full aspect-[4/3]">
                  {/* Fata */}
                  <div
                    className="flip-front2 flex justify-center items-center 
              bg-[#FFFBEC]"
                  >
                    <img
                      src={I3}
                      alt="Imagine Închideri din sticlă"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Spate */}
                  <div className="flip-back2">
                    <p
                      className="font-serif text-4xl md:text-6xl pb-5 
                            rounded-xl text-yellow-500 pt-2 md:pt-6"
                    >
                      <GiClick />
                    </p>
                    <p className="font-serif text-2xl text-[#964b01] pb-5">
                      Închideri glisante
                    </p>

                    <p
                      dir="ltr"
                      className="font-thin px-4 flex justify-center 
                            items-center text-justify text-[#964b01] pb-4 md:pb-5"
                    >
                      <button
                        onClick={() => navigate("/produse/inchideri-glisante")}
                        className=" text-white bg-yellow-500 py-2 px-4 rounded
                                  md:block hidden
                                  font-sans font-medium hover:bg-yellow-600 transition duration-200"
                      >
                        Vezi mai multe despre!
                      </button>
                    </p>
                  </div>
                </div>
              </div>
              <button
                dir="ltr"
                onClick={() => navigate("/produse/inchideri-glisante")}
                className="block md:hidden text-sm text-white bg-yellow-500 py-2 px-4 rounded font-sans font-medium hover:bg-yellow-600 transition duration-200 mt-2"
              >
                Vezi mai multe despre!
              </button>
            </div>

            {/* -------------- 2 -------------*/}
            <div>
              <div
                className="group relative rounded bg-white justify-center 
                      items-center flex flex-col py-0  gap-4 overflow-hidden"
              >
                <div
                  className="absolute inset-0 border-2
                        border-yellow-500 scale-x-0 group-hover:scale-x-100 
                          origin-left transition-transform duration-500"
                ></div>

                {/* Container pentru flip */}
                <div className="relative flip-container w-full aspect-[4/3]">
                  {/* Fata */}
                  <div
                    className="flip-front2 flex justify-center items-center 
              bg-[#FFFBEC]"
                  >
                    <img
                      src={I2}
                      alt="Imagine Închideri din sticlă"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Spate */}
                  <div className="flip-back2">
                    <p
                      className="font-serif text-4xl md:text-6xl pb-5 
                            rounded-xl text-yellow-500 pt-2 md:pt-6"
                    >
                      <GiClick />
                    </p>
                    <p className="font-serif text-2xl text-[#964b01] pb-5">
                      Închideri tip ghilotină
                    </p>

                    <p
                      dir="ltr"
                      className="font-thin px-4 flex justify-center 
                            items-center text-justify text-[#964b01] pb-4 md:pb-5"
                    >
                      <button
                        onClick={() => navigate("/produse/inchideri-ghilotina")}
                        className=" text-white bg-yellow-500 py-2 px-4 rounded
              md:block hidden    
              font-sans font-medium hover:bg-yellow-600 transition duration-200"
                      >
                        Vezi mai multe despre!
                      </button>
                    </p>
                  </div>
                </div>
              </div>
              <button
                dir="ltr"
                onClick={() => navigate("/produse/inchideri-ghilotina")}
                className="block md:hidden text-sm text-white bg-yellow-500 py-2 px-4 rounded font-sans font-medium hover:bg-yellow-600 transition duration-200 mt-2"
              >
                Vezi mai multe despre!
              </button>
            </div>

            {/* -------------- 3 -------------*/}
            {/*<div>
              <div
                className="group relative rounded bg-white justify-center 
                      items-center flex flex-col py-0  gap-4 overflow-hidden"
              >
                <div
                  className="absolute inset-0 border-2
                        border-yellow-500 scale-x-0 group-hover:scale-x-100 
                          origin-left transition-transform duration-500"
                ></div>

                
                <div className="relative flip-container w-full aspect-[4/3]">
               
                  <div
                    className="flip-front2 flex justify-center items-center 
              bg-[#FFFBEC]"
                  >
                    <img
                      src={I4}
                      alt="Imagine Închideri din sticlă"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flip-back2">
                    <p
                      className="font-serif text-4xl md:text-6xl pb-5 
                            rounded-xl text-yellow-500 pt-2 md:pt-6"
                    >
                      <GiClick />
                    </p>
                    <p className="font-serif text-2xl text-[#964b01] pb-5">
                      Închideri pivotante
                    </p>

                    <p
                      className="font-thin px-4 flex justify-center 
                            items-center text-justify text-[#964b01] pb-4 md:pb-5"
                    >
                      <button
                        onClick={() => navigate("/produse/inchideri-pivot")}
                        className=" text-white bg-yellow-500 py-2 px-4 rounded
                  md:block hidden
              font-sans font-medium hover:bg-yellow-600 transition duration-200"
                      >
                        Vezi mai multe despre!
                      </button>
                    </p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => navigate("/produse/inchideri-pivot")}
                className="block md:hidden text-sm text-white bg-yellow-500 py-2 px-4 rounded font-sans font-medium hover:bg-yellow-600 transition duration-200 mt-2"
              >
                Vezi mai multe despre!
              </button>
            </div>
            */}
          </div>
        </div>
      </div>

      <div className="h-full bg-white from-white to-[#FFFBEC] pb-6">
        <div className="md:mx-28 pt-6 mx-10">
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-9">
            <div className="">
              <div className="">
                <div className="grid grid-rows-3 items-center justify-center -space-y-6 sm:space-y-0 xl:-space-y-0">
                  <p className="font-serif text-2xl lg:text-4xl md:pl-12 flex justify-start items-center">
                    Pergole
                  </p>

                  <span className="text-justify font-thin md:pl-12 flex justify-center items-center">
                    Pergolele sunt soluții ideale pentru amenajarea și
                    protejarea spațiilor exterioare, adăugând un plus de
                    eleganță și confort grădinilor, teraselor sau curților. Cu
                    un design versatil și modern, acestea sunt concepute pentru
                    a oferi umbrire, protecție împotriva intemperiilor și
                    posibilitatea de a vă bucura de spațiile exterioare în orice
                    anotimp.
                  </span>

                  <span className="text-justify font-thin md:pl-12 flex justify-center items-center ">
                    Fie că doriți să creați un spațiu intim pentru relaxare sau
                    o zonă socială primitoare, pergolele sunt alegerea ideală
                    pentru a transforma orice spațiu exterior într-o oază de
                    confort și stil.
                  </span>
                  <div className="md:pl-12 ">
                    <div className="hidden md:block bg-gradient-to-r from-slate-400 to-[#f3f3f3] h-1.5 mt-5"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-2 flex items-center justify-center">
              <img
                src={I5}
                alt="Imagine2 Products"
                className=" max-w-[500px] overflow-hidden"
              ></img>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-transparent from-[#FFFBEC] to-[#f3f3f3]">
        <div className="md:mx-28 pt-6 mx-10 pb-6">
          <div className="grid md:grid-cols-3 gap-6">
            {/* -------------- 1 -------------*/}
            <div>
              <div
                className="group relative rounded bg-white justify-center 
                      items-center flex flex-col py-0  gap-4 overflow-hidden"
              >
                <div
                  className="absolute inset-0 border-2 
                        border-yellow-500 scale-x-0 group-hover:scale-x-100 
                          origin-left transition-transform duration-500"
                ></div>

                {/* Container pentru flip */}
                <div className="relative flip-container w-full aspect-[4/3]">
                  {/* Fata */}
                  <div
                    className="flip-front2 flex justify-center items-center 
              bg-[#FFFBEC]"
                  >
                    <img
                      src={I4}
                      alt="Imagine Închideri din sticlă"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Spate */}
                  <div className="flip-back2">
                    <p
                      className="font-serif text-4xl md:text-6xl pb-5 
                            rounded-xl text-yellow-500 pt-2 md:pt-6"
                    >
                      <GiClick />
                    </p>
                    <p className="font-serif text-2xl text-[#964b01] pb-5">
                      Bioclimatică
                    </p>

                    <p
                      className="font-thin px-4 flex justify-center 
                            items-center text-justify text-[#964b01] pb-4 md:pb-5"
                    >
                      <button
                        onClick={() => navigate("/produse/bioclimatica")}
                        className=" text-white bg-yellow-500 py-2 px-4 rounded
                  md:block hidden
              font-sans font-medium hover:bg-yellow-600 transition duration-200"
                      >
                        Vezi mai multe despre!
                      </button>
                    </p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => navigate("/produse/bioclimatica")}
                className="block md:hidden text-sm text-white bg-yellow-500 py-2 px-4 rounded font-sans font-medium hover:bg-yellow-600 transition duration-200 mt-2"
              >
                Vezi mai multe despre!
              </button>
            </div>

            {/* -------------- 2 -------------*/}
            <div>
              <div
                className="group relative rounded bg-white justify-center 
                      items-center flex flex-col py-0  gap-4 overflow-hidden"
              >
                <div
                  className="absolute inset-0 border-2
                        border-yellow-500 scale-x-0 group-hover:scale-x-100 
                          origin-left transition-transform duration-500"
                ></div>

                {/* Container pentru flip */}
                <div className="relative flip-container w-full aspect-[4/3]">
                  {/* Fata */}
                  <div
                    className="flip-front2 flex justify-center items-center 
              bg-[#FFFBEC]"
                  >
                    <img
                      src={I7}
                      alt="Imagine Închideri din sticlă"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Spate */}
                  <div className="flip-back2">
                    <p
                      className="font-serif text-4xl md:text-6xl pb-5 
                            rounded-xl text-yellow-500 pt-2 md:pt-6"
                    >
                      <GiClick />
                    </p>
                    <p className="font-serif text-2xl text-[#964b01] pb-5">
                      Bioclimatică retractabilă
                    </p>

                    <p
                      className="font-thin px-4 flex justify-center 
                            items-center text-justify text-[#964b01] pb-4 md:pb-5"
                    >
                      <button
                        onClick={() =>
                          navigate("/produse/bioclimatica-retractabila")
                        }
                        className=" text-white bg-yellow-500 py-2 px-4 rounded
                  md:block hidden
              font-sans font-medium hover:bg-yellow-600 transition duration-200"
                      >
                        Vezi mai multe despre!
                      </button>
                    </p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => navigate("/produse/bioclimatica-retractabila")}
                className="block md:hidden text-sm text-white bg-yellow-500 py-2 px-4 rounded font-sans font-medium hover:bg-yellow-600 transition duration-200 mt-2"
              >
                Vezi mai multe despre!
              </button>
            </div>

            {/* -------------- 3 -------------*/}
            <div>
              <div
                className="group relative rounded bg-white justify-center 
                      items-center flex flex-col py-0  gap-4 overflow-hidden"
              >
                <div
                  className="absolute inset-0 border-2
                        border-yellow-500 scale-x-0 group-hover:scale-x-100 
                          origin-left transition-transform duration-500"
                ></div>

                {/* Container pentru flip */}
                <div className="relative flip-container w-full aspect-[4/3]">
                  {/* Fata */}
                  <div
                    className="flip-front2 flex justify-center items-center 
              bg-[#FFFBEC]"
                  >
                    <img
                      src={I8}
                      alt="Imagine Închideri din sticlă"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Spate */}
                  <div className="flip-back2">
                    <p
                      className="font-serif text-4xl md:text-6xl pb-5 
                            rounded-xl text-yellow-500 pt-2 md:pt-6"
                    >
                      <GiClick />
                    </p>
                    <p className="font-serif text-2xl text-[#964b01] pb-5">
                      Retractabilă PVC
                    </p>

                    <p
                      className="font-thin px-4 flex justify-center 
                            items-center text-justify text-[#964b01] pb-4 md:pb-5"
                    >
                      <button
                        onClick={() => navigate("/produse/retractabila-pvc")}
                        className=" text-white bg-yellow-500 py-2 px-4 rounded
                  md:block hidden
              font-sans font-medium hover:bg-yellow-600 transition duration-200"
                      >
                        Vezi mai multe despre!
                      </button>
                    </p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => navigate("/produse/retractabila-pvc")}
                className="block md:hidden text-sm text-white bg-yellow-500 py-2 px-4 rounded font-sans font-medium hover:bg-yellow-600 transition duration-200 mt-2"
              >
                Vezi mai multe despre!
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full bg-white from-white to-[#FFFBEC] pb-6">
        <div className="md:mx-28 pt-6 mx-10">
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-9">
            <div className="py-2 flex items-center justify-center">
              <img
                src={Rulou}
                alt="Imagine Rulou Products"
                className=" max-w-[500px] overflow-hidden"
              ></img>
            </div>
            <div className="">
              <div className="">
                <div className="flex flex-col justify-center space-y-6 h-full my-14">
                  <p className="font-serif text-2xl lg:text-4xl md:pl-12 flex justify-start items-center">
                    Rulouri exterioare
                  </p>

                  <span className="text-justify font-thin md:pl-12 flex justify-center items-center">
                    Rulourile exterioare sunt o soluție practică și estetică
                    pentru protejarea ferestrelor și a spațiilor interioare
                    împotriva soarelui, căldurii și privirilor indiscrete.
                    Acestea contribuie la eficiența energetică a locuinței,
                    asigurând izolație termică și fonică, dar și un plus de
                    siguranță.
                  </span>

                  <span className="text-justify font-thin md:pl-12 flex justify-center items-center ">
                    Disponibile într-o varietate de culori și sisteme de
                    acționare, rulourile exterioare se integrează armonios în
                    orice stil arhitectural. Sunt ideale atât pentru locuințe,
                    cât și pentru spații comerciale, oferind confort, protecție
                    și control asupra luminii naturale.
                  </span>
                  <div className="md:pl-12 ">
                    <div className="hidden md:block bg-gradient-to-l from-slate-400 to-[#f3f3f3] h-1.5 mt-5"></div>
                  </div>
                  <div className="md:pl-12">
                    <button
                      onClick={() => navigate("/produse/rulouri")}
                      className=" md:w-1/3 text-sm text-white bg-yellow-500 py-2 px-4 rounded font-sans font-medium hover:bg-yellow-600 transition duration-200 mt-2"
                    >
                      Vezi mai multe despre!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full bg-white from-white to-[#FFFBEC] pb-6">
        <div className="md:mx-28 pt-6 mx-10">
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-9">
            <div className="">
              <div className="">
                <div className="flex flex-col justify-center space-y-6 h-full my-14">
                  <p className="font-serif text-2xl lg:text-4xl md:pl-12 flex justify-start items-center">
                    ZipScreens
                  </p>

                  <span className="text-justify font-thin md:pl-12 flex justify-center items-center">
                    Sunt soluții moderne de umbrire verticală, ideale pentru
                    protecția eficientă împotriva soarelui, vântului și
                    insectelor. Datorită sistemului de ghidare cu fermoar,
                    materialul este întins perfect, oferind stabilitate și
                    rezistență chiar și în condiții meteorologice dificile.
                  </span>

                  <span className="text-justify font-thin md:pl-12 flex justify-center items-center ">
                    Sistemele ZipScreen se integrează discret în fațadele
                    moderne și oferă un plus de confort termic și vizual.
                    Acționarea poate fi manuală sau automatizată, iar utilizarea
                    lor este ideală atât pentru pergole, cât și pentru ferestre
                    sau terase.
                  </span>
                  <div className="md:pl-12 ">
                    <div className="hidden md:block bg-gradient-to-r from-slate-400 to-[#f3f3f3] h-1.5 mt-5"></div>
                  </div>
                  <div className="md:pl-12">
                    <button
                      onClick={() => navigate("/produse/zipscreens")}
                      className=" md:w-1/3 text-sm text-white bg-yellow-500 py-2 px-4 rounded font-sans font-medium hover:bg-yellow-600 transition duration-200 mt-2"
                    >
                      Vezi mai multe despre!
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-2 flex items-center justify-center">
              <img
                src={ZipScreen}
                alt="Imagine ZipScreen Products"
                className=" max-w-[500px] overflow-hidden"
              ></img>
            </div>
          </div>
        </div>
      </div>

      <Footer2 />
    </div>
  );
};

export default Products;
