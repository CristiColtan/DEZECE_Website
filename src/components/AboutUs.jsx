import React from "react";
import { useNavigate } from "react-router-dom";

import Vv from "../assets/Vidio.mp4";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <section id="1">
      <div className="h-full md:mx-20 pt-6 mx-10">
        <p
          className="font-sans text-xl lg:text-2xl font-semibold
              border-l-[0.5rem] border-yellow-500 pl-2 mb-10"
        >
          {""}Despre Noi
        </p>

        <div className="w-full px-4 md:px-20">
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-9">
            <div className="bg-yellow-500">
              <video
                autoPlay
                muted
                loop
                className="translate-x-5 -translate-y-5"
              >
                <source src={Vv} type="video/mp4" />
              </video>
            </div>
            <div className="grid grid-rows-3 items-center justify-center -space-y-4 sm:space-y-0 xl:-space-y-4">
              <p className="font-serif text-2xl lg:text-4xl md:pl-12 flex justify-center items-center">
                Vă vom oferi cea mai bună lucrare la care ați visat
              </p>
              <p className="font-thin md:pl-12 flex justify-center items-center">
                Suntem o echipă dedicată transformării spațiilor exterioare cât
                și semi-exterioare în spații de relaxare pline de rafinament. Ne
                concentrăm pe instalarea pergolelor, rulourilor exterioare,
                închiderilor din sticlă și tip ghilotină, furnizând soluții
                personalizate clienților noștri.
              </p>
              <div className="md:pl-12">
                <button
                  onClick={() => navigate("/servicii")}
                  className="flex text-white bg-black py-2 px-4 rounded
              font-sans font-medium hover:bg-yellow-600/70 transition duration-200"
                >
                  Află mai multe!
                </button>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        {/*bg-[#FFFBEC] */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-10">
          <div className="bg-slate-400/30 justify-center items-center flex flex-col py-12">
            <p className="font-serif text-4xl md:text-5xl pb-5">12+</p>
            <p className="font-serif md:text-lg">ani de experiență</p>
          </div>
          <div className="bg-slate-400/30 justify-center items-center flex flex-col py-12">
            <p className="font-serif text-4xl md:text-5xl pb-5">800+</p>
            <p className="font-serif md:text-lg">proiecte completate</p>
          </div>
          <div className="bg-slate-400/30 justify-center items-center flex flex-col py-12">
            <p className="font-serif text-4xl md:text-5xl pb-5">750+</p>
            <p className="font-serif md:text-lg">clienți mulțumiți</p>
          </div>
          <div className="hidden bg-slate-400/30 justify-center items-center sm:flex flex-col py-12">
            <p className="font-serif text-4xl md:text-5xl pb-5">10+</p>
            <p className="font-serif md:text-lg">parteneriate solide</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
