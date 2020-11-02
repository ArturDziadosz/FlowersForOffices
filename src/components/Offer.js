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
    } else {
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
      } else {
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
      if (e.currentTarget.dataset.id === "secondOffer") {
        document.querySelectorAll("article.container .row .col-4").forEach(elem => {
          elem.style.left = "0";
        });
      } else if (e.currentTarget.dataset.id === "thirdOffer") {
        document.querySelectorAll("article.container .row .col-4").forEach(elem => {
          elem.style.left = "-25%";
        });
      } else if (e.currentTarget.dataset.id === "firstOffer") {
        document.querySelectorAll("article.container .row .col-4").forEach(elem => {
          elem.style.left = "25%";
        });
      }
      e.currentTarget.style.animation = "offerFlex 400ms forwards linear";
    }
  };

  handleBiggerColumn = e => {
    if (e.currentTarget.parentElement.style.flex === "1 0 100%") {
      e.currentTarget.parentElement.style.flex = "";
    } else {
      document.querySelectorAll("article.container .row .col-4").forEach(elem => {
        elem.style.flex = "";
      });
      e.currentTarget.parentElement.style.flex = "1 0 100%";
    }

    e.stopPropagation();

    if (e.currentTarget.classList.contains("fa-angle-double-down")) {
      e.currentTarget.classList.remove("fa-angle-double-down");
      e.currentTarget.classList.add("fa-angle-double-up")
    } else {
      e.currentTarget.classList.add("fa-angle-double-down");
      e.currentTarget.classList.remove("fa-angle-double-up")
    }
  };

  render() {
    return (
      <>
        <article className="container" name={"offer"}>
          <div className="row row--offer">

            {this.state.tightScreen ? 

              <div className="col-4" data-id={"firstOffer"}>
                <i className="fas fa-angle-double-down" onClick={this.handleBiggerColumn}></i>
                <div className="article__img"/>
                <h3 className="article__title">ROŚLINY ZIELONE</h3>
                <p className="article__text article__subtitle">Oferujemy niepowtarzalne zielone i ekologiczne przestrzenie
                  w biurach i
                  domach. Zielone otoczenie
                  powoduje, że stajemy się szczęśliwsi, zdrowsi i efektywniejsi.</p>
                <div className="article__logoImg"/>
                <div className={"article__box"} style={{display: `block`}}>
                  <div>
                    <p className="article__text">Dostarczamy kwiaty i rośliny do Twojego biura bądź domu. Otoczenie, w
                      jakim przebywamy, jego
                      przyjazny zielony wygląd ma ogromny wpływ na naszą efektywność i zdrowie. Przestrzeń pełna roślin
                      zmniejsza napięcie i stres. Tworzymy ekologiczne i antysmogowe otoczenie . Czy wiesz że po wielu
                      latach badań, specjaliści z NASA opublikowali w raporcie &quot;Interior Landscape Plants for Indoor
                      Air
                      Pollution Abatement&quot; listę roślin doniczkowych, które skutecznie oczyszczają powietrze z
                      zanieczyszczeń.</p>
                  </div>
                  <br/>
                  <div>
                    <p className="article__text article__text--underlined">Jak działamy</p>
                    <ol className="article__text article__text--list">
                      <li>Pierwsze spotkanie to ocena warunków i możliwości lokalizacji roślin z uwzględnieniem
                        indywidualnych preferencji klienta. Ustalamy dobór kolorystyki i rodzaj pojemników na rośliny.
                      </li>
                      <li>Na podstawie uzyskanych informacji przygotowujemy kosztorys przedsięwzięcia</li>
                      <li>Przygotowujemy rośliny w naszej Pracowni, gdzie dobieramy rośliny, nasadzamy je do wybranych
                        pojemników.
                      </li>
                      <li>Przygotowane rośliny dostarczamy pod wskazane miejsce i zajmujemy się ich aranżacją w
                        przestrzeni.
                      </li>
                      <li>Dostarczamy instrukcję podlewania i pielęgnacji roślin i oferujemy usługę serwisu, obejmującą
                        kompleksową pielęgnację roślin ze szczególnym uwzględnieniem nawożenia, uzupełnienia i wymiany
                        podłoża.
                      </li>
                    </ol>
                  </div>
                </div>
                <br/>
                <p className="article__text">Zapraszamy do kontaktu</p>
              </div>

            :

              <Link to={"offer"} spy={true} smooth={true} duration={1000} offset={-40}
                  className="col-4"
                  onClick={this.handleBigger} 
                  data-id={"firstOffer"}>

                <div className="article__img"/>
                <h3 className="article__title">ROŚLINY ZIELONE</h3>
                <p className="article__text article__subtitle">Oferujemy niepowtarzalne zielone i ekologiczne przestrzenie
                  w biurach i
                  domach. Zielone otoczenie
                  powoduje, że stajemy się szczęśliwsi, zdrowsi i efektywniejsi.</p>
                <div className="article__logoImg"/>
                <div className={"article__box"}>
                  <div>
                    <p className="article__text">Dostarczamy kwiaty i rośliny do Twojego biura bądź domu. Otoczenie, w
                      jakim przebywamy, jego
                      przyjazny zielony wygląd ma ogromny wpływ na naszą efektywność i zdrowie. Przestrzeń pełna roślin
                      zmniejsza napięcie i stres. Tworzymy ekologiczne i antysmogowe otoczenie . Czy wiesz że po wielu
                      latach badań, specjaliści z NASA opublikowali w raporcie &quot;Interior Landscape Plants for Indoor
                      Air
                      Pollution Abatement&quot; listę roślin doniczkowych, które skutecznie oczyszczają powietrze z
                      zanieczyszczeń.</p>
                  </div>
                  <br/>
                  <div>
                    <p className="article__text article__text--underlined">Jak działamy</p>
                    <ol className="article__text article__text--list">
                      <li>Pierwsze spotkanie to ocena warunków i możliwości lokalizacji roślin z uwzględnieniem
                        indywidualnych preferencji klienta. Ustalamy dobór kolorystyki i rodzaj pojemników na rośliny.
                      </li>
                      <li>Na podstawie uzyskanych informacji przygotowujemy kosztorys przedsięwzięcia</li>
                      <li>Przygotowujemy rośliny w naszej Pracowni, gdzie dobieramy rośliny, nasadzamy je do wybranych
                        pojemników.
                      </li>
                      <li>Przygotowane rośliny dostarczamy pod wskazane miejsce i zajmujemy się ich aranżacją w
                        przestrzeni.
                      </li>
                      <li>Dostarczamy instrukcję podlewania i pielęgnacji roślin i oferujemy usługę serwisu, obejmującą
                        kompleksową pielęgnację roślin ze szczególnym uwzględnieniem nawożenia, uzupełnienia i wymiany
                        podłoża.
                      </li>
                    </ol>
                  </div>
                </div>
                <br/>
                <p className="article__text">Zapraszamy do kontaktu</p>
              </Link>

            }

            {this.state.tightScreen ? 

              <div className="col-4" data-id={"secondOffer"}>
                <i className="fas fa-angle-double-down" onClick={this.handleBiggerColumn}></i>
                <div className="article__img" name={"offer2"}/>
                <h3 className="article__title">SERWIS I PIELĘGNACJA ZIELENI</h3>
                <p className="article__text article__subtitle">Zaopiekujemy się roślinami zielonymi w biurach i innych
                  przestrzeniach.
                  Zadbamy o twoje rośliny
                  zarówno doraźnie jak i cyklicznie.</p>
                <br/>
                <div className="article__logoImg"/>
                <div className={"article__box"} style={{display: `block`}}>
                  <p className="article__text">Zdrowe rośliny to zdrowe otoczenie. Nasz serwis roślin to więcej niż tylko
                    podlewanie.
                    Gwarantujemy nawożenie, odżywki specjalne, dobór lokalizacji roślin z uwzględnieniem poziomu
                    nasłonecznienia i wilgotności oraz ich czyszczenie. Wiemy o tym, że nie samą wodą żyją rośliny.
                    Na dostarczone przez nas rośliny w trakcie umowy serwisowej udzielamy gwarancji. Serwis zieleni
                    obejmuje:</p>
                  <br/>
                  <ul className="article__text article__text--list">
                    <li>
                      <span className="material-icons">
                      filter_vintage
                      </span>
                      <span>wymianę roślin o złej kondycji,</span>
                    </li>
                    <li>
                      <span className="material-icons">
                      filter_vintage
                      </span>
                      <span>podlewanie i nawożenie roślin i kwiatów,</span></li>
                    <li>
                      <span className="material-icons">
                      filter_vintage
                      </span>
                      <span>czyszczenie liści, zraszanie roślin,</span></li>
                    <li>
                      <span className="material-icons">
                      filter_vintage
                      </span>
                      <span>przycinanie roślin, dokładanie lub wymiana podłoża,</span></li>
                    <li>
                      <span className="material-icons">
                      filter_vintage
                      </span>
                      <span>drenaż i rozsadzenie,</span></li>
                    <li>
                      <span className="material-icons">
                      filter_vintage
                      </span>
                      <span>ekspozycja roślin na światło,</span></li>
                    <li>
                      <span className="material-icons">
                      filter_vintage
                      </span>
                      <span>zwalczania chorób,</span></li>
                    <li>
                      <span className="material-icons">
                      filter_vintage
                      </span>
                      <span>profilaktyczne zabiegi ochronne.</span></li>
                  </ul>
                </div>
                <br/>
                <p className="article__text">Zapraszamy do kontaktu</p>
              </div>

            :

              <Link to={"offer2"} spy={true} smooth={true} duration={1000} offset={-90}
                  className="col-4"
                  onClick={this.handleBigger} data-id={"secondOffer"}>
                <div className="article__img" name={"offer2"}/>
                <h3 className="article__title">SERWIS I PIELĘGNACJA ZIELENI</h3>
                <p className="article__text article__subtitle">Zaopiekujemy się roślinami zielonymi w biurach i innych
                  przestrzeniach.
                  Zadbamy o twoje rośliny
                  zarówno doraźnie jak i cyklicznie.</p>
                <br/>
                <div className="article__logoImg"/>
                <div className={"article__box"}>
                  <p className="article__text">Zdrowe rośliny to zdrowe otoczenie. Nasz serwis roślin to więcej niż tylko
                    podlewanie.
                    Gwarantujemy nawożenie, odżywki specjalne, dobór lokalizacji roślin z uwzględnieniem poziomu
                    nasłonecznienia i wilgotności oraz ich czyszczenie. Wiemy o tym, że nie samą wodą żyją rośliny.
                    Na dostarczone przez nas rośliny w trakcie umowy serwisowej udzielamy gwarancji. Serwis zieleni
                    obejmuje:</p>
                  <br/>
                  <ul className="article__text article__text--list">
                    <li>
                      <span className="material-icons">
                      filter_vintage
                      </span>
                      <span>wymianę roślin o złej kondycji,</span>
                    </li>
                    <li>
                      <span className="material-icons">
                      filter_vintage
                      </span>
                      <span>podlewanie i nawożenie roślin i kwiatów,</span></li>
                    <li>
                      <span className="material-icons">
                      filter_vintage
                      </span>
                      <span>czyszczenie liści, zraszanie roślin,</span></li>
                    <li>
                      <span className="material-icons">
                      filter_vintage
                      </span>
                      <span>przycinanie roślin, dokładanie lub wymiana podłoża,</span></li>
                    <li>
                      <span className="material-icons">
                      filter_vintage
                      </span>
                      <span>drenaż i rozsadzenie,</span></li>
                    <li>
                      <span className="material-icons">
                      filter_vintage
                      </span>
                      <span>ekspozycja roślin na światło,</span></li>
                    <li>
                      <span className="material-icons">
                      filter_vintage
                      </span>
                      <span>zwalczania chorób,</span></li>
                    <li>
                      <span className="material-icons">
                      filter_vintage
                      </span>
                      <span>profilaktyczne zabiegi ochronne.</span></li>
                  </ul>
                </div>
                <br/>
                <p className="article__text">Zapraszamy do kontaktu</p>
              </Link>

            }    

            {this.state.tightScreen ? 

              <div className="col-4" data-id={"thirdOffer"}>
                <i className="fas fa-angle-double-down" onClick={this.handleBiggerColumn}></i>     
                <div className="article__img" name={"offer3"}/>
                <h3 className="article__title">KWIATY CIĘTE I DEKORACJE OKOLICZNOŚCIOWE</h3>
                <p className="article__text article__subtitle">Zapewniamy systematyczną dostawę kwiatów ciętych do biur,
                  hoteli, sklepów i
                  domów. Tworzymy
                  dekoracje świąteczne i evantowe.</p>
                <br/>
                <div className="article__logoImg"/>
                <div className={"article__box"} style={{display: `block`}}>
                  <p className="article__text">Dostarczymy bukiety i kwiaty cięte, flower boxy i inne kompozycie zgodnie z
                    życzeniem klienta.
                    Każdy bukiet dopasujemy do wystroju oraz charakteru gabinetu prezesa, sali konferencyjnej czy
                    recepcji. Współpracujemy w ramach stałej obsługi jak i na indywidualne zlecenia oraz
                    realizujemy na zamówienie dekoracje takie jak:</p>
                  <br/>
                  <ul className="article__text article__text--list">
                    <li>
                      <span className="material-icons">
                        local_florist
                      </span>
                      <span>dekoracje świąteczne,</span>
                    </li>
                    <li>
                      <span className="material-icons">
                        local_florist
                      </span>
                      <span>spotkania firmowe i biznesowe,</span></li>
                    <li>
                      <span className="material-icons">
                        local_florist
                      </span>
                      <span>targi i konferencje,</span></li>
                    <li>
                      <span className="material-icons">
                        local_florist
                      </span>
                      <span>dzień kobiet,</span></li>
                    <li>
                      <span className="material-icons">
                        local_florist
                      </span>
                      <span>specjalne rodzinne okazje,</span></li>
                    <li>
                      <span className="material-icons">
                        local_florist
                      </span>
                      <span>i wiele, wiele innych.</span></li>
                  </ul>
                </div>
                <br/>
                <p className="article__text">Zapraszamy do kontaktu</p>
              </div>

            :

              <Link to={"offer3"} spy={true} smooth={true} duration={1000} offset={-90}
                  className="col-4"
                  onClick={this.handleBigger} data-id={"thirdOffer"}>
                <div className="article__img" name={"offer3"}/>
                <h3 className="article__title">KWIATY CIĘTE I DEKORACJE OKOLICZNOŚCIOWE</h3>
                <p className="article__text article__subtitle">Zapewniamy systematyczną dostawę kwiatów ciętych do biur,
                  hoteli, sklepów i
                  domów. Tworzymy
                  dekoracje świąteczne i evantowe.</p>
                <br/>
                <div className="article__logoImg"/>
                <div className={"article__box"}>
                  <p className="article__text">Dostarczymy bukiety i kwiaty cięte, flower boxy i inne kompozycie zgodnie z
                    życzeniem klienta.
                    Każdy bukiet dopasujemy do wystroju oraz charakteru gabinetu prezesa, sali konferencyjnej czy
                    recepcji. Współpracujemy w ramach stałej obsługi jak i na indywidualne zlecenia oraz
                    realizujemy na zamówienie dekoracje takie jak:</p>
                  <br/>
                  <ul className="article__text article__text--list">
                    <li>
                      <span className="material-icons">
                        local_florist
                      </span>
                      <span>dekoracje świąteczne,</span>
                    </li>
                    <li>
                      <span className="material-icons">
                        local_florist
                      </span>
                      <span>spotkania firmowe i biznesowe,</span></li>
                    <li>
                      <span className="material-icons">
                        local_florist
                      </span>
                      <span>targi i konferencje,</span></li>
                    <li>
                      <span className="material-icons">
                        local_florist
                      </span>
                      <span>dzień kobiet,</span></li>
                    <li>
                      <span className="material-icons">
                        local_florist
                      </span>
                      <span>specjalne rodzinne okazje,</span></li>
                    <li>
                      <span className="material-icons">
                        local_florist
                      </span>
                      <span>i wiele, wiele innych.</span></li>
                  </ul>
                </div>
                <br/>
                <p className="article__text">Zapraszamy do kontaktu</p>
              </Link>

            }
            
          </div>
        </article>
      </>
    )
  }
}

export default Offer;