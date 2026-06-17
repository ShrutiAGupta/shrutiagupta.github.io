import React, { useEffect, useRef } from "react";
import "./LyricsPanel.scss";

const Equalizer = ({ accentColor, isActive }) => (
  <div
    className={`equalizer${isActive ? "" : " equalizer--static"}`}
    style={{ "--eq-color": accentColor }}
  >
    <span className="equalizer__bar" />
    <span className="equalizer__bar" />
    <span className="equalizer__bar" />
    <span className="equalizer__bar" />
  </div>
);

const LyricsPanel = ({ isOpen, onClose, song, currentTime, accentColor, bgColor, onSeek, isPlaying }) => {
  const activeLineRef = useRef(null);
  const lyrics = song?.lyrics || [];

  let activeIndex = -1;
  for (let i = lyrics.length - 1; i >= 0; i--) {
    if (lyrics[i].time <= currentTime) {
      activeIndex = i;
      break;
    }
  }

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (activeLineRef.current && isOpen) {
      activeLineRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [activeIndex, isOpen]);

  return (
    <>
      <div
        className={`lyrics-panel${isOpen ? " lyrics-panel--open" : ""}`}
        style={{ "--lyrics-bg": bgColor, "--lyrics-accent": accentColor }}
      >
        <button className="lyrics-panel__close" onClick={onClose} aria-label="Close lyrics">
          <i className="bx bx-x" />
        </button>

        <div className="lyrics-panel__scroll text-center">
          {lyrics.length === 0 ? (
            <p className="lyrics-panel__empty">Lyrics coming soon</p>
          ) : (
            <>
              <div className="lyrics-spacer" />
              {lyrics.map((line, i) => {
                const isActive = i === activeIndex;
                const state = isActive ? "active" : i < activeIndex ? "past" : "future";

                if (line.music) {
                  return (
                    <div
                      key={i}
                      ref={isActive ? activeLineRef : null}
                      className={`lyrics-line lyrics-line--${state}`}
                      onClick={() => onSeek?.(line.time)}
                    >
                      <Equalizer accentColor={accentColor} isActive={isActive && isPlaying} />
                    </div>
                  );
                }

                return (
                  <p
                    key={i}
                    ref={isActive ? activeLineRef : null}
                    className={`lyrics-line lyrics-line--${state}`}
                    style={isActive ? { color: accentColor } : {}}
                    onClick={() => onSeek?.(line.time)}
                  >
                    {line.text}
                  </p>
                );
              })}
              <div className="lyrics-spacer" />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default LyricsPanel;
