import React, { useEffect, useState } from "react";
import { useNavigate, Navigate, useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";

import { FaLocationDot } from "react-icons/fa6";
import { IoIosMailUnread } from "react-icons/io";
import { MdAddIcCall } from "react-icons/md";
import { CiLink } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";

import Logo from "../assets/logo_final.png";

const Footer = () => {
  const { sidebarOpen } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-[#393e41] text-white md:translate-y-60 xl:translate-y-72">
        <div className="md:ml-20 mx-auto px-3">
          <div className="grid sm:grid-cols-3 py-5 px-2 gap-12 justify-center">
            <div className="pb-2">
              <h1 className="text-left font-serif text-2xl mb-4 ml-2">
                Locația noastră
              </h1>
              <div className="">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.854168442359!2d25.976122408525132!3d44.436153545998074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b200e0aeff82e9%3A0x57ac84c4df0f9dc3!2sBulevardul%20Iuliu%20Maniu%20585%2C%20Bucure%C8%99ti%20061087!5e0!3m2!1sen!2sro!4v1739991044082!5m2!1sen!2sro"
                  width="400"
                  height="300"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="md:ml-20">
              <h1 className="ml-2 text-left font-serif text-2xl mb-2 xs:text-current sm:text-transparent md:text-current">
                Link-uri utile
              </h1>
              <ul className="text-white text-xl font-thin flex flex-col gap-1 xs:block sm:hidden md:block">
                <li className="flex items-center justify-normal ml-2 gap-2">
                  <CiLink className="text-3xl text-yellow-500 " />
                  <button
                    className="hover:text-gray-300"
                    onClick={() => navigate("/acasa")}
                  >
                    Acasă
                  </button>
                </li>
                <li className="flex items-center mjustify-normal ml-2 gap-2">
                  <CiLink className="text-3xl text-yellow-500" />
                  <button
                    className="hover:text-gray-300"
                    onClick={() => navigate("/servicii")}
                  >
                    Servicii
                  </button>
                </li>
                <li className="flex items-center justify-normal ml-2 gap-2">
                  <CiLink className="text-3xl text-yellow-500" />
                  <button
                    className="hover:text-gray-300"
                    onClick={() => navigate("/produse")}
                  >
                    Produse
                  </button>
                </li>
                <li className="flex items-center justify-normal ml-2 gap-2">
                  <CiLink className="text-3xl text-yellow-500" />
                  <button
                    className="hover:text-gray-300"
                    onClick={() => navigate("/portofoliu")}
                  >
                    Portofoliu
                  </button>
                </li>
                <li className="flex items-center justify-normal ml-2 gap-2">
                  <CiLink className="text-3xl text-yellow-500" />
                  <button
                    className="hover:text-gray-300"
                    onClick={() => navigate("/contact")}
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            <div className="text-left pb-4">
              <h1 className="text-left ml-2 font-serif text-2xl mb-2">
                Contact
              </h1>
              {/* Adresa */}
              <div className="flex items-center pb-4 gap-4 justify-start ml-2">
                <FaLocationDot className="text-3xl text-yellow-600" />
                <div className="text-left">
                  <p className="font-bold">Adresa:</p>
                  <p className="font-thin">Bulevardul Iuliu Maniu 586-590</p>
                </div>
              </div>
              {/* Telefon */}
              <div className="flex items-center pb-4 gap-4 justify-start ml-2">
                <MdAddIcCall className="text-3xl text-yellow-600" />
                <div className="text-left">
                  <p className="font-bold">Telefon:</p>
                  <p className="font-thin">+40 731 321 449</p>
                </div>
              </div>
              {/* E-mail */}
              <div className="flex items-center pb-4 gap-4 justify-start ml-2">
                <IoIosMailUnread className="text-3xl text-yellow-600" />
                <div className="text-left">
                  <p className="font-bold">E-mail:</p>
                  <p className="font-thin">echipa.dezece@yahoo.com</p>
                </div>
              </div>
              <div className=" mt-4">
                <h1 className="text-left ml-2 font-serif text-2xl mb-2">
                  Urmărește-ne și pe:
                </h1>
                <div className="flex items-center pb-4 gap-4 justify-start ml-2">
                  <button>
                    <FaFacebookF className="text-blue-700 text-xl" />
                  </button>
                  <button>
                    <FaInstagram className="text-red-400 text-xl translate-y-0.5" />
                  </button>
                  <button
                    onClick={() =>
                      window.open(
                        "https://www.tiktok.com/@echipadezece",
                        "_blank"
                      )
                    }
                  >
                    <FaTiktok className="text-gray-200 text-xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-yellow-600 h-1"></div>
        <div className="text-center font-thin bg-gray-600 ">
          <p>
            © All rights reserved. Site creat de{" "}
            <button
              className="underline"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/coltan_cristian/",
                  "_blank"
                )
              }
            >
              Colțan Cristian
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
