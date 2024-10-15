import React from "react";

export default function Home() {
  return (
    <>
      <nav className="navbar bg-light fixed-top d-md-none d-lg-none">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            style={{ height: "100%", width:'50%'}}
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link" href="#home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">About us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#services">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">Contact us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="header">
          <div className="row pt-3 pb-3 d-flex">
            <div className="col-lg-5 custom1">
              <a href="#home">
                <img className="logo" src="./pics/logo.jpg" alt="logo" />
              </a>
              <span className="treaty">treaty</span>
            </div>
            
            <div className="col-lg-5 align-items-center justify-content-end custom2 d-none d-lg-block">
              <div style={{ float: "right" }}>
                <a href="#home" className="link1"> Home</a>
                <a href="#about" className="link1">About us</a>
                <a href="#services" className="link1">Services</a>
                <a href="#contact" className="link1">Contact us</a>
              </div>
            </div>
            <div className="col-lg-2 custom3">
              <button className="btn1" type="submit">
                Login / Register
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="backg" style={{ overflow: "hidden" }}>
        <div className="container">
          <div>
            <div className="text">
              TREATY HEALTH IS THE GO-TO SYSTEM TO IMPROVE YOUR TEAM'S
              COMMUNICATION, WHILE
            </div>
            <div className="text1 col-lg-12 col-md-12 col-sm-12">
              CONNECTING YOU WITH THE PATIENTS AND FAMILIES YOU SERVE.
            </div>
            <div className="container" style={{ textAlign: "center" }}>
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
              >
                <div className="carousel-indicators indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button"data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button"data-bs-target="#carouselExampleIndicators"data-bs-slide-to="2"aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="./pics/Hospic_main.png"className="slide_img"alt="pic 1"/>
                  </div>
                  <div className="carousel-item">
                    <img src="./pics/Hospic_main.png" className="slide_img"  alt="pic 2"/>
                  </div>
                  <div className="carousel-item">
                    <img src="./pics/Hospic_main.png" className="slide_img" alt="pic 3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
