import React from "react";
import "./home.css";
import K1 from "../../assets/k1.jpg";
import { GiCampingTent } from "react-icons/gi";
import {GiTrophyCup } from "react-icons/gi";
import { GiEagleEmblem } from "react-icons/gi";

const About = () => {
  return (

    <section id="about">
      <h5>Get To Know</h5>
      <h2> The FOUNDER</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={K1} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
          
            <article className="about__card">
              <GiCampingTent className="about__icon" />
              <h5> CAMP</h5>
              <small> SEASON 2</small>
            </article>

            <article className="about__card">
              <GiTrophyCup className="about__icon" />
              <h5> TOURNAMENT</h5>
              <small>5+ TEAMS</small>
            </article>

            <article className="about__card">
              <GiEagleEmblem className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>

          <h1>
          The journey has begun and all thanks to god for a great kick off to kings basketball camp.
          the subject of life and the true meaning can be elusive and sometimes based on relevancy. 
          However, when it comes to using different talents that we have been given to extend love, 
          acceptance and hope to the world around us; to me, it is not a matter of relevancy, it is an obligation.
          #KINGS HOPE FOUNDATION CONTINUES...
          </h1>

          <a href="#contact" className="btn btn-primary">
            Let's CAMP!
          </a>
        </div>
      </div>
    </section>
  
  );
};

export default About;
