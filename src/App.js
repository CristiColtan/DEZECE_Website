import "./App.css";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Products from "./pages/Products.jsx";
import Guest from "./pages/Guest";
import Services from "./pages/Services.jsx";
import Renders3D from "./pages/Renders3D.jsx";

import { store, persistor } from "./redux/store.js";
import GuestRoute from "./components/GuestRoute.jsx";
import Contact from "./pages/Contact.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import InchideriGlisante from "./products/InchideriGlisante.jsx";
import InchideriGhilotina from "./products/InchideriGhilotina.jsx";
import InchideriPivot from "./products/InchideriPivot.jsx";
import Bioclimatica from "./products/Bioclimatica.jsx";
import BioclimaticaRetractabila from "./products/BioclimaticaRetractabila.jsx";
import RetractabilaPVC from "./products/RetractabilaPVC.jsx";
import RulouriExterioare from "./products/RulouriExterioare.jsx";
import ZipScreens from "./products/ZipScreens.jsx";
import Portofoliu from "./pages/Portofoliu.jsx";

function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route element={<GuestRoute />}>
                <Route path="/" element={<Navigate to="/acasa" />}></Route>
                <Route path="/acasa" element={<Guest />}></Route>
                <Route path="/servicii" element={<Services />}></Route>
                <Route path="/randari-3d" element={<Renders3D />}></Route>
                <Route path="/produse" element={<Products />}></Route>
                <Route path="/portofoliu" element={<Portofoliu />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route
                  path="/produse/inchideri-glisante"
                  element={<InchideriGlisante />}
                ></Route>
                <Route
                  path="/produse/inchideri-ghilotina"
                  element={<InchideriGhilotina />}
                ></Route>
                <Route
                  path="/produse/inchideri-pivot"
                  element={<InchideriPivot />}
                ></Route>
                <Route
                  path="/produse/bioclimatica"
                  element={<Bioclimatica />}
                ></Route>
                <Route
                  path="/produse/bioclimatica-retractabila"
                  element={<BioclimaticaRetractabila />}
                ></Route>
                <Route
                  path="/produse/retractabila-pvc"
                  element={<RetractabilaPVC />}
                ></Route>
                <Route
                  path="/produse/rulouri"
                  element={<RulouriExterioare />}
                ></Route>
                <Route
                  path="/produse/zipscreens"
                  element={<ZipScreens />}
                ></Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
