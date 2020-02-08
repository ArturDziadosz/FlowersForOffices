import React, {Component} from 'react';
import './About.scss';

class About extends Component {
  render() {
    return (
      <>
        <article className="container">
          <div className="row about">
            <div className="about__img" />
            <p className="about__title">KWIATOSTAN <span>–</span> PRACOWNIA FLORYSTYCZNA</p>
            <p className="about__text">Pracownia Kwiatostan powstała z pasji do tworzenia pięknych kompozycji oraz z zamiłowania do kwiatów. Stawiamy przede wszystkim na świeżość kwiatów, dobór najlepszych gatunków oraz estetykę całej dekoracji. Liczy się dla nas zadowolenie naszych Klientów, dlatego troszczymy się o każdy detal, tak aby ta najważniejsza uroczystość w życiu zapadła na długo w ich pamięci. Nasze inspiracje czerpiemy z otoczenia oraz najnowszych trendów, nieustannie poszukujemy możliwości rozwoju i doskonalenia warsztatu.</p>
            <p className="about__footer">– To wszystko dla Was –</p>
          </div>
        </article>
      </>
    )
  }
}

export default About;