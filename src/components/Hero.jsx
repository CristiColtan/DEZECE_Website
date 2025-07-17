import React from "react";

const Hero = () => {
  return (
    <section>
      <div className=" h-full relative z-49 pl-8 pt-6 -mt-24 md:-mt-8 xl:ml-16">
        <div className="h-full flex justify-center items-center p-4">
          <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div
              ///data-aos="fade-up"
              className="translate-y-72 space-y-2.5 bg-black/60 p-3"
            >
              <h1
                data-aos="fade-up"
                className="text-3xl lg:text-5xl font-bold font-serif text-gray-200/95"
              >
                Închideri din sticlă
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="font-serif lg:text-2xl lg:pr-52 text-gray-200/95"
              >
                Închideri tip ghilotină
              </p>
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="font-serif lg:text-2xl lg:pr-52 text-gray-200/95
                            -mt-5"
              >
                Închideri glisante
              </p>
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="font-serif lg:text-2xl lg:pr-52 text-gray-200/95
                            -mt-5"
              ></p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
