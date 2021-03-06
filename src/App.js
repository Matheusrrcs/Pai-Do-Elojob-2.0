import React, { Component, useEffect } from 'react';
import { Begin } from "./jsx/Begin"
import { Route, Routes } from 'react-router';
import Navbar from "./componentes/Navbar"

import Aos from 'aos'
import "aos/dist/aos.css"


import "./index.css"



function App() {


  useEffect(() => {
    Aos.init({ duration: 2000, disable:"mobile", once: true })
  }, [])



  return (
    <div className='bodyIndex' id="walpaper">


      <Navbar />


      <Routes>
        <Route path="/" element={<Begin />} />

      </Routes>

      

    </div>

  )
}




export default App;

