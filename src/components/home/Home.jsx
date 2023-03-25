import React from 'react'
import {Link, NavLink, Route, Routes} from "react-router-dom"
import Header from './Header'
import Nav from './Nav'
import Programs from './Programs'
import About from './About'
import Diet from './Diet'
import Footer from './Footer'
import './home.css'

const Home = () => {
    return (
      <>
      <div>
            <Header />
            <Nav />
            <Programs />
            <About />
            <Diet />
            <Footer />
    </div>
    </>
      
    )
  }
  
  export default Home