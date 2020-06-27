import React, {Component} from 'react';
import './Hero.scss';

class Hero extends Component {

  render() {
    return (
      <>
        <section className="heroBanner container" name={"header"}>
          <div className="heroBanner__img heroBanner__img--first">
            <div className="heroBanner__img__logo"/>
          </div>
          <div className="heroBanner__img heroBanner__img--second">
            <div className="heroBanner__img__logo"/>
          </div>
        </section>
      </>
    )
  }
}

export default Hero;