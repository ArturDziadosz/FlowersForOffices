import React, {Component} from 'react';
import {Link} from 'react-scroll';
import './Offer.scss';

class Offer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tightScreen: false
    }
  }

  componentDidMount() {
    this.checkingInnerWidth();
  }

  checkingInnerWidth = () => {
    if (window.innerWidth < 1000) {
      this.setState({
        tightScreen: true
      })
    }
    else {
      this.setState({
        tightScreen: false
      })
    }

    window.addEventListener("resize", () => {
      document.querySelectorAll("article.container .row .col-4").forEach(elem => {
        elem.style.left = "";
        elem.style.animation = "";
        elem.style.flexBasis = "";
      });

      if (window.innerWidth < 1000) {
        this.setState({
          tightScreen: true
        })
      }
      else {
        this.setState({
          tightScreen: false
        })
      }
    })
  };

  handleBigger = e => {

    if (e.currentTarget.style.animation === "400ms linear 0s 1 normal forwards running offerFlex") {
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
          elem.style.left = "0";
        });
      } else if (e.currentTarget.getAttribute("id") === "thirdOffer") {
        document.querySelectorAll("article.container .row .col-4").forEach(elem => {
          elem.style.left = "-25%";
        });
      } else if (e.currentTarget.getAttribute("id") === "firstOffer") {
        document.querySelectorAll("article.container .row .col-4").forEach(elem => {
          elem.style.left = "25%";
        });
      }
      e.currentTarget.style.animation = "offerFlex 400ms forwards linear";
    }
  };

  handleBiggerColumn = e => {
    if (e.currentTarget.style.flexBasis === "100%") {
      e.currentTarget.style.flexBasis = "";
    } else {
      document.querySelectorAll("article.container .row .col-4").forEach(elem => {
        elem.style.flexBasis = "";
      });
      e.currentTarget.style.flexBasis = "100%";
    }
  };

  render() {
    return (
      <>
        <article className="container" name={"offer"}>
          <div className="row row--offer">

            <Link to={"offer"} spy={true} smooth={true} duration={1000} offset={this.state.tightScreen ? -60 : -140} className="col-4"
                  onClick={this.state.tightScreen ? this.handleBiggerColumn : this.handleBigger} id={"firstOffer"}>

              <div className="article__img"/>
              <h3 className="article__title">FLORYSTYKA OKOLICZNOŚCIOWA</h3>
              <p className="article__text">Oferujemy niepowtarzalne aranżacje kwiatowe, pasujące do charakteru i
                okoliczności przyjęcia. Zadbamy, aby ten dzień był dla Was niezapomniany.</p>
              <br/>
              <div className={"article__box"} style={this.state.tightScreen ? {display: `block`} : {}}>
                <div>
                  <p className="article__text">Pracownia Kwiatostan proponuje rozwiązania na każdą okazję, oferujemy
                    oprawę florystyczną imprez okolicznościowych, takich jak:</p>
                  <ul className="article__text article__text--list">
                    <li>Baby Shower</li>
                    <li>Chrzciny</li>
                    <li>Urodziny</li>
                    <li>Komunie Święte</li>
                    <li>Jubileusze</li>
                    <li>Inne</li>
                  </ul>
                </div>
                {this.state.tightScreen ? <br/> : ""}
                <div>
                  <p className="article__text">Jest również wiele okazji, by obdarować bliską nam osobę pięknymi
                    kwiatami, w naszej ofercie znajdziecie:</p>
                  <ul className="article__text article__text--list">
                    <li>Bukiety okolicznościowe</li>
                    <li>Flower Box, kosze i kompozycje kwiatowe</li>
                    <li>Wianki</li>
                    <li>Dekoracje świąteczne</li>
                  </ul>
                </div>
              </div>
              <br/>
              <p className="article__text">Zapraszam do kontaktu</p>
            </Link>
            <Link to={"offer"} spy={true} smooth={true} duration={1000} offset={this.state.tightScreen ? 380 : -140} className="col-4"
                  onClick={this.state.tightScreen ? this.handleBiggerColumn : this.handleBigger} id={"secondOffer"}>

              <div className="article__img"/>
              <h3 className="article__title">FLORYSTYKA ŚLUBNA</h3>
              <p className="article__text">Zajmujemy się kompleksową oprawą florystyczną ślubu. Stworzymy dla Was
                niezapomniane dekoracje w najważniejszym momencie życia.</p>
              <br/>

              <p className="article__text">Ślub to uroczystość jedyna w swoim rodzaju. Każdy chce, aby ten dzień był
                wyjątkowy, niepowtarzalny i magiczny. Pracownia Kwiatostan stworzy dla Was dekoracje kwiatowe, które
                będą pięknym dopełnieniem tego dnia.</p>
              <br/>
              <div className={"article__box"} style={this.state.tightScreen ? {display: `block`} : {}}>
                <div>
                  <p className="article__text">Oferujemy kompleksową florystykę ślubną:</p>
                  <ul className="article__text article__text--list">
                    <li>Bukiety ślubne</li>
                    <li>Dekoracje sal weselnych</li>
                    <li>Kwiaty na wesele</li>
                    <li>Dekoracje samochodów</li>
                    <li>Dekoracje kościołów</li>
                    <li>Dekoracje ślubne</li>
                    <li>Podziękowania dla rodziców</li>
                  </ul>
                </div>
                {this.state.tightScreen ? <br/> : ""}
                <div>

                  <p className="article__text">Zapraszam na bezpłatne konsultacje, po których Klient otrzymuje
                    propozycje
                    oferty z zakresem prac. Po akceptacji projektu, zostaje podpisana umowa oraz rezerwujemy termin w
                    którym odbywać będzie się uroczystość.</p>
                </div>
              </div>
              <br/>
              <p className="article__text">Zapraszam do kontaktu</p>
            </Link>
            <Link to={"offer"} spy={true} smooth={true} duration={1000} offset={this.state.tightScreen ? 820 : -140} className="col-4"
                  onClick={this.state.tightScreen ? this.handleBiggerColumn : this.handleBigger} id={"thirdOffer"}>
              <div className="article__img"/>
              <h3 className="article__title">FLORYSTYKA DLA DOMU I FIRMY</h3>
              <p className="article__text">Organizujemy przestrzeń, gdzie nie powinno zabraknąć kwiatów, które wprowadzą
                wyjątkową atmosferę, świeżość i mnóstwo barw.</p>
              <br/>
              <div className={"article__box"} style={this.state.tightScreen ? {display: `block`} : {}}>
                <div>

                  <p className="article__text">Pracownia Kwiatostan świadczy usługi florystyczne dla klientów indywidualnych oraz firmowych. Proponujemy dostawę świeżych kwiatów do domu, biura lub restauracji co najmniej raz w tygodniu.</p>
                </div>
                {this.state.tightScreen ? <br/> : ""}
                <div>
                  <p className="article__text">Dodatkowo naszym Klientom oferujemy:</p>
                  <ul className="article__text article__text--list">
                    <li>Kompozycje kwiatowe do recepcji, restauracji, gabinetu, wnętrz hoteli</li>
                    <li>Aranżacje mieszkań prywatnych</li>
                    <li>Dostawa świeżych kwiatów</li>
                    <li>Dekoracje świąteczne i sezonowe</li>
                    <li>Oprawę florystyczną imprez firmowych tj., wigilia firmowa, bankiety</li>
                  </ul>
                </div>

              </div>
              <br/>
              <p className="article__text">Zapraszam do kontaktu</p>
            </Link>
          </div>
        </article>
      </>
    )
  }
}

export default Offer;