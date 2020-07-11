import React, {Component} from 'react';
import './About.scss';

class About extends Component {
  render() {
    return (
      <>
        <article className="container">
          <div className="row about">
            <div className="about__img"/>
            <p className="about__title">KWIATOSTAN <span>–</span> PRACOWNIA ZIELENI</p>
            <p className="about__text">Rośliny powodują, że jesteśmy bliżej natury i dają nam poczucie bezpieczeństwa.
              Mają
              ogromny wpływ na naszą psychikę, samopoczucie i zdrowie. Dlatego tak ważne jest, aby

              przestrzeń wokół nas była wypełniona roślinami.

              Kwiatostan Pracownia Zieleni powstałam z pasji do natury. Naszą misją jest tworzenie

              zielonych, przyjaznych i zdrowych przestrzeni.</p>
            <p className="about__footer">– To wszystko dla Was –</p>
          </div>
        </article>
      </>
    )
  }
}

export default About;