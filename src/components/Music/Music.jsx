import React, { useState, useEffect } from "react";
import "./Music.scss";
import { musicData } from "../../data/musicData";
import AlbumIndividual from "./AlbumIndividual/AlbumIndividual";
import MusicHero from "./MusicHero/MusicHero";

const Music = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [playingAlbum, setPlayingAlbum] = useState(null);

  useEffect(() => {
    const handleScroll = (event) => {
      const container = event.target;
      setScrollPosition(container.scrollTop);
    };

    const scrollContainer = document.querySelector(".scroll-container");
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  // Calculate parallax transform
  // Dividing by 2 means the hero section will move at half the speed of scrolling
  const parallaxTransform = `translateY(-${scrollPosition / 4}px)`;
  const contentTransform = `translateY(${scrollPosition}px)`;

  const handlePlayToggle = (albumName) => {
    setPlayingAlbum(albumName === null ? null : albumName);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden music-container ">
      <div className="absolute inset-0 z-0 transition-transform duration-100 ease-linear">
        <div
          className="music-hero absolute w-full h-full min-h=[100%] z-[2] transition-all duration-[2ms] ease-linear bg-repeat bg-[100%_auto]"
          style={{ transform: parallaxTransform }}
        >
          {/* <img src="assets/img/music-cover.jpg" /> */}
        </div>
      </div>

      <div className="relative z-10 h-screen overflow-y-auto scroll-container">
        <MusicHero />

        <div
          className="min-h-screen main-content w-full overflow-y-auto z-[1] pt-[50px]"
          id="music"
        >
          <div className="max-w-7xl mx-auto">
            {Object.entries(musicData).map(([albumName, albumData], index) => (
              <AlbumIndividual
                key={albumName}
                albumName={albumName}
                albumData={albumData}
                isGloballyPlaying={playingAlbum === albumName}
                onPlayToggle={handlePlayToggle}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Music;
