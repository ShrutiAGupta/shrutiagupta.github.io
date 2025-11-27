import React, { useState, useEffect } from "react";
import "./Music.scss";
import { musicData } from "../../data/musicData";
import AlbumIndividual from "./AlbumIndividual/AlbumIndividual";
import MusicHero from "./MusicHero/MusicHero";

const Music = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [playingAlbum, setPlayingAlbum] = useState(null);
  const [volume, setVolume] = useState(1);

  // Page-level setup
  useEffect(() => {
    const mainContent = document.querySelector(".main-content");
    const header =
      document.querySelector("#header") || document.querySelector("header");
    const footer =
      document.querySelector("#footer") || document.querySelector("footer");

    if (mainContent) {
      mainContent.classList.add("music-active");
      document.body.classList.add("music-page");
    }

    if (header) {
      header.classList.add("transparent-header");
    }

    if (footer) {
      footer.classList.add("transparent-footer");
    }

    return () => {
      if (mainContent) {
        mainContent.classList.remove("music-active");
        document.body.classList.remove("music-page");
      }

      if (header) {
        header.classList.remove("transparent-header");
      }

      if (footer) {
        footer.classList.remove("transparent-footer");
      }
    };
  }, []);

  // 🔑 Use main-content as the scroll source
  useEffect(() => {
    const scrollContainer =
      document.querySelector(".main-content.music-active") ||
      document.querySelector(".main-content");

    if (!scrollContainer) return;

    const handleScroll = () => {
      setScrollPosition(scrollContainer.scrollTop);
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    // initialize so bg position matches where you land
    handleScroll();

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Background moves slower than scroll (= parallax)
  const parallaxTransform = `translateY(-${scrollPosition / 4}px)`;

  const handlePlayToggle = (albumName) => {
    setPlayingAlbum(albumName === null ? null : albumName);
  };

  return (
    <div className="relative w-full min-h-screen music-container">
      {/* Background layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="music-hero absolute w-full h-full min-h-[100vh] transition-transform duration-100 ease-linear bg-repeat bg-[100%_auto]"
          style={{ transform: parallaxTransform }}
        />
        {/* Overlay gradient on top of background */}
        <div className="music-container-cover absolute inset-0" />
      </div>

      {/* Foreground content (scrolls normally with main-content) */}
      <div className="relative z-10">
        <MusicHero />

        <div
          className="min-h-screen bg-music-gradient w-full pt-[50px]"
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
                volume={volume}
                setVolume={setVolume}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
