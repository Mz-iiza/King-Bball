import React from 'react'
import "./home.css";
import k16 from "../../assets/k16.jpg"
import k23 from "../../assets/k23.png"
import k17 from "../../assets/k17.jpg"
import k22 from "../../assets/k22.png"
import k19 from "../../assets/k19.jpg"
import k20 from "../../assets/k20.jpg"
import k25 from "../../assets/k25.png"
import k24 from "../../assets/k24.jpg"
import k18 from "../../assets/k18.jpg"



const data = [
  {
    avater: k16,
    title: 'FRUITS',
  },
  {
    avater: k23,
    title: 'FOOD',
  },
  {
    avater: k17,
    title: 'GREENS',
  },
  {
    avater: k22,
    title: 'FOOD',
  },
  {
    avater: k19,
    title: 'NUTS',
  },
  {
    avater: k20,
    title: 'FOOD',
  },
  {
    avater: k25,
    title: 'FOOD',
  },
  {
    avater: k24,
    title: 'SALAD',
  },
  {
    avater: k18,
    title: 'SALAD',
  }
]
const Diet = () => {
  return (
    <section id="diet">
      <h5> You Are What You Eat!</h5>
      <h2> DIET</h2>

      <div className="container diet_container">
        {data.map(({ avater, title }, index) => {
          return (
            <article key={index} className="thediet">
              <div className="f_avatar">
                <img src={avater} />
              </div>
              <small className="f_title">{title}</small>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Diet
