import React from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import { setOpenSidebar } from "../redux/user/userSlice.js";

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

const Sidebar = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const path = location.pathname.split("/")[1];

  const closeSidebar = () => {
    dispatch(setOpenSidebar(false));
  };

  const NavLink = ({ el }) => {
    return (
      <Link
        to={el.link}
        onClick={closeSidebar}
        className={clsx(
          "z-51 flex font-serif gap-2 px-3 py-2 items-center border-2 border-white  text-black text-base hover:border-b-yellow-600/70 hover:text-yellow-600/70",
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
    <div className="w-full h-full flex flex-col gap-6 px-5 py-1">
      <div className="flex items-center justify-between w-full pr-10">
        <div className="flex-1 flex flex-col gap-y-5 py-8">
          {linkData.map((link) => (
            <NavLink el={link} key={link.label}></NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
