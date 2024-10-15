import './App.css';
import React from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Foot from './Components/Foot';

function App() {
  return (
    <>
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="services"><Services /></section>
      <section id="contact"><Contact /></section>
      <Foot />
    </>
  );
}

export default App;
