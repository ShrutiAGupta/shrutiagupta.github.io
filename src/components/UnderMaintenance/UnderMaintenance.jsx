import React from "react";
import "./UnderMaintenance.scss";

const UnderMaintenance = () => {
  const year = new Date().getFullYear();

  return (
    <div className="um">
      {/* background accents */}
      <div className="um__blur um__blur--one" />
      <div className="um__blur um__blur--two" />

      <header className="um__header">
        <div className="um__brand">
          <div className="um__logo-circle">SG</div>
          <div className="um__brand-text">
            <span className="um__brand-name">Shruti Gupta</span>
            <span className="um__brand-tagline">building & refining things</span>
          </div>
        </div>
      </header>

      <main className="um__main">
        <section className="um__card">
          <div className="um__pill">
            <span className="um__pill-dot" />
            <span className="um__pill-label">Site refresh in progress</span>
          </div>

          <h1 className="um__title">
            I’m polishing this space<span className="um__title-dot">.</span>
          </h1>

          <p className="um__body">
            The site is currently under maintenance while I ship a cleaner,
            more cohesive version of my portfolio. Check back soon for updated
            projects, case studies, and experiments.
          </p>

          <div className="um__status-row">
            <span className="um__status-light" />
            <span className="um__status-text">Status: quietly shipping ✨</span>
          </div>

          <div className="um__timeline">
            <div className="um__timeline-item um__timeline-item--active">
              <div className="um__timeline-bullet" />
              <div>
                <p className="um__timeline-title">Refactoring layouts</p>
                <p className="um__timeline-sub">
                  Cleaning up sections, hierarchy, and flows.
                </p>
              </div>
            </div>
            <div className="um__timeline-item">
              <div className="um__timeline-bullet" />
              <div>
                <p className="um__timeline-title">Editing case studies</p>
                <p className="um__timeline-sub">
                  Tightening stories, outcomes, and visuals.
                </p>
              </div>
            </div>
            <div className="um__timeline-item">
              <div className="um__timeline-bullet" />
              <div>
                <p className="um__timeline-title">Pushing new build</p>
                <p className="um__timeline-sub">
                  Deploying once it feels portfolio-worthy.
                </p>
              </div>
            </div>
          </div>

          <p className="um__footer-text">
            Want to reach me while this is live?{" "}
            <a href="mailto:hi@shrutigupta.me">hi@shrutigupta.me</a>
          </p>
        </section>

        <aside className="um__meta">
          <div className="um__meta-card">
            <p className="um__meta-label">Now playing</p>
            <p className="um__meta-value">maintenance mode · v{year}</p>
            <div className="um__equalizer">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="um__meta-card">
            <p className="um__meta-label">Last seen</p>
            <p className="um__meta-value">somewhere between product & pixels</p>
          </div>
        </aside>
      </main>

      <footer className="um__footer">
        <span>© {year} Shruti Gupta</span>
        <span className="um__footer-dot" />
        <span>New version loading soon</span>
      </footer>
    </div>
  );
};

export default UnderMaintenance;
