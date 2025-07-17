import React from "react";
import { useState } from "react";

import { FaLocationDot } from "react-icons/fa6";
import { MdAddIcCall, MdEmail } from "react-icons/md";

import Footer2 from "../components/Footer2.jsx";

export default function ContactForm() {
  const [form, setForm] = useState({
    message: "",
    name: "",
    email: "",
    agree: false,
  });
  const [status, setStatus] = useState("");
  console.log(form);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.agree)
      return alert("Trebuie să fii de acord cu politica de confidențialitate.");

    const res = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("Trimis cu succes!");
      setForm({ message: "", name: "", email: "", agree: false });
    } else {
      setStatus("Eroare la trimitere.");
    }
  };

  return (
    <div>
      <div className="max-w-3xl mx-5 md:mx-auto space-y-4 text-sm font-light mt-24 mb-10">
        <h2 className="text-center text-2xl font-serif text-yellow-600">
          INFORMAȚII UTILE
        </h2>
        <div className="w-full max-w-6xl mx-auto mt-10 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-gray-300">
            <div className="flex-1 px-6 py-6">
              <div className="flex flex-col items-center justify-center">
                <MdAddIcCall className="w-8 h-8 mb-2 text-yellow-600" />
                <span className="uppercase text-sm text-yellow-600 font-semibold">
                  Telefon:
                </span>
                <p className="text-black mt-1">+40 726 240 411</p>
              </div>
            </div>
            <div className="flex-1 px-6 py-6">
              <div className="flex flex-col items-center justify-center">
                <FaLocationDot className="w-8 h-8 mb-2 text-yellow-600" />
                <span className="uppercase text-sm text-yellow-600 font-semibold">
                  Adresă:
                </span>
                <p className="text-black mt-1 text-center">
                  Bulevardul Iuliu Maniu 586-590,{" "}
                  <span className="font-medium">București</span>
                </p>
              </div>
            </div>

            <div className="flex-1 px-6 py-6">
              <div className="flex flex-col items-center justify-center">
                <MdEmail className="w-8 h-8 mb-2 text-yellow-600" />
                <span className="uppercase text-sm text-yellow-600 font-semibold">
                  E-mail:
                </span>
                <p className="text-black mt-1">echipa.dezece@yahoo.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-5 md:mx-auto space-y-4 text-sm font-light  mb-20"
      >
        <h2 className="text-center text-2xl font-serif text-yellow-600">
          FORMULAR DE CONTACT
        </h2>

        <textarea
          name="message"
          placeholder="Mesajul tau"
          className="w-full border border-yellow-600 p-3 h-32 resize-none ring-gray-600/90 transition-colors duration-200"
          value={form.message}
          onChange={handleChange}
        />

        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Nume complet"
            className="w-full border border-yellow-600 p-3"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Adresa de email"
            className="w-full border border-yellow-600 p-3"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center space-x-2 text-xs text-gray-600">
          <input
            type="checkbox"
            name="agree"
            className="text-gray-600"
            checked={form.agree}
            onChange={handleChange}
          />
          <label>
            Sunt de acord ca datele mele personale să fie colectate de către
            DEZECE EXPERTS.
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-500/80  hover:bg-[#d2c5a4] transition-colors duration-200 text-white font-semibold tracking-widest py-3 uppercase"
        >
          Trimite
        </button>

        {status && <p className="text-center text-sm mt-2">{status}</p>}
      </form>
      <Footer2></Footer2>
    </div>
  );
}
