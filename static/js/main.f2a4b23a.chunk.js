(this.webpackJsonpflowers_for_offices=this.webpackJsonpflowers_for_offices||[]).push([[0],{11:function(e,a,t){e.exports=t.p+"static/media/image1.60163931.jpeg"},111:function(e,a,t){},112:function(e,a,t){},113:function(e,a,t){},114:function(e,a,t){},115:function(e,a,t){},116:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(7),r=t.n(i),c=t(1),o=t(2),s=t(4),m=t(3),u=(t(48),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"contactBar"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",null,l.a.createElement("p",{className:"standardMedia"},l.a.createElement("i",{className:"fas fa-mobile-alt"}),l.a.createElement("span",null,"+ 48 602\xa0415\xa0025")),l.a.createElement("p",{className:"standardMedia"},l.a.createElement("i",{className:"fas fa-envelope"}),l.a.createElement("a",{href:"mailto:kwiatostan.biuro@gmail.com"},"kwiatostan.biuro@gmail.com"))),l.a.createElement("p",{className:"socialMedia"},l.a.createElement("a",{href:"https://www.facebook.com/kwiatostanpracowniaflorystyczna",target:"_blank"},l.a.createElement("i",{className:"fab fa-facebook-square"})),l.a.createElement("a",{href:"https://www.instagram.com/kwiatostan_pracownia/",target:"_blank"},l.a.createElement("i",{className:"fab fa-instagram"})))))))}}]),t}(n.Component)),d=t(17),p=t(6),y=(t(58),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).handleCloseHamburgerMenu=function(){"function"===typeof n.props.handleParentCloseHamburgerMenu&&n.props.handleParentCloseHamburgerMenu()},n.state={topPosition:n.props.topPosition,extraMenu:!1,hamburgerMenuOpen:n.props.hamburgerMenuOpen},n}return Object(o.a)(t,[{key:"componentDidUpdate",value:function(e){e.topPosition!==this.props.topPosition&&this.setState({topPosition:this.props.topPosition})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:this.state.hamburgerMenuOpen?"nav nav--hamburger":"nav",style:this.state.topPosition?{top:"120px"}:{top:"58px"}},l.a.createElement("ul",{className:"nav__list"},l.a.createElement("li",{className:this.state.topPosition?"nav__list__elem":"nav__list__elem nav__list__elem--short"},l.a.createElement(p.Link,{to:"header",spy:!0,smooth:!0,duration:1e3,offset:-250,onClick:this.handleCloseHamburgerMenu},"STRONA G\u0141\xd3WNA")),l.a.createElement("li",{className:this.state.topPosition?"nav__list__elem":"nav__list__elem nav__list__elem--short"},l.a.createElement(p.Link,{to:"offer",spy:!0,smooth:!0,duration:1e3,offset:-80,onClick:this.handleCloseHamburgerMenu},"OFERTA ")),l.a.createElement("li",{className:this.state.topPosition?"nav__list__elem":"nav__list__elem nav__list__elem--short"},l.a.createElement(p.Link,{to:"realization",spy:!0,smooth:!0,duration:1e3,offset:-80,onClick:this.handleCloseHamburgerMenu},"REALIZACJE")),l.a.createElement("li",{className:this.state.topPosition?"nav__list__elem":"nav__list__elem nav__list__elem--short"},l.a.createElement(p.Link,{to:"contact",spy:!0,smooth:!0,duration:1e3,onClick:this.handleCloseHamburgerMenu},"KONTAKT")))))}}]),t}(n.Component)),E=(t(59),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).distanceToTop=function(){var e=r.a.findDOMNode(Object(d.a)(n));window.addEventListener("scroll",(function(){var a=e.nextSibling.offsetTop;window.scrollY>a?n.setState({topPosition:!1}):n.setState({topPosition:!0})}))},n.checkingInnerWidth=function(){window.innerWidth<850?n.setState({tightScreen:!0}):n.setState({tightScreen:!1}),window.addEventListener("resize",(function(){window.innerWidth<850?n.setState({tightScreen:!0}):n.setState({tightScreen:!1})}))},n.handleHamburgerMenu=function(){n.setState({hamburgerMenuOpen:!n.state.hamburgerMenuOpen})},n.closeHamburgerMenu=function(){n.setState({hamburgerMenuOpen:!1})},n.state={topPosition:!0,tightScreen:!1,hamburgerMenuOpen:!1},n}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.distanceToTop(),this.checkingInnerWidth()}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:this.state.topPosition?"header":"header container--short"},l.a.createElement("section",{className:this.state.topPosition?"container":"container container--short"},l.a.createElement("div",{className:"row"},l.a.createElement(p.Link,{to:"header",spy:!0,smooth:!0,duration:1e3,offset:-250},l.a.createElement("div",{className:this.state.topPosition?"header__logo":"header__logo header__logo--alt"})),l.a.createElement(y,{topPosition:this.state.topPosition}),this.state.tightScreen?this.state.hamburgerMenuOpen?l.a.createElement("div",{className:"header__hamburger header__hamburger--open",style:this.state.topPosition?{}:{top:"28px"},onClick:this.handleHamburgerMenu},l.a.createElement("div",{className:"header__hamburger__bar"}),l.a.createElement("div",{className:"header__hamburger__bar"})):l.a.createElement("div",{className:"header__hamburger",style:this.state.topPosition?{}:{top:"23px"},onClick:this.handleHamburgerMenu},l.a.createElement("div",{className:"header__hamburger__bar"})):""),this.state.hamburgerMenuOpen&&this.state.tightScreen?l.a.createElement(y,{topPosition:this.state.topPosition,hamburgerMenuOpen:this.state.hamburgerMenuOpen,handleParentCloseHamburgerMenu:this.closeHamburgerMenu}):"")))}}]),t}(n.Component)),z=(t(60),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"heroBanner container",name:"header"},l.a.createElement("div",{className:"heroBanner__img heroBanner__img--first"},l.a.createElement("div",{className:"heroBanner__img__logo"})),l.a.createElement("div",{className:"heroBanner__img heroBanner__img--second"},l.a.createElement("div",{className:"heroBanner__img__logo"}))))}}]),t}(n.Component)),w=(t(61),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).checkingInnerWidth=function(){window.innerWidth<1e3?n.setState({tightScreen:!0}):n.setState({tightScreen:!1}),window.addEventListener("resize",(function(){document.querySelectorAll("article.container .row .col-4").forEach((function(e){e.style.left="",e.style.animation="",e.style.flexBasis=""})),window.innerWidth<1e3?n.setState({tightScreen:!0}):n.setState({tightScreen:!1})}))},n.handleBigger=function(e){"400ms linear 0s 1 normal forwards running offerFlex"===e.currentTarget.style.animation?(e.currentTarget.style.animation="",document.querySelectorAll("article.container .row .col-4").forEach((function(e){e.style.left="0"}))):(document.querySelectorAll("article.container .row .col-4").forEach((function(e){e.style.animation="",e.style.left="0"})),"secondOffer"===e.currentTarget.getAttribute("id")?document.querySelectorAll("article.container .row .col-4").forEach((function(e){e.style.left="0"})):"thirdOffer"===e.currentTarget.getAttribute("id")?document.querySelectorAll("article.container .row .col-4").forEach((function(e){e.style.left="-25%"})):"firstOffer"===e.currentTarget.getAttribute("id")&&document.querySelectorAll("article.container .row .col-4").forEach((function(e){e.style.left="25%"})),e.currentTarget.style.animation="offerFlex 400ms forwards linear")},n.handleBiggerColumn=function(e){"100%"===e.currentTarget.parentElement.style.flexBasis?e.currentTarget.parentElement.style.flexBasis="":(document.querySelectorAll("article.container .row .col-4").forEach((function(e){e.style.flexBasis=""})),e.currentTarget.parentElement.style.flexBasis="100%"),e.currentTarget.classList.contains("fa-angle-double-down")?(e.currentTarget.classList.remove("fa-angle-double-down"),e.currentTarget.classList.add("fa-angle-double-up")):(e.currentTarget.classList.add("fa-angle-double-down"),e.currentTarget.classList.remove("fa-angle-double-up"))},n.state={tightScreen:!1},n}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.checkingInnerWidth()}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("article",{className:"container",name:"offer"},l.a.createElement("div",{className:"row row--offer"},this.state.tightScreen?l.a.createElement("div",{className:"col-4",id:"firstOffer"},l.a.createElement("i",{className:"fas fa-angle-double-down",onClick:this.handleBiggerColumn}),l.a.createElement("div",{className:"article__img"}),l.a.createElement("h3",{className:"article__title"},"RO\u015aLINY ZIELONE"),l.a.createElement("p",{className:"article__text article__subtitle"},"Oferujemy niepowtarzalne zielone i ekologiczne przestrzenie w biurach i domach. Zielone otoczenie powoduje, \u017ce stajemy si\u0119 szcz\u0119\u015bliwsi, zdrowsi i efektywniejsi."),l.a.createElement("div",{className:"article__logoImg"}),l.a.createElement("div",{className:"article__box",style:{display:"block"}},l.a.createElement("div",null,l.a.createElement("p",{className:"article__text"},'Dostarczamy kwiaty i ro\u015bliny do Twojego biura b\u0105d\u017a domu. Otoczenie, w jakim przebywamy, jego przyjazny zielony wygl\u0105d ma ogromny wp\u0142yw na nasz\u0105 efektywno\u015b\u0107 i zdrowie. Przestrze\u0144 pe\u0142na ro\u015blin zmniejsza napi\u0119cie i stres. Tworzymy ekologiczne i antysmogowe otoczenie . Czy wiesz \u017ce po wielu latach bada\u0144, specjali\u015bci z NASA opublikowali w raporcie "Interior Landscape Plants for Indoor Air Pollution Abatement" list\u0119 ro\u015blin doniczkowych, kt\xf3re skutecznie oczyszczaj\u0105 powietrze z zanieczyszcze\u0144.')),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("p",{className:"article__text article__text--underlined"},"Jak dzia\u0142amy"),l.a.createElement("ol",{className:"article__text article__text--list"},l.a.createElement("li",null,"Pierwsze spotkanie to ocena warunk\xf3w i mo\u017cliwo\u015bci lokalizacji ro\u015blin z uwzgl\u0119dnieniem indywidualnych preferencji klienta. Ustalamy dob\xf3r kolorystyki i rodzaj pojemnik\xf3w na ro\u015bliny."),l.a.createElement("li",null,"Na podstawie uzyskanych informacji przygotowujemy kosztorys przedsi\u0119wzi\u0119cia"),l.a.createElement("li",null,"Przygotowujemy ro\u015bliny w naszej Pracowni, gdzie dobieramy ro\u015bliny, nasadzamy je do wybranych pojemnik\xf3w."),l.a.createElement("li",null,"Przygotowane ro\u015bliny dostarczamy pod wskazane miejsce i zajmujemy si\u0119 ich aran\u017cacj\u0105 w przestrzeni."),l.a.createElement("li",null,"Dostarczamy instrukcj\u0119 podlewania i piel\u0119gnacji ro\u015blin i oferujemy us\u0142ug\u0119 serwisu, obejmuj\u0105c\u0105 kompleksow\u0105 piel\u0119gnacj\u0119 ro\u015blin ze szczeg\xf3lnym uwzgl\u0119dnieniem nawo\u017cenia, uzupe\u0142nienia i wymiany pod\u0142o\u017ca.")))),l.a.createElement("br",null),l.a.createElement("p",{className:"article__text"},"Zapraszamy do kontaktu")):l.a.createElement(p.Link,{to:"offer",spy:!0,smooth:!0,duration:1e3,offset:-40,className:"col-4",onClick:this.handleBigger,id:"firstOffer"},l.a.createElement("div",{className:"article__img"}),l.a.createElement("h3",{className:"article__title"},"RO\u015aLINY ZIELONE"),l.a.createElement("p",{className:"article__text article__subtitle"},"Oferujemy niepowtarzalne zielone i ekologiczne przestrzenie w biurach i domach. Zielone otoczenie powoduje, \u017ce stajemy si\u0119 szcz\u0119\u015bliwsi, zdrowsi i efektywniejsi."),l.a.createElement("div",{className:"article__logoImg"}),l.a.createElement("div",{className:"article__box"},l.a.createElement("div",null,l.a.createElement("p",{className:"article__text"},'Dostarczamy kwiaty i ro\u015bliny do Twojego biura b\u0105d\u017a domu. Otoczenie, w jakim przebywamy, jego przyjazny zielony wygl\u0105d ma ogromny wp\u0142yw na nasz\u0105 efektywno\u015b\u0107 i zdrowie. Przestrze\u0144 pe\u0142na ro\u015blin zmniejsza napi\u0119cie i stres. Tworzymy ekologiczne i antysmogowe otoczenie . Czy wiesz \u017ce po wielu latach bada\u0144, specjali\u015bci z NASA opublikowali w raporcie "Interior Landscape Plants for Indoor Air Pollution Abatement" list\u0119 ro\u015blin doniczkowych, kt\xf3re skutecznie oczyszczaj\u0105 powietrze z zanieczyszcze\u0144.')),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("p",{className:"article__text article__text--underlined"},"Jak dzia\u0142amy"),l.a.createElement("ol",{className:"article__text article__text--list"},l.a.createElement("li",null,"Pierwsze spotkanie to ocena warunk\xf3w i mo\u017cliwo\u015bci lokalizacji ro\u015blin z uwzgl\u0119dnieniem indywidualnych preferencji klienta. Ustalamy dob\xf3r kolorystyki i rodzaj pojemnik\xf3w na ro\u015bliny."),l.a.createElement("li",null,"Na podstawie uzyskanych informacji przygotowujemy kosztorys przedsi\u0119wzi\u0119cia"),l.a.createElement("li",null,"Przygotowujemy ro\u015bliny w naszej Pracowni, gdzie dobieramy ro\u015bliny, nasadzamy je do wybranych pojemnik\xf3w."),l.a.createElement("li",null,"Przygotowane ro\u015bliny dostarczamy pod wskazane miejsce i zajmujemy si\u0119 ich aran\u017cacj\u0105 w przestrzeni."),l.a.createElement("li",null,"Dostarczamy instrukcj\u0119 podlewania i piel\u0119gnacji ro\u015blin i oferujemy us\u0142ug\u0119 serwisu, obejmuj\u0105c\u0105 kompleksow\u0105 piel\u0119gnacj\u0119 ro\u015blin ze szczeg\xf3lnym uwzgl\u0119dnieniem nawo\u017cenia, uzupe\u0142nienia i wymiany pod\u0142o\u017ca.")))),l.a.createElement("br",null),l.a.createElement("p",{className:"article__text"},"Zapraszamy do kontaktu")),this.state.tightScreen?l.a.createElement("div",{className:"col-4",id:"secondOffer"},l.a.createElement("i",{className:"fas fa-angle-double-down",onClick:this.handleBiggerColumn}),l.a.createElement("div",{className:"article__img",name:"offer2"}),l.a.createElement("h3",{className:"article__title"},"SERWIS I PIEL\u0118GNACJA ZIELENI"),l.a.createElement("p",{className:"article__text article__subtitle"},"Zaopiekujemy si\u0119 ro\u015blinami zielonymi w biurach i innych przestrzeniach. Zadbamy o twoje ro\u015bliny zar\xf3wno dora\u017anie jak i cyklicznie."),l.a.createElement("br",null),l.a.createElement("div",{className:"article__logoImg"}),l.a.createElement("div",{className:"article__box",style:{display:"block"}},l.a.createElement("p",{className:"article__text"},"Zdrowe ro\u015bliny to zdrowe otoczenie. Nasz serwis ro\u015blin to wi\u0119cej ni\u017c tylko podlewanie. Gwarantujemy nawo\u017cenie, od\u017cywki specjalne, dob\xf3r lokalizacji ro\u015blin z uwzgl\u0119dnieniem poziomu nas\u0142onecznienia i wilgotno\u015bci oraz ich czyszczenie. Wiemy o tym, \u017ce nie sam\u0105 wod\u0105 \u017cyj\u0105 ro\u015bliny. Na dostarczone przez nas ro\u015bliny w trakcie umowy serwisowej udzielamy gwarancji. Serwis zieleni obejmuje:"),l.a.createElement("br",null),l.a.createElement("ul",{className:"article__text article__text--list"},l.a.createElement("li",null,l.a.createElement("span",{className:"material-icons"},"filter_vintage"),l.a.createElement("span",null,"wymian\u0119 ro\u015blin o z\u0142ej kondycji,")),l.a.createElement("li",null,l.a.createElement("span",{className:"material-icons"},"filter_vintage"),l.a.createElement("span",null,"podlewanie i nawo\u017cenie ro\u015blin i kwiat\xf3w,")),l.a.createElement("li",null,l.a.createElement("span",{className:"material-icons"},"filter_vintage"),l.a.createElement("span",null,"czyszczenie li\u015bci, zraszanie ro\u015blin,")),l.a.createElement("li",null,l.a.createElement("span",{className:"material-icons"},"filter_vintage"),l.a.createElement("span",null,"przycinanie ro\u015blin, dok\u0142adanie lub wymiana pod\u0142o\u017ca,")),l.a.createElement("li",null,l.a.createElement("span",{className:"material-icons"},"filter_vintage"),l.a.createElement("span",null,"drena\u017c i rozsadzenie,")),l.a.createElement("li",null,l.a.createElement("span",{className:"material-icons"},"filter_vintage"),l.a.createElement("span",null,"ekspozycja ro\u015blin na \u015bwiat\u0142o,")),l.a.createElement("li",null,l.a.createElement("span",{className:"material-icons"},"filter_vintage"),l.a.createElement("span",null,"zwalczania chor\xf3b,")),l.a.createElement("li",null,l.a.createElement("span",{className:"material-icons"},"filter_vintage"),l.a.createElement("span",null,"profilaktyczne zabiegi ochronne.")))),l.a.createElement("br",null),l.a.createElement("p",{className:"article__text"},"Zapraszamy do kontaktu")):l.a.createElement(p.Link,{to:"offer2",spy:!0,smooth:!0,duration:1e3,offset:-90,className:"col-4",onClick:this.handleBigger,id:"secondOffer"},l.a.createElement("div",{className:"article__img",name:"offer2"}),l.a.createElement("h3",{className:"article__title"},"SERWIS I PIEL\u0118GNACJA ZIELENI"),l.a.createElement("p",{className:"article__text article__subtitle"},"Zaopiekujemy si\u0119 ro\u015blinami zielonymi w biurach i innych przestrzeniach. Zadbamy o twoje ro\u015bliny zar\xf3wno dora\u017anie jak i cyklicznie."),l.a.createElement("br",null),l.a.createElement("div",{className:"article__logoImg"}),l.a.createElement("div",{className:"article__box"},l.a.createElement("p",{className:"article__text"},"Zdrowe ro\u015bliny to zdrowe otoczenie. Nasz serwis ro\u015blin to wi\u0119cej ni\u017c tylko podlewanie. Gwarantujemy nawo\u017cenie, od\u017cywki specjalne, dob\xf3r lokalizacji ro\u015blin z uwzgl\u0119dnieniem poziomu nas\u0142onecznienia i wilgotno\u015bci oraz ich czyszczenie. Wiemy o tym, \u017ce nie sam\u0105 wod\u0105 \u017cyj\u0105 ro\u015bliny. Na dostarczone przez nas ro\u015bliny w trakcie umowy serwisowej udzielamy gwarancji. Serwis zieleni obejmuje:"),l.a.createElement("br",null),l.a.createElement("ul",{className:"article__text article__text--list"},l.a.createElement("li",null,l.a.createElement("span",{className:"material-icons"},"filter_vintage"),l.a.createElement("span",null,"wymian\u0119 ro\u015blin o z\u0142ej kondycji,")),l.a.createElement("li",null,l.a.createElement("span",{className:"material-icons"},"filter_vintage"),l.a.createElement("span",null,"podlewanie i nawo\u017cenie ro\u015blin i kwiat\xf3w,")),l.a.createElement("li",null,l.a.createElement("span",{className:"material-icons"},"filter_vintage"),l.a.createElement("span",null,"czyszczenie li\u015bci, zraszanie ro\u015blin,")),l.a.createElement("li",null,l.a.createElement("span",{className:"material-icons"},"filter_vintage"),l.a.createElement("span",null,"przycinanie ro\u015blin, dok\u0142adanie lub wymiana pod\u0142o\u017ca,")),l.a.createElement("li",null,l.a.createElement("span",{className:"material-icons"},"filter_vintage"),l.a.createElement("span",null,"drena\u017c i rozsadzenie,")),l.a.createElement("li",null,l.a.createElement("span",{className:"material-icons"},"filter_vintage"),l.a.createElement("span",null,"ekspozycja ro\u015blin na \u015bwiat\u0142o,")),l.a.createElement("li",null,l.a.createElement("span",{className:"material-icons"},"filter_vintage"),l.a.createElement("span",null,"zwalczania chor\xf3b,")),l.a.createElement("li",null,l.a.createElement("span",{className:"material-icons"},"filter_vintage"),l.a.createElement("span",null,"profilaktyczne zabiegi ochronne.")))),l.a.createElement("br",null),l.a.createElement("p",{className:"article__text"},"Zapraszamy do kontaktu")),this.state.tightScreen?l.a.createElement("div",{className:"col-4",id:"thirdOffer"},l.a.createElement("i",{className:"fas fa-angle-double-down",onClick:this.handleBiggerColumn}),l.a.createElement("div",{className:"article__img",name:"offer3"}),l.a.createElement("h3",{className:"article__title"},"KWIATY CI\u0118TE I DEKORACJE OKOLICZNO\u015aCIOWE"),l.a.createElement("p",{className:"article__text article__subtitle"},"Zapewniamy systematyczn\u0105 dostaw\u0119 kwiat\xf3w ci\u0119tych do biur, hoteli, sklep\xf3w i dom\xf3w. Tworzymy dekoracje \u015bwi\u0105teczne i evantowe."),l.a.createElement("br",null),l.a.createElement("div",{className:"article__logoImg"}),l.a.createElement("div",{className:"article__box",style:{display:"block"}},l.a.createElement("p",{className:"article__text"},"Dostarczymy bukiety i kwiaty ci\u0119te, flower boxy i inne kompozycie zgodnie z \u017cyczeniem klienta. Ka\u017cdy bukiet dopasujemy do wystroju oraz charakteru gabinetu prezesa, sali konferencyjnej czy recepcji. Wsp\xf3\u0142pracujemy w ramach sta\u0142ej obs\u0142ugi jak i na indywidualne zlecenia oraz realizujemy na zam\xf3wienie dekoracje takie jak:"),l.a.createElement("br",null),l.a.createElement("ul",{className:"article__text article__text--list"},l.a.createElement("li",null,l.a.createElement("span",{className:"material-icons"},"local_florist"),l.a.createElement("span",null,"dekoracje \u015bwi\u0105teczne,")),l.a.createElement("li",null,l.a.createElement("span",{className:"material-icons"},"local_florist"),l.a.createElement("span",null,"spotkania firmowe i biznesowe,")),l.a.createElement("li",null,l.a.createElement("span",{className:"material-icons"},"local_florist"),l.a.createElement("span",null,"targi i konferencje,")),l.a.createElement("li",null,l.a.createElement("span",{className:"material-icons"},"local_florist"),l.a.createElement("span",null,"dzie\u0144 kobiet,")),l.a.createElement("li",null,l.a.createElement("span",{className:"material-icons"},"local_florist"),l.a.createElement("span",null,"specjalne rodzinne okazje,")),l.a.createElement("li",null,l.a.createElement("span",{className:"material-icons"},"local_florist"),l.a.createElement("span",null,"i wiele, wiele innych.")))),l.a.createElement("br",null),l.a.createElement("p",{className:"article__text"},"Zapraszamy do kontaktu")):l.a.createElement(p.Link,{to:"offer3",spy:!0,smooth:!0,duration:1e3,offset:-90,className:"col-4",onClick:this.handleBigger,id:"thirdOffer"},l.a.createElement("div",{className:"article__img",name:"offer3"}),l.a.createElement("h3",{className:"article__title"},"KWIATY CI\u0118TE I DEKORACJE OKOLICZNO\u015aCIOWE"),l.a.createElement("p",{className:"article__text article__subtitle"},"Zapewniamy systematyczn\u0105 dostaw\u0119 kwiat\xf3w ci\u0119tych do biur, hoteli, sklep\xf3w i dom\xf3w. Tworzymy dekoracje \u015bwi\u0105teczne i evantowe."),l.a.createElement("br",null),l.a.createElement("div",{className:"article__logoImg"}),l.a.createElement("div",{className:"article__box"},l.a.createElement("p",{className:"article__text"},"Dostarczymy bukiety i kwiaty ci\u0119te, flower boxy i inne kompozycie zgodnie z \u017cyczeniem klienta. Ka\u017cdy bukiet dopasujemy do wystroju oraz charakteru gabinetu prezesa, sali konferencyjnej czy recepcji. Wsp\xf3\u0142pracujemy w ramach sta\u0142ej obs\u0142ugi jak i na indywidualne zlecenia oraz realizujemy na zam\xf3wienie dekoracje takie jak:"),l.a.createElement("br",null),l.a.createElement("ul",{className:"article__text article__text--list"},l.a.createElement("li",null,l.a.createElement("span",{className:"material-icons"},"local_florist"),l.a.createElement("span",null,"dekoracje \u015bwi\u0105teczne,")),l.a.createElement("li",null,l.a.createElement("span",{className:"material-icons"},"local_florist"),l.a.createElement("span",null,"spotkania firmowe i biznesowe,")),l.a.createElement("li",null,l.a.createElement("span",{className:"material-icons"},"local_florist"),l.a.createElement("span",null,"targi i konferencje,")),l.a.createElement("li",null,l.a.createElement("span",{className:"material-icons"},"local_florist"),l.a.createElement("span",null,"dzie\u0144 kobiet,")),l.a.createElement("li",null,l.a.createElement("span",{className:"material-icons"},"local_florist"),l.a.createElement("span",null,"specjalne rodzinne okazje,")),l.a.createElement("li",null,l.a.createElement("span",{className:"material-icons"},"local_florist"),l.a.createElement("span",null,"i wiele, wiele innych.")))),l.a.createElement("br",null),l.a.createElement("p",{className:"article__text"},"Zapraszamy do kontaktu")))))}}]),t}(n.Component)),_=(t(62),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("article",{className:"quote"},l.a.createElement("section",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("p",{className:"quote__text"},"\u201eB\u0104D\u0179 ZMIAN\u0104 KT\xd3R\u0104 PRAGNIESZ UJRZE\u0106 W \u015aWIECIE\u201d"),l.a.createElement("p",{className:"quote__author"},"mahatma gandhi"),l.a.createElement(p.Link,{to:"realization",spy:!0,smooth:!0,duration:1e3,offset:-130,className:"linkButton"},l.a.createElement("div",{className:"quoteButton"},"ZOBACZ REALIZACJE"))))))}}]),t}(n.Component)),h=(t(63),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("article",{className:"container"},l.a.createElement("div",{className:"row about"},l.a.createElement("div",{className:"about__img"}),l.a.createElement("p",{className:"about__title"},"KWIATOSTAN ",l.a.createElement("span",null,"\u2013")," PRACOWNIA ZIELENI"),l.a.createElement("p",{className:"about__text"},"Ro\u015bliny powoduj\u0105, \u017ce jeste\u015bmy bli\u017cej natury i daj\u0105 nam poczucie bezpiecze\u0144stwa. Maj\u0105 ogromny wp\u0142yw na nasz\u0105 psychik\u0119, samopoczucie i zdrowie. Dlatego tak wa\u017cne jest, aby przestrze\u0144 wok\xf3\u0142 nas by\u0142a wype\u0142niona ro\u015blinami. Kwiatostan Pracownia Zieleni powsta\u0142a z pasji do natury. Nasz\u0105 misj\u0105 jest tworzenie zielonych, przyjaznych i zdrowych przestrzeni."),l.a.createElement("p",{className:"about__footer"},"\u2013 To wszystko dla Was \u2013"))))}}]),t}(n.Component)),f=t(24),b=t.n(f),g=t(11),k=t.n(g),N=t(12),j=t.n(N),v=t(13),O=t.n(v),x=(t(111),[{src:O.a,thumbnail:O.a,thumbnailWidth:320,thumbnailHeight:320},{src:j.a,thumbnail:j.a,thumbnailWidth:320,thumbnailHeight:320},{src:k.a,thumbnail:k.a,thumbnailWidth:320,thumbnailHeight:320}]),P=[{src:k.a,thumbnail:k.a,thumbnailWidth:320,thumbnailHeight:320},{src:j.a,thumbnail:j.a,thumbnailWidth:320,thumbnailHeight:320},{src:O.a,thumbnail:O.a,thumbnailWidth:320,thumbnailHeight:320}],C=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("article",{className:"realizations",name:"realization"},l.a.createElement("section",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("p",{className:"realizations__title"},"REALIZACJE")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"realizations__box"},l.a.createElement(b.a,{images:P,enableImageSelection:!1,enableLightbox:!0,margin:0})),l.a.createElement("div",{className:"realizations__box"},l.a.createElement(b.a,{images:x,enableImageSelection:!1,enableLightbox:!0,margin:0}))))))}}]),t}(n.Component),S=(t(112),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("article",{className:"video"},l.a.createElement("section",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"video__img"}),l.a.createElement("p",{className:"realizations__title"},"TWOJA W\u0141ASNA ANTYSMOGOWA OCHRONA")),l.a.createElement("div",{className:"video__frame",style:{margin:"0 auto"}},l.a.createElement("div",{style:{position:"relative",height:"0",paddingBottom:"56.25%"}},l.a.createElement("iframe",{src:"https://embed.ted.com/talks/kamal_meattle_how_to_grow_fresh_air?texttrack=pl",width:"854",height:"480",style:{position:"absolute",left:"0",top:"0",width:"100%",height:"100%"},frameBorder:"0",scrolling:"no",title:"ted",allowFullScreen:!0}))))))}}]),t}(n.Component)),I=(t(113),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"contact"},l.a.createElement("section",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"contact__logo"}),l.a.createElement("p",{className:"contact__text"},"Skontaktuj si\u0119 z nami"),l.a.createElement("div",{className:"contact__mediaBox"},l.a.createElement("div",{className:"contact__mediaBox__standardMedia"},l.a.createElement("p",{className:"standardMedia"},l.a.createElement("i",{className:"fas fa-mobile-alt"}),"+ 48 602 415 025 "),l.a.createElement("p",{className:"standardMedia"},l.a.createElement("i",{className:"fas fa-envelope"}),l.a.createElement("a",{href:"mailto:kwiatostan.biuro@gmail.com"},"kwiatostan.biuro@gmail.com"))),l.a.createElement("div",{className:"contact__mediaBox__socialMedia"},l.a.createElement("p",{className:"socialMedia"},l.a.createElement("a",{href:"https://www.facebook.com/kwiatostanpracowniaflorystyczna",target:"_blank"},l.a.createElement("i",{className:"fab fa-facebook-square"}))),l.a.createElement("p",{className:"socialMedia"},l.a.createElement("a",{href:"https://www.instagram.com/kwiatostan_pracownia/",target:"_blank"},l.a.createElement("i",{className:"fab fa-instagram"})))))))))}}]),t}(n.Component)),A=(t(114),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).handleExtraPolicy=function(){n.setState({privacyPolicy:!n.state.privacyPolicy})},n.handleCloseExtraPolicy=function(e){27===e.keyCode&&n.setState({privacyPolicy:!1})},n.state={privacyPolicy:!1},n}return Object(o.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleCloseExtraPolicy,!1)}},{key:"componentWillUnmount",value:function(){document.addEventListener("keydown",this.handleCloseExtraPolicy,!1)}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("footer",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("p",{className:"footer__text"},"Wszelkie prawa zastrze\u017cone ",l.a.createElement("span",null,"|")," ",l.a.createElement("span",{onClick:this.handleExtraPolicy},"Polityka prywatno\u015bci")),l.a.createElement("p",{className:"footer__design"},"Designed by ",l.a.createElement("span",null,l.a.createElement("a",{href:"https://github.com/ArturDziadosz",target:"_blank"},"Artur Dziadosz")))),l.a.createElement("article",{className:"privacyPolicy",style:this.state.privacyPolicy?{display:"block"}:{}},l.a.createElement("header",{className:"privacyPolicy__title"},l.a.createElement("h2",null,"POLITYKA PRYWATNO\u015aCI")),l.a.createElement("h3",{className:"privacyPolicy__subtitle"},"DANE OSOBOWE"),l.a.createElement("p",{className:"privacyPolicy__text"},"1. Administrator danych osobowych"),l.a.createElement("p",{className:"privacyPolicy__subtext"},"Dane kontaktowe:"),l.a.createElement("p",{className:"privacyPolicy__subtext"},"e-mail: kwiatostan.biuro@gmail.com"),l.a.createElement("p",{className:"privacyPolicy__text"},"2. Cel zbierania danych"),l.a.createElement("p",{className:"privacyPolicy__subtext"},"Pa\u0144stwa dane osobowe przes\u0142ane na naszego e-maila lub przez formularz kontaktowy s\u0105 przetwarzane wy\u0142\u0105cznie w celu udzielenia odpowiedzi na zadane pytania i/lub przekazania niezb\u0119dnych informacji."),l.a.createElement("p",{className:"privacyPolicy__subtext"},"Podane w formularzu dane osobowe (imi\u0119, adres e-mail) po klikni\u0119ciu przycisku \u201ewy\u015blij\u201d zostan\u0105 przes\u0142ane bezpo\u015brednio na naszego e-maila."),l.a.createElement("p",{className:"privacyPolicy__subtext"},"Przetwarzane dane w przypadku zainteresowania nasz\u0105 ofert\u0105 b\u0119d\u0105 niezb\u0119dne do zawarcia lub realizacji umowy."),l.a.createElement("p",{className:"privacyPolicy__subtext"},"Przes\u0142ane dane osobowe nie b\u0119d\u0105 wykorzystywane do cel\xf3w marketingowych, nie b\u0119d\u0105 udost\u0119pniane innym podmiotom, oraz nie b\u0119d\u0105 przetwarzane w zautomatyzowany spos\xf3b (profilowanie)."),l.a.createElement("p",{className:"privacyPolicy__text"},"3. Zakres przetwarzanych danych"),l.a.createElement("p",{className:"privacyPolicy__subtext"},"Przetwarzamy nast\u0119puj\u0105cy zakres danych osobowych:"),l.a.createElement("p",{className:"privacyPolicy__subtext"},"\u2013 imi\u0119,"),l.a.createElement("p",{className:"privacyPolicy__subtext"},"\u2013 adres e-mail,"),l.a.createElement("p",{className:"privacyPolicy__subtext"},"\u2013 dodatkowe dane podane dobrowolnie w tre\u015bci wiadomo\u015bci"),l.a.createElement("p",{className:"privacyPolicy__text"},"4. Okres czasu przechowywania danych osobowych"),l.a.createElement("p",{className:"privacyPolicy__subtext"},"Dok\u0142adamy wszelkich stara\u0144 aby ograniczy\u0107 okres przechowywania Pa\u0144stwa danych osobowych."),l.a.createElement("p",{className:"privacyPolicy__subtext"},"Dane przetwarzane w celu udzielenia odpowiedzi na zadane pytania i przekazania niezb\u0119dnych informacji b\u0119d\u0105 przetwarzane przez okres trwania korespondencji."),l.a.createElement("p",{className:"privacyPolicy__subtext"},"W przypadku niebudz\u0105cego w\u0105tpliwo\u015bci zako\u0144czenia korespondencji z Pa\u0144stwa strony, dane zostan\u0105 usuni\u0119te w terminie 7 dni."),l.a.createElement("p",{className:"privacyPolicy__text"},"5. Przys\u0142uguj\u0105ce prawa w stosunku do przetwarzanych danych osobowych"),l.a.createElement("p",{className:"privacyPolicy__subtext"},"Przys\u0142uguje Pa\u0144stwu prawo \u017c\u0105dania dost\u0119pu do swoich danych osobowych, ich sprostowania, usuni\u0119cia lub ograniczenia przetwarzania, prawo do przeniesienia danych, wyra\u017cenia sprzeciwu wobec przetwarzania danych oraz prawo do wniesienia skargi do organu nadzorczego."),l.a.createElement("button",{className:"privacyPolicy__exit",onClick:this.handleExtraPolicy},"X"))))}}]),t}(n.Component)),T=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={intro:!0},n}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timeoutID=setTimeout((function(){e.setState({intro:!1})}),3e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutID)}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"start",style:this.state.intro?{display:"flex"}:{display:"none"}},l.a.createElement("div",{className:"logo"})),l.a.createElement(u,null),l.a.createElement(E,null),l.a.createElement(z,null),l.a.createElement("main",null,l.a.createElement(w,{name:"offer"}),l.a.createElement(_,null),l.a.createElement(h,null),l.a.createElement(C,{name:"realization"})),l.a.createElement(S,null),l.a.createElement(I,{name:"contact"}),l.a.createElement(A,null))}}]),t}(n.Component);t(115);r.a.render(l.a.createElement(T,null),document.getElementById("root"))},12:function(e,a,t){e.exports=t.p+"static/media/image0.491d2eaf.jpeg"},13:function(e,a,t){e.exports=t.p+"static/media/image2.5a68406a.jpeg"},43:function(e,a,t){e.exports=t(116)},48:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){},60:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){}},[[43,1,2]]]);
//# sourceMappingURL=main.f2a4b23a.chunk.js.map