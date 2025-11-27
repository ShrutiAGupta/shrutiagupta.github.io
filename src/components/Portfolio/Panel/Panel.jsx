import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Panel.scss";

const Panel = React.forwardRef(
  ({ year, items, backgroundImage, isActive }, ref) => {
    const navigate = useNavigate();

    const [index, setIndex] = useState(0);

    // background for the whole panel

    const [pendingBg, setPendingBg] = useState(null);
    const [isFading, setIsFading] = useState(false);
    const [bgUrl, setBgUrl] = useState(
      items[0]?.backgroundImage || items[0]?.image || backgroundImage
    );
    const [prevBg, setPrevBg] = useState(null);

    const current = items[index];

    // If year/items/background change (e.g. different route), reset bg
    useEffect(() => {
      const first = items[0];
      setBgUrl(first?.backgroundImage || first?.image || backgroundImage);
      setPrevBg(null);
      setIndex(0);
    }, [items, backgroundImage, year]);

    // When we’re in "fading" mode, wait a bit, then swap bg and fade back in
    useEffect(() => {
      if (!isFading || !pendingBg) return;

      const timeout = setTimeout(() => {
        setBgUrl(pendingBg);
        setPendingBg(null);
        setIsFading(false);
      }, 180); // half of CSS transition (see SCSS below)

      return () => clearTimeout(timeout);
    }, [isFading, pendingBg]);

    useEffect(() => {
  // Only reset when this panel becomes active
  if (!isActive) return;

  const first = items[0];
  if (!first) return;

  const firstBg =
    first.backgroundImage || first.image || backgroundImage;

  setIndex(0);
  setBgUrl(firstBg);
  setPrevBg(null);
}, [isActive, items, backgroundImage]);

    useEffect(() => {
  if (!prevBg) return;

  const timeout = setTimeout(() => {
    setPrevBg(null); // remove old layer after it has faded out
  }, 600); // match CSS animation duration

  return () => clearTimeout(timeout);
}, [prevBg]);

    const goTo = (nextIndex) => {
      if (nextIndex === index) return;

      const item = items[nextIndex];
      const nextBg = item?.backgroundImage || item?.image || backgroundImage;

      setPrevBg(bgUrl); // old background
      setBgUrl(nextBg); // new background
      setIndex(nextIndex);
    };

    const next = () => goTo(Math.min(items.length - 1, index + 1));

    const prev = () => goTo(Math.max(0, index - 1));

    return (
      <div ref={ref} className={`panel ${isActive ? "active" : ""}`}>
        {/* Background for this panel (now driven by bgUrl + fade) */}
        <div className="panel-background">
          {/* Previous bg (fades OUT) */}
          {prevBg && (
            <div
              className="bg-layer bg-layer-prev"
              style={{ backgroundImage: `url(${prevBg})` }}
            />
          )}

          {/* Current bg (fades IN) */}
          <div
            key={bgUrl}
            className="bg-layer bg-layer-cur"
            style={{ backgroundImage: `url(${bgUrl})` }}
          />
        </div>

        <div className="panel-content">
          <div className="clean-content">
            {/* Pagination above title */}
            {items.length > 1 && (
              <div className="mini-pagination">
                <span
                  className={`arrow ${index === 0 ? "disabled" : ""}`}
                  onClick={index > 0 ? prev : undefined}
                >
                  ←
                </span>

                <span className="page-indicator">
                  {index + 1} of {items.length}
                </span>

                <span
                  className={`arrow ${
                    index === items.length - 1 ? "disabled" : ""
                  }`}
                  onClick={index < items.length - 1 ? next : undefined}
                >
                  →
                </span>
              </div>
            )}

            {/* Title + description + read more */}
            <h2 className="clean-title">{current.title}</h2>

            {current.description && (
              <p className="clean-desc">{current.description}</p>
            )}

            {current.link && (
              <div
                className="clean-readmore"
                onClick={() => navigate(current.link)}
              >
                Read More →
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

Panel.displayName = "Panel";

export default Panel;
