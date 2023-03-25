import React from "react";
/*import {Link, NavLink, Route, Routes} from "react-router-dom"*/
import Header from "./Header";
import Officials from "./Officials";
import Contactus from "./Contactus";
import Footer from "./Footer";
import "./contact.css";


const Contact = () => {
 
    return (
      <div>
        <Header />
        <Contactus />
        <Officials />
        <Footer />
      </div>
    );
  };

export default Contact;
