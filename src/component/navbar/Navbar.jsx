import React from 'react'
import './navbar.css'
import logo from './../../assets/pubg.png'

import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
      
      <nav className="navbar">

        <div className="logo">
            <img src={logo} alt="" />
        </div>

        <div className="menusection">
            <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>

                </li>
                <li>
                  <Link to="/services">Service</Link>
                </li>
                <li>
                  <Link tO="/contact">Contact</Link>
                </li>
            </ul>
        </div>



      </nav>

    </>
  )
}

export default Navbar
