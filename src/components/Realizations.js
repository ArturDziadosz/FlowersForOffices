import React, {Component} from 'react';
import Carousel from 'nuka-carousel';
import photo1 from '../assets/photobox1.jpg';
import photo2 from '../assets/photobox2.jpg';
import photo3 from '../assets/photobox3.jpg';
import './Realizations.scss';

class Realizations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCarousel1: false,
      showCarousel2: false
    }
  }

  handleChange4 = e => {
    e.currentTarget.style.visibility = "hidden";
    e.currentTarget.parentElement.style.flex = "0 1 100%";
    e.currentTarget.parentElement.style.height = "auto";
    if (e.currentTarget.parentElement.nextElementSibling !== null) {
      e.currentTarget.parentElement.nextElementSibling.style.flex = "1 1 50%";
    } else {
      e.currentTarget.parentElement.previousElementSibling.style.flex = "1 1 50%";
    }
    setTimeout(() => {
      this.setState({
        showCarousel2: true
      })
    },850);
  };

  handleChange3 = e => {
    e.currentTarget.style.visibility = "hidden";
    e.currentTarget.parentElement.style.flex = "0 1 100%";
    e.currentTarget.parentElement.style.height = "auto";
    if (e.currentTarget.parentElement.nextElementSibling !== null) {
      e.currentTarget.parentElement.nextElementSibling.style.flex = "1 1 50%";
    } else {
      e.currentTarget.parentElement.previousElementSibling.style.flex = "1 1 50%";
    }
    setTimeout(() => {
      this.setState({
        showCarousel1: true
      })
    },850);
  };

  handleChange2 = e => {
    e.currentTarget.style.visibility = "hidden";
    e.currentTarget.parentElement.style.flex = "0 1 100%";
    e.currentTarget.parentElement.style.height = "auto";
    if (e.currentTarget.parentElement.nextElementSibling !== null) {
      e.currentTarget.parentElement.nextElementSibling.style.flex = "1 1 50%";
    } else {
      e.currentTarget.parentElement.previousElementSibling.style.flex = "1 1 50%";
    }
    e.currentTarget.nextElementSibling.style.display = "block";
  };

  handleChange1 = e => {
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
                <div className="realizations__project" onClick={this.handleChange1}>
                  <i className="fas fa-search"/>
                </div>
                <Carousel>
                  <img src={photo1} alt={"alt"}/>
                  <img src={photo2} alt={"alt"}/>
                  <img src={photo3} alt={"alt"}/>
                </Carousel>
              </div>
              <div className="realizations__box">
                <div className="realizations__project" onClick={this.handleChange1}>
                  <i className="fas fa-search"/>
                </div>
                <Carousel>
                  <img src={photo1} alt={"alt"}/>
                  <img src={photo2} alt={"alt"}/>
                  <img src={photo3} alt={"alt"}/>
                </Carousel>
              </div>
            </div>
            <div className="row">
              <div className="realizations__box">
                <div className="realizations__project" onClick={this.handleChange3}>
                  <i className="fas fa-search"/>
                </div>
                <Carousel style={this.state.showCarousel1 ? {display: "block"} : {display: "none"}}>
                  <img src={photo1} alt={"alt"}/>
                  <img src={photo2} alt={"alt"}/>
                  <img src={photo3} alt={"alt"}/>
                </Carousel>
                <div style={this.state.showCarousel1 ? {position: "absolute", zIndex: "-1"} : {}} className={"testing"}/>
              </div>
              <div className="realizations__box">
                <div className="realizations__project" onClick={this.handleChange4}>
                  <i className="fas fa-search"/>
                </div>
                <Carousel style={this.state.showCarousel2 ? {display: "block"} : {display: "none"}}>
                  <img src={photo1} alt={"alt"}/>
                  <img src={photo2} alt={"alt"}/>
                  <img src={photo3} alt={"alt"}/>
                </Carousel>
                <div style={this.state.showCarousel2 ? {position: "absolute", zIndex: "-1"} : {}} className={"testing"}/>
              </div>
            </div>
            <div className="row">
              <div className="realizations__box">
                <div className="realizations__project" onClick={this.handleChange2}>
                  <i className="fas fa-search"/>
                </div>
                <Carousel style={{display: "none"}}>
                  <img src={photo1} alt={"alt"}/>
                  <img src={photo2} alt={"alt"}/>
                  <img src={photo3} alt={"alt"}/>
                </Carousel>
              </div>
              <div className="realizations__box">
                <div className="realizations__project" onClick={this.handleChange2}>
                  <i className="fas fa-search"/>
                </div>
                <Carousel style={{display: "none"}}>
                  <img src={photo1} alt={"alt"}/>
                  <img src={photo2} alt={"alt"}/>
                  <img src={photo3} alt={"alt"}/>
                </Carousel>
              </div>
            </div>
            <div className="row">
              <div className="realizations__box" style={{height: "auto"}}>
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