import React from "react";
import { useState } from "react";

import Modal from "../components/Modal.jsx";
import Footer2 from "../components/Footer2.jsx";

import P1_1 from "../assets/pvc1.jpg";
import P1_2 from "../assets/pvc2.jpg";
import P1_3 from "../assets/pvc3.jpg";
import P1_4 from "../assets/pvc4.jpg";
import Footer from "../components/Footer.jsx";

const projects = [
  {
    id: 1,
    title: "PERGOLĂ RETRACTABILĂ PVC 1",
    images: [P1_1, P1_2, P1_3, P1_4],
  },
  //add more
];

export default function Portofoliu() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div>
      <div className="container mx-auto px-4 py-12 mt-20">
        <h1 className="text-2xl md:text-4xl font-serif text-center md:mb-10 mb-5 uppercase">
          Portofoliu Clienți
        </h1>
        <div className="w-10 h-1 bg-yellow-600 mx-auto md:mb-10 mb-5" />
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h2 className="font-semibold text-xl mb-1">{project.title}</h2>
                <span className="text-sm text-yellow-600 font-medium">
                  VEZI PROIECT &raquo;
                </span>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <Modal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
      <Footer2 />
    </div>
  );
}
