import { useState } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/navbar/Navbar'
import PageContainers from './containers/PageContainers'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {


  return (
   <div>
    <PageContainers>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
        </BrowserRouter>
    </PageContainers>
   </div>
  )
}

export default App
