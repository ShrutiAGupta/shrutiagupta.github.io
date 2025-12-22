import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./AlbumIndividual.scss";

const AlbumIndividual = ({
  index,
  albumName,
  albumData,
  isGloballyPlaying,
  onPlayToggle,
  volume,
  setVolume,
}) => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [currentSong, setCurrentSong] = useState(null);
  const [isLocalPlaying, setIsLocalPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [error, setError] = useState(null);
  const audioRef = useRef(null);
  const progressBarRef = useRef(null);

  const [songs, setSongs] = useState(() =>
    [...albumData.songs].sort((a, b) => a.songId - b.songId)
  );

  albumData.songs = songs;

  if (!currentSong) {
    setCurrentSong(albumData.songs[0]);
  }

  useEffect(() => {
    if (!isGloballyPlaying && isLocalPlaying) {
      // If another album started playing, pause this one
      audioRef.current?.pause();
      setIsLocalPlaying(false);
    }
  }, [isGloballyPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      if (audio.currentTime === audio.duration) {
        setIsLocalPlaying(false);
      }
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
      setError(null);
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [currentSong]);

  const [showVolumeControl, setShowVolumeControl] = useState(false);
  const volumeRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (volumeRef.current && !volumeRef.current.contains(event.target)) {
        setShowVolumeControl(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleProgressClick = (e) => {
    if (!duration) return;

    const progressBar = progressBarRef.current;
    const rect = progressBar.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const newTime = pos * duration;

    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const playSong = async (song, restart = null) => {
    const audio = audioRef.current;
    if (!audio) return;

    setError(null);

    if (currentSong && currentSong.songId === song.songId) {
      if (isLocalPlaying && !restart) {
        audio.pause();
        setIsLocalPlaying(false);
        onPlayToggle(null);
      } else if (!isLocalPlaying && !restart) {
        try {
          await audio.play();
          setIsLocalPlaying(true);
          onPlayToggle(albumName);
        } catch (error) {
          console.error("Error playing audio:", error);
          setError(`Playback error: ${error.message}`);
          setIsLocalPlaying(false);
        }
      } else {
        audio.currentTime = 0;
      }
    } else {
      try {
        if (currentSong) {
          audio.pause();
        }
        setCurrentSong(song);

        // Reset the audio element
        audio.currentTime = 0;
        audio.load();
        await audio.play();
        setIsLocalPlaying(true);
        onPlayToggle(albumName);
      } catch (error) {
        console.error("Error playing audio:", error);
        setError(`Playback error: ${error.message}`);
        setIsLocalPlaying(false);
      }
    }
  };

  const handlePrevious = () => {
    if (!currentSong) return;
    const audio = audioRef.current;
    const currentIndex = albumData.songs.findIndex(
      (song) => song.songId === currentSong.songId
    );
    const previousIndex =
      audio.currentTime > 15
        ? currentIndex
        : (currentIndex - 1 + albumData.songs.length) % albumData.songs.length;
    const restart = audio.currentTime > 15 ? true : false;
    playSong(albumData.songs[previousIndex], restart);
  };

  const handleNext = () => {
    if (!currentSong) return;
    const currentIndex = albumData.songs.findIndex(
      (song) => song.songId === currentSong.songId
    );
    const nextIndex = (currentIndex + 1) % albumData.songs.length;
    playSong(albumData.songs[nextIndex]);
  };

  return (
    <div
      className={`single-album py-20 flex w-full justify-between flex-col ${
        index % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div
        className={`flex relative w-4/5 md:w-1/2 min-w-[80%] md:min-w-[50%] h-[200px] md:h-[550px] mx-auto md:mx-0 ${
          index % 2 == 0 ? "md:left-[12%]" : "md:right-[12%]"
        }`}
      >
        <img
          src={albumData.albumCoverImage}
          className="object-cover object-top"
        />
      </div>
      <div
        className={`flex w-4/5 md:w-2/5 md:h-[450px] border-2 border-white md:translate-y-[10%] relative mx-auto md:mx-0 ${
          index % 2 == 0 ? "md:right-[12%]" : "md:left-[12%]"
        }`}
        style={{
          background: albumData.albumBackground,
          color: albumData.albumTitleShade,
        }}
      >
        <div className="w-full flex flex-col">
          <div className="alb-meta">
            <div className="text-3xl md:text-5xl px-5 pt-3 pb-5">
              {albumName}
            </div>
            <div className="alb-desc">{albumData.albumDescription}</div>
          </div>

          <div
            className="list-none p-0 sm:min-h-auto"
            style={{ background: albumData.albumBackground }}
          >
            <ul>
              {albumData.songs.map((song) => (
                <li
                  key={song.songId}
                  style={{
                    background:
                      currentSong?.songId === song.songId
                        ? albumData.albumTitleShade
                        : "",
                    color:
                      currentSong?.songId === song.songId
                        ? albumData.albumBackground
                        : "",
                  }}
                  className={`border border-transparent border-x-3 flex items-center justify-between py-2 px-5 transition-colors duration-200 ease-in-out ${
                    currentSong?.songId === song.songId
                      ? "active bg-opacity-25"
                      : ""
                  }`}
                  onClick={() => playSong(song)}
                >
                  {currentSong?.songId === song.songId && isLocalPlaying ? (
                    <i className="bx bx-pause text-xl mr-3 opacity-80 hover:cursor-pointer"></i>
                  ) : (
                    <i className="bx bx-play text-xl mr-3 opacity-80 hover:cursor-pointer"></i>
                  )}
                  <div className="song-name flex-1 w-full pl-3 hover:cursor-pointer">
                    {song.songName}
                  </div>
                  <div className="opacity-80 text-sm">{song.length}</div>
                </li>
              ))}
            </ul>
          </div>
          {/* Audio Player */}
          <div
            className="audio-player justify-center flex items-center relative md:absolute bg-white w-full bottom-0 left-0 right-0 p-4 z-[1000]"
            style={{ color: albumData.albumBackground }}
          >
            <audio ref={audioRef} preload="metadata">
              {currentSong && (
                <>
                  <source src={currentSong.songFile} type="audio/x-m4a" />
                  <source src={currentSong.songFile} type="audio/mp4" />
                </>
              )}
            </audio>

            {currentSong && (
              <div className="player-controls w-full m-0 mx-auto p-0 px-4 ">
                <div className="progress-bar-full-container flex align-center items-center justify-between">
                  {formatTime(currentTime)}
                  <div
                    className="max-w-[80%] w-[80%] h-[6px] bg-gray-300 rounded-[2px] cursor-pointer my-4 relative progress-container"
                    ref={progressBarRef}
                    onClick={handleProgressClick}
                  >
                    <div
                      className="progress-bar absolute top-0 left-0 h-[6px] group-hover:h-full rounded-[2px] transition-[width] duration-[100ms] ease-linear"
                      style={{
                        width: `${(currentTime / duration) * 100}%`,
                        background: albumData.albumBackground,
                      }}
                    />
                  </div>
                  {formatTime(duration)}
                </div>

                <div className="flex gap-4 justify-center items-center ">
                  <button
                    className="flex items-center justify-center bg-none border-none cursor-pointer p-2 rounded-full transition-all duration-200 ease-in-out hover:bg-gray-200 "
                    onClick={handlePrevious}
                    aria-label="Previous song"
                  >
                    <i className="bx bx-skip-previous text-5xl"></i>
                  </button>

                  <button
                    onClick={() => playSong(currentSong)}
                    className="text-6xl flex items-center justify-center bg-none border-none cursor-pointer p-2 rounded-full transition-all duration-200 ease-in-out hover:bg-gray-200"
                    aria-label={isLocalPlaying ? "Pause" : "Play"}
                  >
                    {isLocalPlaying ? (
                      <i className="bx bx-pause text-5xl"></i>
                    ) : (
                      <i className="bx bx-play text-5xl"></i>
                    )}
                  </button>

                  <button
                    className="flex items-center justify-center bg-none border-none cursor-pointer p-2 rounded-full transition-all duration-200 ease-in-out hover:bg-gray-200"
                    onClick={handleNext}
                    aria-label="Next song"
                  >
                    <i className="bx bx-skip-next text-5xl"></i>
                  </button>

                      {/* Sound Icon */}
                  {/* <div className="flex items-center gap-2 mt-4 px-4">
                    <div className="relative">
                      <button
                        onClick={() => setShowVolumeControl((prev) => !prev)}
                        className="p-2 rounded-full hover:bg-gray-200"
                        aria-label="Toggle volume slider"
                      >
                        <i className="bx bx-volume-full text-3xl"></i>
                      </button>

                      {showVolumeControl && (
                        <div
                          ref={volumeRef}
                          className="absolute bottom-[120%] left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 shadow-lg rounded-md px-3 py-2 z-[9999] h-[120px] flex items-center justify-center"
                        >
                          <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={volume}
                            onChange={(e) =>
                              setVolume(parseFloat(e.target.value))
                            }
                            className="w-[100px] h-[6px] transform -rotate-90 origin-center cursor-pointer"
                          />
                        </div>
                      )}
                    </div>
                  </div> */}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumIndividual;
