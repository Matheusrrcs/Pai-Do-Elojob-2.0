import React, { Component, useEffect } from 'react';
import { Begin } from "./jsx/Begin"
import { Route, Routes } from 'react-router';
import Navbar from "./componentes/Navbar"
import $ from 'jquery';

import Aos from 'aos'
import "aos/dist/aos.css"


import "./index.css"



function App() {


  useEffect(() => {
    Aos.init({ duration: 2000, disable: 'mobile', once: true })
  }, [])



  return (
    <div className='bodyIndex' id="walpaper">


      <Navbar />


      <Routes>
        <Route path="/" element={<Begin />} />

      </Routes>

      <button class="scroll-top scroll-to-target open" data-target="html" data-aos="fade-down" data-aos-once="false" data-aos-anchor=".conteudo-icone" onClick={() => {
        $('html, body').animate({
          scrollTop: 0
        }, 1000);;
      }}>
        <i class="fas fa-angle-up" ></i>
      </button>

    </div>

  )
}




export default App;

