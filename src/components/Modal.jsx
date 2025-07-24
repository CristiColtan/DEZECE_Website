import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Modal({ project, onClose }) {
  const [index, setIndex] = useState(0);
  const total = project.images.length;

  const prev = () => setIndex((index - 1 + total) % total);
  const next = () => setIndex((index + 1) % total);

  const current = project.images[index];
  const isVideo =
    typeof current === "string" && current.match(/\.(mp4|webm|ogg)$/i);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
      <div className="absolute inset-0 z-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl mx-auto z-10">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-3xl hover:text-gray-300 z-20"
        >
          <IoMdClose />
        </button>

        <div className="relative">
          {isVideo ? (
            <video
              src={current}
              controls
              className="w-full max-h-[80vh] rounded"
            />
          ) : (
            <img
              src={current}
              alt={project.title}
              className="w-full max-h-[80vh] object-contain rounded"
            />
          )}

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-3xl px-4 hover:text-yellow-400 z-20"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-3xl px-4 hover:text-yellow-400 z-20"
          >
            <FaChevronRight />
          </button>

          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-2xl z-20">
            {index + 1} / {total}
          </div>
        </div>
      </div>
    </div>
  );
}
