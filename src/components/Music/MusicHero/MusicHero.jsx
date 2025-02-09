import React, { useState, useEffect } from "react";
import "../Music.scss";

const MusicHero = () => {
  return (
    <>
      <div class="relative h-screen flex items-center justify-center overflow-hidden">
        <div class="text-center space-y-4 transition-all duration-500 hover:-translate-y-2">
          <h1 class="text-7xl text-white font-light tracking-wider transition-all duration-300 hover:text-gray-300 flex flex-col md:flex-row">
            <span className="hero-1 font-bold">SOUND</span>
            <span className="point-sep"><i class='bx bxs-circle text-xs mx-2 align-middle md:align-baseline'></i></span>

            <span className="hero-2 italic">SOUL</span>
            <span className="point-sep"><i class='bx bxs-circle text-xs mx-2 align-middle md:align-baseline'></i></span>

            <span className="hero-3">STORIES</span>

            {/* SOUND.SOUL.STORIES */}
          </h1>
          <div class="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-50"></div>
          <p class="text-gray-400 text-lg transition-opacity duration-300 hover:opacity-100">
            Where every note tells a story
          </p>
        </div>
      </div>
    </>
  );
};
export default MusicHero;
