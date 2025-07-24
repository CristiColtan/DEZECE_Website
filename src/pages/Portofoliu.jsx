import React from "react";
import { useState, useEffect } from "react";

import Modal from "../components/Modal.jsx";
import Footer2 from "../components/Footer2.jsx";
import Vv from "../assets/Vidio.mp4";
import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
  project9,
  project10,
  project11,
  project12,
  project13,
  project14,
  project15,
  project16,
  project17,
  project18,
  project19,
  project20,
  project21,
  others,
} from "../imports/ImportImages.js";

const projects = [
  {
    id: 1,
    title: "PERGOLĂ BIOCLIMATICĂ 1",
    images: project1,
  },
  {
    id: 2,
    title: "PERGOLĂ BIOCLIMATICĂ 2",
    images: project2,
  },
  {
    id: 3,
    title: "ÎNCHIDERE STICLĂ GHILOTINĂ 1",
    images: [project3, Vv],
  },
  {
    id: 4,
    title: "RULOURI EXTERIOARE 1",
    images: project4,
  },
  {
    id: 5,
    title: "ÎNCHIDERE STICLĂ GLISANTĂ 1",
    images: project5,
  },
  {
    id: 6,
    title: "ÎNCHIDERE STICLĂ GHILOTINĂ 2",
    images: project6,
  },
  {
    id: 7,
    title: "ÎNCHIDERE STICLĂ GHILOTINĂ 3",
    images: project7,
  },
  {
    id: 8,
    title: "ÎNCHIDERE STICLĂ GHILOTINĂ 4",
    images: project8,
  },
  {
    id: 9,
    title: "ÎNCHIDERE STICLĂ GHILOTINĂ 5",
    images: project9,
  },
  {
    id: 10,
    title: "ÎNCHIDERE STICLĂ PIVOTANTĂ 1",
    images: project10,
  },
  {
    id: 11,
    title: "PERGOLĂ BIOCLIMATICĂ 3",
    images: project11,
  },
  {
    id: 12,
    title: "PERGOLĂ BIOCLIMATICĂ 4",
    images: project12,
  },
  {
    id: 13,
    title: "RULOURI EXTERIOARE 2",
    images: project13,
  },
  {
    id: 14,
    title: "RULOURI EXTERIOARE 3",
    images: project14,
  },
  {
    id: 15,
    title: "RULOURI EXTERIOARE 4",
    images: project15,
  },
  {
    id: 16,
    title: "RULOURI EXTERIOARE 5",
    images: project16,
  },
  {
    id: 17,
    title: "RULOURI EXTERIOARE 6",
    images: project17,
  },
  {
    id: 18,
    title: "RULOURI EXTERIOARE 7",
    images: project18,
  },
  {
    id: 19,
    title: "RULOURI EXTERIOARE 8",
    images: project19,
  },
  {
    id: 20,
    title: "ÎNCHIDERE STICLĂ GHILOTINĂ 6",
    images: project20,
  },
  {
    id: 21,
    title: "ÎNCHIDERE STICLĂ GHILOTINĂ 7",
    images: project21,
  },
  {
    id: 99,
    title: "ALTE LUCRĂRI EFECTUATE DE NOI",
    images: others,
  },
  //add more
];

export default function Portofoliu() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 9;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  // Calculează indexul de start și stop pentru pagină
  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-12 mt-20">
        <h1 className="text-2xl md:text-4xl font-serif text-center md:mb-10 mb-5 uppercase">
          Portofoliu Clienți
        </h1>
        <div className="w-10 h-1 bg-yellow-600 mx-auto md:mb-10 mb-5" />

        {/* GRID CU PROIECTE */}
        <div className="grid md:grid-cols-3 gap-6">
          {currentProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.images[0]}
                alt={project.title}
                loading="lazy"
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

        {/* PAGINARE */}
        <div className="flex justify-center mt-10 gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNum) => (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`px-4 py-2 rounded ${
                  currentPage === pageNum
                    ? "bg-yellow-600 text-white"
                    : "bg-white border text-gray-800"
                }`}
              >
                {pageNum}
              </button>
            )
          )}
        </div>

        {/* MODAL */}
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
