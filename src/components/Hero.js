import React, {Component} from 'react';
import './Hero.scss';
import photo1 from '../assets/s1.jpg';
import photo2 from '../assets/s2.jpg';

class Hero extends Component {

  render() {
    return (
      <>
        <section className="heroBanner container">
          <img src={photo1} alt="Images of flowers" className="heroBanner__img heroBanner__img--first"/>
          <img src={photo2} alt="Images of flowers" className="heroBanner__img heroBanner__img--second"/>
        </section>
      </>
    )
  }
}

export default Hero;