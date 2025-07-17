import { HiArrowNarrowRight } from "react-icons/hi";

const SystemCard = ({ image, title, onClick }) => (
  <div className="flex flex-row items-center justify-between  w-full">
    <img src={image} alt={title} className="h-28 w-28 object-contain" />

    <div className="flex flex-col  items-end  text-right">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>

      <button
        onClick={onClick}
        className="mt-2 bg-yellow-500 py-2 px-3 flex items-center justify-center
                 hover:bg-yellow-600/90 duration-300 group relative
                 font-serif text-lg sm:text-xl text-white"
      >
        <span className="group-hover:text-transparent">VEZI ȘI!</span>
        <span
          className="absolute left-1/2 top-1/2 transform 
                     -translate-y-1/2 -translate-x-20 opacity-0 
                     group-hover:translate-x-0 text-3xl
                     group-hover:opacity-100 transition-all duration-300"
        >
          <HiArrowNarrowRight />
        </span>
      </button>
    </div>
  </div>
);

export default SystemCard;
