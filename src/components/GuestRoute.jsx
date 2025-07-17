import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // Importă librăria de animație

import Navbar2 from "./Navbar2.jsx";
import MobileSidebar from "./MobileSidebar.jsx";

const GuestRoute = () => {
  const { sidebarOpen } = useSelector((state) => state.user);

  return (
    <div className="w-full h-screen">
      <Navbar2 />
      <AnimatePresence exitBeforeEnter>
        {sidebarOpen ? (
          <motion.div
            key="sidebar" // Folosește o cheie unică pentru a gestiona tranziția
            initial={{ x: "-100%" }} // Poziția inițială a Sidebar-ului (în afacerea ecranului)
            animate={{ x: 0 }} // Poziția finală
            exit={{ x: "100%" }} // Când Sidebar-ul dispare
            transition={{ duration: 0.3 }} // Durata tranziției
          >
            <MobileSidebar />
          </motion.div>
        ) : (
          <motion.div
            key="outlet"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GuestRoute;
