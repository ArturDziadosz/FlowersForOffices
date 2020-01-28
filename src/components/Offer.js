import React, {Component} from 'react';
import {Link} from 'react-scroll';
import './Offer.scss';


class Offer extends Component {

  handleBigger = e => {

    if (e.currentTarget.style.animation === "800ms linear 0s 1 normal forwards running offerFlex") {
      e.currentTarget.style.animation = "";
      document.querySelectorAll("article.container .row .col-4").forEach(elem => {
        elem.style.left = "0";
      });
    } else {
      document.querySelectorAll("article.container .row .col-4").forEach(elem => {
        elem.style.animation = "";
        elem.style.left = "0";
      });
      if (e.currentTarget.getAttribute("id") === "secondOffer") {
        document.querySelectorAll("article.container .row .col-4").forEach(elem => {
          elem.style.left = "-460px";
        });
      } else if (e.currentTarget.getAttribute("id") === "thirdOffer") {
        document.querySelectorAll("article.container .row .col-4").forEach(elem => {
          elem.style.left = "-920px";
        });
      }
      e.currentTarget.style.animation = "offerFlex 800ms forwards linear";
    }
  };


  render() {
    return (
      <>
        <article className="container" name={"offer"}>
          <div className="row">

            <Link to={"offer"} spy={true} smooth={true} duration={1000} offset={-60} className="col-4"
                  onClick={this.handleBigger} id={"firstOffer"}>

              <div className="article__img"/>
              <h3 className="article__title">FLORYSTYKA OKOLICZNOŚCIOWA</h3>
              <p className="article__text">Oferujemy niepowtarzalne aranżacje kwiatowe, pasujące do charakteru i
                okoliczności przyjęcia. Zadbamy, aby ten dzień był dla Was niezapomniany.</p>
            </Link>
            <Link to={"offer"} spy={true} smooth={true} duration={1000} offset={-60} className="col-4"
                  onClick={this.handleBigger} id={"secondOffer"}>

              <div className="article__img"/>
              <h3 className="article__title">FLORYSTYKA ŚLUBNA</h3>
              <p className="article__text">Zajmujemy się kompleksową oprawą florystyczną ślubu. Stworzymy dla Was
                niezapomniane dekoracje w najważniejszym momencie życia.</p>

            </Link>
            <Link to={"offer"} spy={true} smooth={true} duration={1000} offset={-60} className="col-4"
                  onClick={this.handleBigger} id={"thirdOffer"}>
              <div className="article__img"/>
              <h3 className="article__title">FLORYSTYKA DLA DOMU I FIRMY</h3>
              <p className="article__text">Organizujemy przestrzeń, gdzie nie powinno zabraknąć kwiatów, które wprowadzą
                wyjątkową atmosferę, świeżość i mnóstwo barw.</p>
            </Link>
          </div>
        </article>
      </>
    )
  }
}

export default Offer;