import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './component/pages/Home/Home'
import About from './component/pages/About/About'
import Services from './component/pages/Services/Services'
import Contact from './component/pages/Contact/Contact'
import Navbar from './component/navbar/Navbar'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/contact' element={<Contact/>}/>
     
    
    </Routes>

    </BrowserRouter>
    </>
  )
}

export default App