import React from "react";

import { GiClick } from "react-icons/gi";
import { IoCall } from "react-icons/io5";

import I3mob from "../assets/WG-1.jpg";
import I3 from "../assets/WG-1-mob.jpg";

import I4mob from "../assets/Imagine6.jpg";
import I4 from "../assets/Imagine6-edit.jpg";

import I5mob from "../assets/p1.jpg";
import I5 from "../assets/rulouri-ext-edit.jpg";

import I6 from "../assets/zipscreen.jpeg";

const PersonalizedSol = () => {
  return (
    <div>
      <div className="md:mx-20 pt-6 mx-10 md:-mt-64 mb-6">
        <div className="grid md:grid-cols-3 gap-6">
          {/* ----------------------- TEXT ----------------------- */}
          <div
            className="group relative rounded bg-gradient-to-r 
            from-[#FFFBEC] to-[#f3f3f3] justify-center 
          items-center flex flex-col py-0  gap-4 overflow-hidden"
          >
            <div
              className="absolute inset-0 border-2 
            border-yellow-500 scale-x-0 group-hover:scale-x-100 
              origin-left transition-transform duration-500"
            ></div>

            {/* Container pentru flip */}
            <div className="relative flip-container w-full h-full">
              {/* Fața iconiței */}
              <div className="flip-front2">
                <p
                  className="font-serif text-4xl md:text-6xl pb-5 
                rounded-xl text-yellow-500 pt-2 md:pt-6"
                >
                  <GiClick />
                </p>
                <p className="font-serif text-2xl text-[#964b01] pb-5">
                  Soluțiile noastre personalizate
                </p>
                <p
                  className="font-thin px-4 flex justify-center 
                items-center text-justify text-[#964b01] pb-4 md:pb-5"
                >
                  Ne asigurăm că fiecare detaliu corespunde așteptărilor
                  dumneavoastră, pentru a obține un rezultat final elegant,
                  durabil și perfect adaptat spațiului dorit.
                </p>
              </div>

              <div
                className="flip-back2 flex justify-center items-center 
              bg-transparent"
              >
                <p
                  className="font-serif text-4xl md:text-6xl pb-5 rounded-xl 
                text-yellow-500 pt-2 md:pt-6 text-center"
                >
                  <IoCall />
                </p>
                <p className="font-serif text-2xl text-[#964b01] pb-5">
                  CONTACT
                </p>
                <p className="font-serif text-2xl text-[#964b01] pb-4 md:pb-5">
                  Tel: +40 731 321
                </p>
              </div>
            </div>
          </div>
          {/* ----------------------- 1 ----------------------- */}
          <div
            className="group relative rounded bg-gradient-to-r 
          from-[#FFFBEC] to-[#f3f3f3] justify-center items-center
          flex flex-col py-0  gap-4 overflow-hidden"
          >
            <div
              className="absolute inset-0 border-2 
              border-yellow-500 scale-x-0 group-hover:scale-x-100 
              origin-left transition-transform duration-500"
            ></div>

            {/* Container pentru flip */}
            <div className="relative flip-container w-full h-full">
              {/* Fața iconiței */}
              <div className="flip-front2">
                <p
                  className="font-serif text-4xl md:text-6xl pb-5 
                rounded-xl text-yellow-500 pt-2 md:pt-6"
                >
                  <GiClick />
                </p>
                <p className="font-serif text-2xl text-[#964b01] pb-5">
                  Pergole
                </p>
                <p
                  className="font-thin px-4 flex justify-center items-center 
                text-justify text-[#964b01] pb-4 md:pb-5"
                >
                  Pergolele sunt soluții ideale pentru amenajarea și protejarea
                  spațiilor exterioare, adăugând un plus de eleganță și confort
                  grădinilor, teraselor sau curților.
                </p>
              </div>

              <div
                className="flip-back2 flex justify-center items-center 
              bg-[#FFFBEC]"
              >
                <img
                  src={
                    window.innerWidth >= 768 ? I4 : I4mob
                  } /* Pune URL-ul imaginii tale aici */
                  alt="Imagine Închideri din sticlă"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          {/* ----------------------- 2 ----------------------- */}
          <div
            className="group relative rounded bg-gradient-to-r
           from-[#FFFBEC] to-[#f3f3f3] justify-center items-center
           flex flex-col py-0  gap-4 overflow-hidden"
          >
            <div
              className="absolute inset-0 border-2 
              border-yellow-500 scale-x-0 group-hover:scale-x-100 
              origin-left transition-transform duration-500"
            ></div>

            {/* Container pentru flip */}
            <div className="relative flip-container w-full h-full">
              {/* Fața iconiței */}
              <div className="flip-front2">
                <p
                  className="font-serif text-4xl md:text-6xl pb-5 
                rounded-xl text-yellow-500 pt-2 md:pt-6"
                >
                  <GiClick />
                </p>
                <p className="font-serif text-2xl text-[#964b01] pb-5">
                  Închideri din sticlă
                </p>
                <p
                  className="font-thin px-4 flex justify-center items-center 
                text-justify text-[#964b01] pb-4 md:pb-5"
                >
                  Închiderile din sticlă reprezintă o soluție modernă și
                  versatilă pentru compartimentarea sau protejarea diferitelor
                  spații, oferind un design elegant și o funcționalitate optimă.
                </p>
              </div>

              <div
                className="flip-back2 flex justify-center items-center 
              bg-[#FFFBEC]"
              >
                <img
                  src={
                    window.innerWidth >= 768 ? I3 : I3mob
                  } /* Pune URL-ul imaginii tale aici */
                  alt="Imagine Închideri din sticlă"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          {/* ----------------------- 3 ----------------------- */}
          <div
            className="group relative rounded  bg-gradient-to-r 
          from-[#FFFBEC] to-[#f3f3f3] justify-center items-center 
          flex flex-col py-0  gap-4 overflow-hidden"
          >
            <div
              className="absolute inset-0 border-2 
              border-yellow-500 scale-x-0 group-hover:scale-x-100 
              origin-left transition-transform duration-500"
            ></div>

            {/* Container pentru flip */}
            <div className="relative flip-container w-full h-full">
              {/* Fața iconiței */}
              <div className="flip-front2">
                <p
                  className="font-serif text-4xl md:text-6xl pb-5 
                rounded-xl text-yellow-500 pt-2 md:pt-6"
                >
                  <GiClick />
                </p>
                <p className="font-serif text-2xl text-[#964b01] pb-5">
                  Roulouri exterioare
                </p>
                <p
                  className="font-thin px-4 flex justify-center items-center 
                text-justify text-[#964b01] pb-4 md:pb-5"
                >
                  Rulourile exterioare sunt soluții eficiente și elegante pentru
                  protejarea ferestrelor, asigurând intimitate, confort termic
                  și siguranță sporită.
                </p>
              </div>

              <div
                className="flip-back2 flex justify-center items-center 
              bg-[#FFFBEC]"
              >
                <img
                  src={
                    window.innerWidth >= 768 ? I5 : I5mob
                  } /* Pune URL-ul imaginii tale aici */
                  alt="Imagine Închideri din sticlă"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* ----------------------- 1 - Row 2 ----------------------- */}
          <div
            className="group relative rounded bg-gradient-to-r 
          from-[#FFFBEC] to-[#f3f3f3] justify-center items-center
          flex flex-col py-0  gap-4 overflow-hidden"
          >
            <div
              className="absolute inset-0 border-2 
              border-yellow-500 scale-x-0 group-hover:scale-x-100 
              origin-left transition-transform duration-500"
            ></div>

            {/* Container pentru flip */}
            <div className="relative flip-container w-full h-full">
              {/* Fața iconiței */}
              <div className="flip-front2">
                <p
                  className="font-serif text-4xl md:text-6xl pb-5 
                rounded-xl text-yellow-500 pt-2 md:pt-6"
                >
                  <GiClick />
                </p>
                <p className="font-serif text-2xl text-[#964b01] pb-5">
                  ZipScreens
                </p>
                <p
                  className="font-thin px-4 flex justify-center items-center 
                text-justify text-[#964b01] pb-4 md:pb-5"
                >
                  ZipScreens sunt sisteme moderne de umbrire exterioară,
                  proiectate pentru a proteja spațiile împotriva soarelui,
                  vântului și insectelor, oferind în același timp un aspect
                  elegant și minimalist.
                </p>
              </div>

              <div
                className="flip-back2 flex justify-center items-center 
              bg-[#FFFBEC]"
              >
                <img
                  src={
                    window.innerWidth >= 768 ? I6 : I6
                  } /* Pune URL-ul imaginii tale aici */
                  alt="Imagine Închideri din sticlă"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          {/* ----------------------- 2 - Row 2 ----------------------- */}
          {/*<div
            className="group relative rounded bg-gradient-to-r 
          from-[#FFFBEC] to-[#f3f3f3] justify-center items-center
          flex flex-col py-0  gap-4 overflow-hidden"
          >
            <div
              className="absolute inset-0 border-2 
              border-yellow-500 scale-x-0 group-hover:scale-x-100 
              origin-left transition-transform duration-500"
            ></div>

            <div className="relative flip-container w-full h-full">
              
              <div className="flip-front2">
                <p
                  className="font-serif text-4xl md:text-6xl pb-5 
                rounded-xl text-yellow-500 pt-2 md:pt-6"
                >
                  <GiClick />
                </p>
                <p className="font-serif text-2xl text-[#964b01] pb-5">
                  Copertine
                </p>
                <p
                  className="font-thin px-4 flex justify-center items-center 
                text-justify text-[#964b01] pb-4 md:pb-5"
                >
                  ZipScreens sunt sisteme moderne de umbrire exterioară,
                  proiectate pentru a proteja spațiile împotriva soarelui,
                  vântului și insectelor, oferind în același timp un aspect
                  elegant și minimalist.
                </p>
              </div>

              <div
                className="flip-back2 flex justify-center items-center 
              bg-[#FFFBEC]"
              >
                <img
                  src={
                    window.innerWidth >= 768 ? I7 : I7
                  } 
            alt = "Imagine Închideri din sticlă"
                  className="w-full h-full object-cover"
                />
        </div>
      </div>
    </div> */}
        </div>
      </div>
    </div>
  );
};

export default PersonalizedSol;
