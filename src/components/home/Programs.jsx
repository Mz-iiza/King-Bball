import React from 'react'
import './home.css'
import {CgGym} from 'react-icons/cg'
import {GiHotMeal} from 'react-icons/gi'
import {FaHeartbeat} from 'react-icons/fa'
import {RiMentalHealthFill} from 'react-icons/ri'





const Programs = () => {
  return (
    <section id="Programs">
      {/*} <h5> You Are What You Eat!</h5>*/}
      {/*<h2> PROGRAMS</h2>*/}

      
      <div className="container  programs_container">
        
        <div className="program-categories">
          <div className="program-categories">
           
          <article className="category">
              <GiHotMeal className="program__icon" />
              <h5>MEAL</h5>
              <small>Breakfast is the most important meak of the day, eat a healthy meal.</small>
            </article>

            <article className="category">
              <CgGym className="program__icon" />
              <h5>Exercise</h5>
              <small>They are so many benefits.</small>
            </article>

            <article className="category">
              <FaHeartbeat className="program__icon" />
              <h5>HEALTH</h5>
              <small>Breakfast is the most important meak of the day, eat a healthy meal.</small>
            </article>

            <article className="category">
              <RiMentalHealthFill className="program__icon" />
              <h5>MIND SET</h5>
              <small>With the right mind set you are unstopable</small>
            </article>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Programs