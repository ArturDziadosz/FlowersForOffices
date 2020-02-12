import React, {Component} from 'react';
import Carousel from 'nuka-carousel';
import Gallery from 'react-grid-gallery';
import photo1 from '../assets/photobox1.jpg';
import photo2 from '../assets/photobox2.jpg';
import photo3 from '../assets/photobox3.jpg';
import './Realizations.scss';

const IMAGES =
  [{
    src: photo1,
    thumbnail: photo1,
    thumbnailWidth: 320,
    thumbnailHeight: 320
  },
    {
      src: photo2,
      thumbnail: photo2,
      thumbnailWidth: 320,
      thumbnailHeight: 320
    },
    {
      src: photo3,
      thumbnail: photo3,
      thumbnailWidth: 320,
      thumbnailHeight: 320
    }];

class Realizations extends Component {

/*  handleChange4 = e => {
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
    }, 400);
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
    }, 400);
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
  };*/

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
                <Gallery images={IMAGES} enableImageSelection={false} enableLightbox={true} margin={0}/>
                <i className="fas fa-search"/>
              </div>
              <div className="realizations__box">
                <Gallery images={IMAGES} enableImageSelection={false} enableLightbox={true} margin={0}/>
                <i className="fas fa-search"/>
              </div>
            </div>
            <div className="row">
              <div className="realizations__box">
                <Gallery images={IMAGES} enableImageSelection={false} enableLightbox={true} margin={0}/>
                <i className="fas fa-search"/>
              </div>
              <div className="realizations__box">
                <Gallery images={IMAGES} enableImageSelection={false} enableLightbox={true} margin={0}/>
                <i className="fas fa-search"/>
              </div>
            </div>
            <div className="row">
              <div className="realizations__box">
                <Gallery images={IMAGES} enableImageSelection={false} enableLightbox={true} margin={0}/>
                <i className="fas fa-search"/>
              </div>
              <div className="realizations__box">
                <Gallery images={IMAGES} enableImageSelection={false} enableLightbox={true} margin={0}/>
                <i className="fas fa-search"/>
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