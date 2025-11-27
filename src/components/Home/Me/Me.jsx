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
              Innovative digital solutions developer from India with 3+ years of experience in web application development, UI/UX design, graphic design, data analytics, and business development. 
              </p>
              <p className="home-separator">
               I am passionate about clean, simple, and unique design centered around visual appeal, accessibility and ease.
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