import React from "react";


export default function Home() {
  
  return (
    <>
    <div>
    <div className="container">
      <div className="header">
        <div className="row pt-3 pb-3">
          <div className="col-lg-5 custom1">
            <a href="/">
            <img className="logo" src="./pics/logo.jpg" alt="logo"/>
            </a>
            <span className="treaty">treaty</span>
          </div>
          <div className="col-lg-5 custom2">
            <div className="mt-3" style={{marginLeft:'2rem'}}>
            <a href="/" className="link1">Home</a>
            <a href="/" className="link1">About us</a>
            <a href="/" className="link1">Services</a>
            <a href="/" className="link1">Contact us</a>
            </div>
          </div>
          <div className="col-lg-2 custom3">
            <button className="btn1" type="submit">Login / Register</button>
          </div>
        </div>
      </div>
    </div>
<div className="backg" style={{overflow:'hidden'}}>
  <div className="container">
    <div>
    <div className="text">TREATY HEALTH IS THE GO-TO SYSTEM TO IMPROVE YOUR TEAM'S COMMUNICATION, WHILE</div>
    <div className="text1 col-lg-12 col-md-12 col-sm-12">CONNECTING YOU WITH THE PATIENTS AND FAMILIES YOU SERVE.</div>
    <div className="container" style={{textAlign:"center"}}>
   <div id="carouselExampleIndicators" className="carousel slide"  data-bs-ride="true">
  <div className="carousel-indicators indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
  <div className="carousel-item active">
    <img src="./pics/Hospic_main.png" className="slide_img" alt="pic 1"/>
  </div>
  <div className="carousel-item">
    <img src="./pics/Hospic_main.png" className="slide_img" alt="pic 2"/>
  </div>
  <div className="carousel-item">
    <img src="./pics/Hospic_main.png" className="slide_img" alt="pic 3"/>
  </div>
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
