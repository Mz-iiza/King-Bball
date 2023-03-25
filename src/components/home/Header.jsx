import React from 'react'
import {Link, NavLink, Route, Routes} from "react-router-dom"
import './home.css'
import FORM from '../../assets/FORM.pdf'

const Header = () => {
  return (
    <header>
    <div className="app-container-opacity">
    <div className="container header__container">
    <div className='cta'>
          <a href={FORM} download className='btn'>Download Concent Form</a>
          <a href="#contact" className='btn '>Let's Talk</a>
      </div>
    <div className="navigate">
     <NavLink style={({ isActive }) => isActive ? { color: "var(--color-white)" } : { color: "white" }}><Link className='btn btn-primary' to="/">HOME</Link></NavLink>
     <NavLink style={({ isActive }) => isActive ? { color: "var(--color-white)" } : { color: "white" }}><Link className='btn btn-primary' to="/thegame">THE GAME</Link></NavLink>
     <NavLink style={({ isActive }) => isActive ? { color: "var(--color-white)" } : { color: "white" }}> <Link className='btn btn-primary' to="/contact">Contact Us</Link></NavLink>
     </div>
     <div className="app-name">
    <p>KING BASKETBALL</p>
    <h2>Acceptance Luv & Hope For All</h2>
    </div>
  </div>

  <a href="#diet" className="scroll__down">
          Scroll Down
        </a>
  </div>
  </header>
  )
}

export default Header