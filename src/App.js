import React, {   useEffect } from 'react';
import { Begin } from "./jsx/Begin"
import { Route, Routes } from 'react-router';
import Navbar from "./componentes/Navbar"
 
import Aos from 'aos'
import "aos/dist/aos.css"


import "./index.css"
import Calculadora from './componentes/Calculadora';



function App() {


  useEffect(() => {
    Aos.init({ duration: 2000, disable: "mobile", once: true })
  }, [])



  return (
    <div className='bodyIndex' id="walpaper">


      <Navbar />


      <Routes>
        <Route path="/" element={<Begin />} />
        <Route path="/:jogo/:tipoJogo" element={<Calculadora />} />

      </Routes>



    </div>

  )
}




export default App;

