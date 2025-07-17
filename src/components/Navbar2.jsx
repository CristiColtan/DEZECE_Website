import React, { useEffect, useState } from "react";
import { useNavigate, Navigate, useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";

import "../styles/Navbar.css";

import { setOpenSidebar } from "../redux/user/userSlice.js";

import { FaSearch } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";

import Logo from "../assets/logo_final.png";

const Navbar2 = () => {
  const { sidebarOpen } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const linkData = [
    {
      label: "Acasă",
      link: "/acasa",
    },
    {
      label: "Servicii",
      link: "/servicii",
    },
    {
      label: "Produse",
      link: "/produse",
    },
    {
      label: "Portofoliu",
      link: "/portofoliu",
    },
    {
      label: "Contact",
      link: "/contact",
    },
  ];

  const path = location.pathname.split("/")[1];
  //console.log(path);
  const closeSidebar = () => {
    dispatch(setOpenSidebar(false));
  };

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    // Ascunde navbar-ul dacă scrollezi în jos și ai trecut de 50px
    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      setShowNavbar(false);
    } else if (currentScrollY < lastScrollY) {
      setShowNavbar(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const NavLink = ({ el }) => {
    if (el.label === "Contact") {
      return (
        <div className="flip-container w-full">
          <Link
            to={el.link}
            onClick={closeSidebar}
            className={clsx(
              "flip-front flex w-full font-serif gap-2 px-3 py-2 items-center border-2 border-white text-black text-base hover:border-b-yellow-600/70 hover:text-yellow-600/70",
              path === el.link.split("/")[1]
                ? "bg-white border-b-yellow-600/70 text-yellow-600/70 hover:bg-white"
                : ""
            )}
          >
            Contact
          </Link>
          <Link
            to="/contact"
            className="flip-back flex w-full items-center px-3 py-2 border-b-2 border-b-yellow-600/70 text-yellow-600/70"
            onClick={closeSidebar}
          >
            +40 731 321 449
          </Link>
        </div>
      );
    }

    // Pentru celelalte linkuri fără flip
    return (
      <Link
        to={el.link}
        onClick={closeSidebar}
        className={clsx(
          "flex w-full font-serif gap-2 px-3 py-2 items-center border-2 border-white text-black text-base hover:border-b-yellow-600/70 hover:text-yellow-600/70",
          path === el.link.split("/")[1]
            ? "bg-white border-b-yellow-600/70 text-yellow-600/70 hover:bg-white"
            : ""
        )}
      >
        <span className="font-medium">{el.label}</span>
      </Link>
    );
  };

  return (
    <div
      className={clsx(
        "fixed flex justify-between items-center bg-white border-b-2 border-yellow-600 px-4 py-3 2xl:py-4 w-full z-10 top-0 transition-all duration-300 ease-in-out",
        showNavbar ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="flex items-center justify-between w-full pr-5">
        <p
          className="flex flex-row gap-0 md:gap-4 text-3xl md:text-4xl lg:text-5xl
                        transform px-6 shadow-outer text-shadoww pr-16
                        py-2  font-bold text-yellow-600/90 font-serif"
        >
          <span
            className={clsx(sidebarOpen ? "" : "block")}
            onClick={() => navigate("/")}
          >
            DEZECE
          </span>
          <img
            src={Logo}
            className="h-[120px] w-[120px] bg-transparent 
                                 fixed -top-7 left-56 hidden xl:block"
            onClick={() => navigate("/")}
          ></img>
        </p>
        {
          <div className="hidden md:flex flex-row gap-6">
            {linkData.map((link) => (
              <NavLink el={link} key={link.label}></NavLink>
            ))}
          </div>
        }
        {sidebarOpen === true ? (
          <button>
            <MdClose
              className="text-3xl font-medium text-black block md:hidden
                    hover:text-gray-400"
              onClick={() => dispatch(setOpenSidebar(false))}
            />
          </button>
        ) : (
          <button>
            <IoIosMenu
              className="text-3xl font-medium text-black block md:hidden
                    hover:text-gray-400"
              onClick={() => dispatch(setOpenSidebar(true))}
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar2;
