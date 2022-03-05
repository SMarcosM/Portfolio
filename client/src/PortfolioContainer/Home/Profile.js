import React from 'react';
import Typical from 'react-typical';

export default function Profile(){
  return (
    <div className="profile-container">
        <div className="profile-parent">
          <div className="profile-details">
            <div className="colz">
              <div className="colz-icon">
                <a href="#">
                  <i className="fa fa-facebook-square"></i> 
                </a>
                <a href="#">
                  <i className="fa fa-google-plus-square"></i> 
                </a>
                <a href="#">
                  <i className="fa fa-instagram-square"></i> 
                </a>
                <a href="#">
                  <i className="fa fa-youtube-square"></i> 
                </a> 
                <a href="#">
                  <i className="fa fa-twitter"></i> 
                </a>              
              </div>
            </div>
            <div className="profile-detals-name">
              <span className="primary-text">
                {" "}
                Olá, eu sou <span className="highkighted-text">Sebastião</span>
              </span>
            </div>
            <div className="profile-detals-role">
              <span className="primary-text">
                {" "}
                <h1>
                  {" "}
                    <Typical
                      loop={Infinity}
                      steps={[
                        "Ethusiastic dev 🔴",
                        1500,
                        "Full Stack Developer 💻",
                        1500,
                        "MERN Stack dev 😎",
                        1500,
                        "Cross Platform dev 🌐",
                        1500,
                        "React dev 🌐",
                        1500,
                      ]}
                    />
                </h1>
                <span className="profile-role-tagline">
                      Gosto de construir aplicações backend e frontend.
                </span>
              </span>
            </div>
            <div className="profile-options">
              <button className="btn primary-btn">
                {""}
                Contrate-me{" "}
              </button>
              <a href="cv.pdf" download="Sebastião cv.pdf">
                <button className="btn highlighted-btn">Pega Resumo</button>
              </a>
            </div>
          </div>
          <div className="profile-picture">
            <div className="profile-picture-background">

            </div>
          </div>
        </div>
    </div>
  )
}