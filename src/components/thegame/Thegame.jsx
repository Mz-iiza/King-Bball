import React from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Tournament from "./Tournament";
import Lifeskills from "./Lifeskills";
import Team from "./Team";
import Footer from "./Footer";
import "./thegame.css";

const Thegame = () => {
  return (
    <div>
      <Header />
      <Tournament />
      <Lifeskills />
      <Team />
      <Footer />
    </div>
  );
};

export default Thegame;
