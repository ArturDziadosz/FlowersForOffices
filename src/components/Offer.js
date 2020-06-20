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

            <Link to={"offer"} spy={true} smooth={true} duration={1000} offset={this.state.tightScreen ? -60 : -140}
                  className="col-4"
                  onClick={this.state.tightScreen ? this.handleBiggerColumn : this.handleBigger} id={"firstOffer"}>

              <div className="article__img"/>
              <h3 className="article__title">ROŚLINY ZIELONE</h3>
              <p className="article__text">Oferujemy niepowtarzalne zielone i ekologiczne przestrzenie w biurach i
                domach. Zielone otoczenie
                powoduje, że stajemy się szczęśliwsi, zdrowsi i efektywniejsi.</p>
              <br/>
              <div className={"article__box"} style={this.state.tightScreen ? {display: `block`} : {}}>
                <div>
                  <p className="article__text">Dostarczamy kwiaty i rośliny do Twojego biura bądź domu. Otoczenie, w
                    jakim przebywamy, jego
                    przyjazny zielony wygląd ma ogromny wpływ na naszą efektywność i zdrowie. Przestrzeń pełna roślin
                    zmniejsza napięcie i stres. Tworzymy ekologiczne i antysmogowe otoczenie . Czy wiesz że po wielu
                    latach badań, specjaliści z NASA opublikowali w raporcie &quot;Interior Landscape Plants for Indoor
                    Air
                    Pollution Abatement&quot; listę roślin doniczkowych, które skutecznie oczyszczają powietrze z
                    zanieczyszczeń.</p>
                  {/*<ul className="article__text article__text--list">*/}
                  {/*  <li>Baby Shower</li>*/}
                  {/*  <li>Chrzciny</li>*/}
                  {/*  <li>Urodziny</li>*/}
                  {/*  <li>Komunie Święte</li>*/}
                  {/*  <li>Jubileusze</li>*/}
                  {/*  <li>Inne</li>*/}
                  {/*</ul>*/}
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
              <p className="article__text">Zapraszam do kontaktu</p>
            </Link>
            <Link to={"offer"} spy={true} smooth={true} duration={1000} offset={this.state.tightScreen ? 380 : -140}
                  className="col-4"
                  onClick={this.state.tightScreen ? this.handleBiggerColumn : this.handleBigger} id={"secondOffer"}>

              <div className="article__img"/>
              <h3 className="article__title">SERWIS I PIELĘGNACJA ZIELENI</h3>
              <p className="article__text">Zaopiekujemy się roślinami zielonymi w biurach i innych przestrzeniach.
                Zadbamy o twoje rośliny
                zarówno doraźnie jak i cyklicznie.</p>
              <br/>

              {/*<p className="article__text">Ślub to uroczystość jedyna w swoim rodzaju. Każdy chce, aby ten dzień był*/}
              {/*  wyjątkowy, niepowtarzalny i magiczny. Pracownia Kwiatostan stworzy dla Was dekoracje kwiatowe, które*/}
              {/*  będą pięknym dopełnieniem tego dnia.</p>*/}
              {/*<br/>*/}
              <div className={"article__box"} style={this.state.tightScreen ? {display: `block`} : {}}>
                {/*<div>*/}
                <p className="article__text">Nasza usługa serwisu zieleni polega na cyklicznym rozsadzaniu, przesadzaniu
                  roślin w większe donice
                  czy wymianie wyjałowionej ziemi. Usługa może mieć charakter stałej lub cyklicznej pielęgnacji roślin i
                  kwiatów biurowych. Serwis zieleni obejmuje:</p>
                <ul className="article__text article__text--list">
                  <li>wymianę roślin o złej kondycji,</li>
                  <li>podlewanie i nawożenie roślin i kwiatów,</li>
                  <li>czyszczenie liści, zraszanie roślin,</li>
                  <li>przycinanie roślin, dokładanie lub wymiana podłoża,</li>
                  <li>drenaż i rozsadzenie,</li>
                  <li>ekspozycja roślin na światło,</li>
                  <li>zwalczania chorób.</li>
                </ul>
                {/*</div>*/}
                {/*{this.state.tightScreen ? <br/> : ""}*/}
                {/*<div>*/}

                {/*<p className="article__text">Zapraszam na bezpłatne konsultacje, po których Klient otrzymuje*/}
                {/*  propozycje*/}
                {/*  oferty z zakresem prac. Po akceptacji projektu, zostaje podpisana umowa oraz rezerwujemy termin w*/}
                {/*  którym odbywać będzie się uroczystość.</p>*/}
                {/*</div>*/}
              </div>
              <br/>
              <p className="article__text">Zapraszam do kontaktu</p>
            </Link>
            <Link to={"offer"} spy={true} smooth={true} duration={1000} offset={this.state.tightScreen ? 820 : -140}
                  className="col-4"
                  onClick={this.state.tightScreen ? this.handleBiggerColumn : this.handleBigger} id={"thirdOffer"}>
              <div className="article__img"/>
              <h3 className="article__title">KWIATY CIĘTE I DEKORACJE OKOLICZNOŚCIOWE</h3>
              <p className="article__text">Zapewniamy systematyczną dostawę kwiatów ciętych do biur, hoteli, sklepów i
                domów. Tworzymy
                dekoracje świąteczne i evantowe.</p>
              <br/>
              <div className={"article__box"} style={this.state.tightScreen ? {display: `block`} : {}}>
                {/*<div>*/}
                <p className="article__text">Dostarczmy regularnie kwiaty cięte i kompozycje kwiatowe i dostarczmy je we
                  wskazane miejsce.
                  Współpracujemy zarówno w ramach stałej obsługi jak i na indywidualne zlecenia. Dodatkowo
                  realizujemy okazjonalne zamówienia na dekorację świąteczne takie jak:</p>
                <ul className="article__text article__text--list">
                  <li>śluby i wesela,</li>
                  <li>specjalne rodzinne okazje,</li>
                  <li>spotkania biznesowe,</li>
                  <li>targi i konferencje,</li>
                  <li>dekoracje świąteczne,</li>
                  <li>dzień kobiet,</li>
                  <li>i wiele, wiele innych.</li>
                </ul>
                {/*</div>*/}

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