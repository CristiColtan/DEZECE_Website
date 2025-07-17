import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar2 from "../components/Navbar2";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";

import B1 from "../assets/bckgr1.jpg";
import B2 from "../assets/WinterGarden-2.jpg";
import B3 from "../assets/WinterGarden-3.jpg";
import B4 from "../assets/WinterGarden-1.jpg";
import AboutUs2 from "../components/AboutUs2";
import Hero2 from "../components/Hero2";
import Footer from "../components/Footer.jsx";

export default function Guest() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  }, []);

  const handleClick = () => {
    window.open("https://www.tiktok.com/@echipadezece", "_blank");
  };

  return (
    <div>
      <div className="h-[610px] relative">
        <img
          id="scroll"
          className="absolute top-[42px] md:-top-12 right-0 h-[710px] w-full
        object-cover z[-1]"
          src={window.innerWidth >= 768 ? B3 : B4}
          alt=""
        ></img>
        <Hero></Hero>
        <div className="flex justify-center items-center">
          <button
            onClick={handleClick}
            id="tiktokBtn"
            data-aos="fade-up"
            className="px-3 py-2 rounded-full md:w-[270px] flex 
                bg-yellow-500 text-white font-sans justify-center
                hover:bg-yellow-600 transition duration-200 items-center
                font-medium z-9 border-white border-4 absolute top-[730px] md:top-[640px]"
          >
            Ne găsești și pe TikTok!
          </button>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="block md:hidden">
        <br></br>
        <br></br>
        <br></br>
      </div>
      <div className="text-black flex justify-center items-center bg-white">
        <div className="grid grid-cols-1">
          <p className="font-serif text-2xl lg:text-4xl space-y-6 m-9 flex justify-center items-center">
            Bucură-te de confortul interior, în aer liber!
          </p>
        </div>
      </div>
      <div className="hidden md:block md:bg-gradient-to-r md:to-slate-400 md:from-[#f3f3f3] md:h-1"></div>
      <AboutUs />
      <br></br>
      <br></br>
      <AboutUs2 />
      <div>
        <img className="z-[-1] md:absolute" src={B2}></img>
        <Hero2 />
      </div>
      <br></br>
      <Footer />
    </div>
  );
}
