import React from "react";
import heroImg from "../../assets/bg-shadow.png";
import crickLogo from "../../assets/banner-main.png";

const HeroBanner = () => {
  return (
    <div className="flex justify-center items-center mt-20 mb-20">
      <div
        className="relative w-full max-w-[1200px] rounded-2xl  p-10 text-center shadow-xl 
                   bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>

        <div className="relative z-10">
          <div className="flex justify-center mb-6">
            <img
              src={crickLogo}
              alt="Cricket Logo"
              className="h-48 w-60 object-contain"
            />
          </div>

          <h1 className="text-white text-2xl md:text-4xl font-bold mb-2">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>

          <p className="text-gray-300 mb-6">Beyond Boundaries Beyond Limits</p>

          <button className="bg-lime-400 text-black font-semibold px-6 py-2 rounded-md shadow-md hover:bg-lime-500 transition">
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
