import React from 'react'
import "./contact.css"
import k13 from "../../assets/k13.png"
import k2 from "../../assets/k2.jpg"
import k3 from "../../assets/k3.jpg"
import k14 from "../../assets/k14.png"


const data = [
  {
    avater: k13,
    name: 'Kingsley Duke',
    title: 'FOUNDER',
  },
  {
    avater: k2,
    name: 'Coach Skambo and King',
    title: 'BASKETBALL COACH',
  },
  {
    avater: k3,
    name: 'Coach Skambo and Coach',
    title: 'BASKETBALL COACH',
  },
  {
    avater: k14,
    name: 'Mela Ralph',
    title: 'CAMP MANAGER',
  }
]
const Officials = () => {
  return (
    <section id="officials">
      <h5> Meet Our</h5>
      <h2>OFFICIALS</h2>

      <div className="container official_container">
        {data.map(({ avater, name, title }, index) => {
          return (
            <article key={index} className="official">
              <div className="k_avatar">
                <img src={avater} />
              </div>
              <h5 className="k_name">{name}</h5>
              <small className="k_title">{title}</small>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Officials