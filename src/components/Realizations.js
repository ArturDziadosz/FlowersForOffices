import React, {Component} from 'react';
import Carousel from 'nuka-carousel';
import photo1 from '../assets/photobox1.jpg';
import photo2 from '../assets/photobox2.jpg';
import photo3 from '../assets/photobox3.jpg';
import './Realizations.scss';

class Realizations extends Component {

  handleChange = e => {
    e.currentTarget.style.display = "none";
  };

  render() {
    return (
      <>
        <article className="realizations" name={"realization"}>
          <section className="container">
            <div className="row">
              <p className="realizations__title">REALIZACJE</p>
            </div>
            <div className="row">
              <div className="realizations__box">
                <div className="realizations__project">
                  <i className="fas fa-search"/>
                </div>
              </div>
              <div className="realizations__box">
                <div className="realizations__project">
                  <i className="fas fa-search"/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="realizations__box">
                <div className="realizations__project" onClick={this.handleChange}>
                  <i className="fas fa-search"/>
                </div>
                <Carousel>
                  <img src={photo1} alt={"alt"}/>
                  <img src={photo2} alt={"alt"}/>
                  <img src={photo3} alt={"alt"}/>
                </Carousel>
              </div>
              <div className="realizations__box">
                <div className="realizations__project">
                  <i className="fas fa-search"/>
                </div>
              </div>

            </div>
            <div className="row">
              <div className="realizations__box">
                <div className="realizations__project">
                  <i className="fas fa-search"/>
                </div>
              </div>
              <div className="realizations__box">
                <Carousel>
                  <img src={photo1} alt={"alt"}/>
                  <img src={photo2} alt={"alt"}/>
                  <img src={photo3} alt={"alt"}/>
                </Carousel>
              </div>
            </div>
          </section>
        </article>
      </>
    )
  }
}

export default Realizations;