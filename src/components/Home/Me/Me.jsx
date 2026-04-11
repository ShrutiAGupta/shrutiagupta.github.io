import React from 'react';
import './Me.scss';

const Me = ({ content }) => {
  return (
    <section id="me" className="">
      <div className="container">
        <div className="row justify-between">
          <div className="col-lg-4">
            <div className="div-img-bg"  style={{'margin-top': content ? '50px' : ''}}>
              <div className="about-img">
                <img src="/assets/img/about.JPG" className="img-responsive" alt="me" />
              </div>
            </div>
          </div>

          <div className={`col-lg-7  ${ content ? 'self-center' : ''}`}>
            { !content ? 
            <div className="about-descr text-left">
              <p className="p-heading">
                I started in tech, but my questions kept getting bigger than the build — why do organizations make the choices they do, and for whom? That curiosity led me to business school.
              </p>
              <p className="home-separator">
                By day I work on strategy; by night I write poems and redesign things that didn't ask to be redesigned. The curiosity was always the same — the room just got bigger.
              </p>
            </div>
            :
            <div className="about-descr text-left">
              {content.map((e) => (
                <p className={e.classes}>
                  {e.text}
                </p>
              ))}
            </div>
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Me;