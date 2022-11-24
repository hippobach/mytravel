import React from "react";
import beachVideo from "../assets/beachVid.mp4";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        src={beachVideo}
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>
      <div className="absolute w-full h-full top-0 flex flex-col text-white justify-center text-center p-4">
        <h1>First Class Travel</h1>
        <h2 className="py-4">Top 1% Locations Worldwide</h2>
        <form
          className="flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 text-black rounded-md
        bg-gray-100/90
        "
        >
          <div>
            <input
              className="bg-transparent focus:outline-none w-[300px] sm:w-[400px] font-[Poppins]"
              type="text"
              placeholder="Search Destinations"
            />
          </div>
          <div>
            <button>
              <AiOutlineSearch className="icon" size={20} style={{color: '#ffffff'}} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
