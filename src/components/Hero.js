import React, {Component} from 'react';
import './Hero.scss';
import photo1 from '../assets/s1.jpg';
import photo2 from '../assets/s2.jpg';

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [photo1, photo2, ""],
      currentPhoto: 0
    }
  }

  componentDidMount() {
    let counter = 0;
    this.intervalID = setInterval(() => {
      this.setState({
        currentPhoto: counter
      });
      if (counter === this.state.photos.length-1) {
        counter = 0;
      } else {
        counter++;
      }
    }, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    const {photos, currentPhoto} = this.state;
    return (
      <>
        <section className="heroBanner container">
          <img src={photos[currentPhoto]} alt="Images of flowers" className="heroBanner__img"/>
        </section>
      </>
    )
  }
}

export default Hero;