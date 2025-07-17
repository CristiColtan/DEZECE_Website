import React, { useRef } from "react";
import clsx from "clsx";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Transition } from "@headlessui/react";

import { IoMdClose } from "react-icons/io";

import { setOpenSidebar } from "../redux/user/userSlice.js";

import Sidebar from "./Sidebar.jsx";

const MobileSidebar = () => {
  const { sidebarOpen } = useSelector((state) => state.user);
  const mobileMenuRef = useRef(null);
  const dispatch = useDispatch();

  const closeSidebar = () => {
    dispatch(setOpenSidebar(false));
  };

  return (
    <>
      <Transition
        show={sidebarOpen}
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-150"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        {(ref) => (
          <div
            ref={(node) => (mobileMenuRef.current = node)}
            className={clsx(
              "md:hidden w-full h-full bg-[#f3f3f3] transition-all duration-700 transform top-20 right-0 z-11 fixed",
              sidebarOpen ? "translate-x-0" : "translate-x-full"
            )}
            onClick={() => closeSidebar()}
          >
            <div className="bg-white sm:w-2/4 w-3/4 h-full py-5">
              <div className="-mt-11">
                <Sidebar></Sidebar>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
};

export default MobileSidebar;
