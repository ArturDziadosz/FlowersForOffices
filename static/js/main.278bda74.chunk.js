(this.webpackJsonpflowers_for_offices=this.webpackJsonpflowers_for_offices||[]).push([[0],{115:function(e,a,t){},119:function(e,a,t){},120:function(e,a,t){},121:function(e,a,t){},122:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(10),l=t.n(r),c=t(2),o=t(3),s=t(5),m=t(4),u=t(6),d=(t(52),function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("section",{className:"contactBar"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",null,i.a.createElement("p",{className:"standardMedia"},i.a.createElement("i",{className:"fas fa-mobile-alt"}),i.a.createElement("span",null,"+ 48 123 456 789")),i.a.createElement("p",{className:"standardMedia"},i.a.createElement("i",{className:"fas fa-envelope"}),i.a.createElement("a",{href:"mailto:kwiatostan.biuro@gmail.com"},"kwiatostan.biuro@gmail.com"))),i.a.createElement("p",{className:"socialMedia"},i.a.createElement("a",{href:"https://www.facebook.com/kwiatostanpracowniaflorystyczna",target:"_blank"},i.a.createElement("i",{className:"fab fa-facebook-square"})),i.a.createElement("a",{href:"https://www.instagram.com/kwiatostan_pracownia/",target:"_blank"},i.a.createElement("i",{className:"fab fa-instagram"})))))))}}]),a}(n.Component)),p=t(7),h=(t(62),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={topPosition:t.props.topPosition,extraMenu:!1,hamburgerMenuOpen:t.props.hamburgerMenuOpen},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidUpdate",value:function(e){e.topPosition!==this.props.topPosition&&this.setState({topPosition:this.props.topPosition})}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("nav",{className:"nav"},i.a.createElement("ul",{className:"nav__list"},i.a.createElement("li",{className:this.state.topPosition?"nav__list__elem":"nav__list__elem nav__list__elem--short"},i.a.createElement(p.Link,{to:"header",spy:!0,smooth:!0,duration:1e3,offset:-250},"STRONA G\u0141\xd3WNA")),i.a.createElement("li",{className:this.state.topPosition?"nav__list__elem":"nav__list__elem nav__list__elem--short"},i.a.createElement(p.Link,{to:"offer",spy:!0,smooth:!0,duration:1e3,offset:-140},"OFERTA ")),i.a.createElement("li",{className:this.state.topPosition?"nav__list__elem":"nav__list__elem nav__list__elem--short"},i.a.createElement(p.Link,{to:"realization",spy:!0,smooth:!0,duration:1e3,offset:-130},"REALIZACJE")),i.a.createElement("li",{className:this.state.topPosition?"nav__list__elem":"nav__list__elem nav__list__elem--short"},i.a.createElement(p.Link,{to:"contact",spy:!0,smooth:!0,duration:1e3},"KONTAKT")))))}}]),a}(n.Component)),y=(t(63),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).distanceToTop=function(){window.addEventListener("scroll",(function(){window.scrollY>=100?t.setState({topPosition:!1}):t.setState({topPosition:!0})}))},t.checkingInnerWidth=function(){window.innerWidth<850?t.setState({tightScreen:!0}):t.setState({tightScreen:!1}),window.addEventListener("resize",(function(){window.innerWidth<850?t.setState({tightScreen:!0}):t.setState({tightScreen:!1})}))},t.handleHamburgerMenu=function(){t.setState({hamburgerMenuOpen:!t.state.hamburgerMenuOpen})},t.state={topPosition:!0,tightScreen:!1,hamburgerMenuOpen:!1},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){this.distanceToTop(),this.checkingInnerWidth()}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("header",{className:this.state.topPosition?"header":"header container--short"},i.a.createElement("section",{className:this.state.topPosition?"container":"container container--short"},i.a.createElement("div",{className:"row"},i.a.createElement(p.Link,{to:"header",spy:!0,smooth:!0,duration:1e3,offset:-250},i.a.createElement("div",{className:"header__logo"})),i.a.createElement(h,{topPosition:this.state.topPosition}),this.state.tightScreen?this.state.hamburgerMenuOpen?i.a.createElement("div",{className:"header__hamburger header__hamburger--open",onClick:this.handleHamburgerMenu},i.a.createElement("div",{className:"header__hamburger__bar"}),i.a.createElement("div",{className:"header__hamburger__bar"})):i.a.createElement("div",{className:"header__hamburger",onClick:this.handleHamburgerMenu},i.a.createElement("div",{className:"header__hamburger__bar"})):""),this.state.hamburgerMenuOpen?i.a.createElement(h,{hamburgerMenuOpen:this.state.hamburgerMenuOpen}):"")))}}]),a}(n.Component)),E=(t(64),function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("section",{className:"heroBanner container",name:"header"},i.a.createElement("div",{className:"heroBanner__img heroBanner__img--first"}),i.a.createElement("div",{className:"heroBanner__img heroBanner__img--second"})))}}]),a}(n.Component)),w=(t(65),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).checkingInnerWidth=function(){window.innerWidth<1e3?t.setState({tightScreen:!0}):t.setState({tightScreen:!1}),window.addEventListener("resize",(function(){document.querySelectorAll("article.container .row .col-4").forEach((function(e){e.style.left="",e.style.animation="",e.style.flexBasis=""})),window.innerWidth<1e3?t.setState({tightScreen:!0}):t.setState({tightScreen:!1})}))},t.handleBigger=function(e){"800ms linear 0s 1 normal forwards running offerFlex"===e.currentTarget.style.animation?(e.currentTarget.style.animation="",document.querySelectorAll("article.container .row .col-4").forEach((function(e){e.style.left="0"}))):(document.querySelectorAll("article.container .row .col-4").forEach((function(e){e.style.animation="",e.style.left="0"})),"secondOffer"===e.currentTarget.getAttribute("id")?document.querySelectorAll("article.container .row .col-4").forEach((function(e){e.style.left="0"})):"thirdOffer"===e.currentTarget.getAttribute("id")?document.querySelectorAll("article.container .row .col-4").forEach((function(e){e.style.left="-25%"})):"firstOffer"===e.currentTarget.getAttribute("id")&&document.querySelectorAll("article.container .row .col-4").forEach((function(e){e.style.left="25%"})),e.currentTarget.style.animation="offerFlex 800ms forwards linear")},t.handleBiggerColumn=function(e){"100%"===e.currentTarget.style.flexBasis?e.currentTarget.style.flexBasis="":(document.querySelectorAll("article.container .row .col-4").forEach((function(e){e.style.flexBasis=""})),e.currentTarget.style.flexBasis="100%")},t.state={tightScreen:!1},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){this.checkingInnerWidth()}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("article",{className:"container",name:"offer"},i.a.createElement("div",{className:"row row--offer"},i.a.createElement(p.Link,{to:"offer",spy:!0,smooth:!0,duration:1e3,offset:this.state.tightScreen?-60:-140,className:"col-4",onClick:this.state.tightScreen?this.handleBiggerColumn:this.handleBigger,id:"firstOffer"},i.a.createElement("div",{className:"article__img"}),i.a.createElement("h3",{className:"article__title"},"FLORYSTYKA OKOLICZNO\u015aCIOWA"),i.a.createElement("p",{className:"article__text"},"Oferujemy niepowtarzalne aran\u017cacje kwiatowe, pasuj\u0105ce do charakteru i okoliczno\u015bci przyj\u0119cia. Zadbamy, aby ten dzie\u0144 by\u0142 dla Was niezapomniany."),i.a.createElement("br",null),i.a.createElement("div",{className:"article__box",style:this.state.tightScreen?{display:"block"}:{}},i.a.createElement("div",null,i.a.createElement("p",{className:"article__text"},"Pracownia Kwiatostan proponuje rozwi\u0105zania na ka\u017cd\u0105 okazj\u0119, oferujemy opraw\u0119 florystyczn\u0105 imprez okoliczno\u015bciowych, takich jak:"),i.a.createElement("ul",{className:"article__text article__text--list"},i.a.createElement("li",null,"Baby Shower"),i.a.createElement("li",null,"Chrzciny"),i.a.createElement("li",null,"Urodziny"),i.a.createElement("li",null,"Komunie \u015awi\u0119te"),i.a.createElement("li",null,"Jubileusze"),i.a.createElement("li",null,"Inne"))),this.state.tightScreen?i.a.createElement("br",null):"",i.a.createElement("div",null,i.a.createElement("p",{className:"article__text"},"Jest r\xf3wnie\u017c wiele okazji, by obdarowa\u0107 blisk\u0105 nam osob\u0119 pi\u0119knymi kwiatami, w naszej ofercie znajdziecie:"),i.a.createElement("ul",{className:"article__text article__text--list"},i.a.createElement("li",null,"Bukiety okoliczno\u015bciowe"),i.a.createElement("li",null,"Flower Box, kosze i kompozycje kwiatowe"),i.a.createElement("li",null,"Wianki"),i.a.createElement("li",null,"Dekoracje \u015bwi\u0105teczne")))),i.a.createElement("br",null),i.a.createElement("p",{className:"article__text"},"Zapraszam do kontaktu")),i.a.createElement(p.Link,{to:"offer",spy:!0,smooth:!0,duration:1e3,offset:this.state.tightScreen?380:-140,className:"col-4",onClick:this.state.tightScreen?this.handleBiggerColumn:this.handleBigger,id:"secondOffer"},i.a.createElement("div",{className:"article__img"}),i.a.createElement("h3",{className:"article__title"},"FLORYSTYKA \u015aLUBNA"),i.a.createElement("p",{className:"article__text"},"Zajmujemy si\u0119 kompleksow\u0105 opraw\u0105 florystyczn\u0105 \u015blubu. Stworzymy dla Was niezapomniane dekoracje w najwa\u017cniejszym momencie \u017cycia."),i.a.createElement("br",null),i.a.createElement("p",{className:"article__text"},"\u015alub to uroczysto\u015b\u0107 jedyna w swoim rodzaju. Ka\u017cdy chce, aby ten dzie\u0144 by\u0142 wyj\u0105tkowy, niepowtarzalny i magiczny. Pracownia Kwiatostan stworzy dla Was dekoracje kwiatowe, kt\xf3re b\u0119d\u0105 pi\u0119knym dope\u0142nieniem tego dnia."),i.a.createElement("br",null),i.a.createElement("div",{className:"article__box",style:this.state.tightScreen?{display:"block"}:{}},i.a.createElement("div",null,i.a.createElement("p",{className:"article__text"},"Oferujemy kompleksow\u0105 florystyk\u0119 \u015blubn\u0105:"),i.a.createElement("ul",{className:"article__text article__text--list"},i.a.createElement("li",null,"Bukiety \u015blubne"),i.a.createElement("li",null,"Dekoracje sal weselnych"),i.a.createElement("li",null,"Kwiaty na wesele"),i.a.createElement("li",null,"Dekoracje samochod\xf3w"),i.a.createElement("li",null,"Dekoracje ko\u015bcio\u0142\xf3w"),i.a.createElement("li",null,"Dekoracje \u015blubne"),i.a.createElement("li",null,"Podzi\u0119kowania dla rodzic\xf3w"))),this.state.tightScreen?i.a.createElement("br",null):"",i.a.createElement("div",null,i.a.createElement("p",{className:"article__text"},"Zapraszam na bezp\u0142atne konsultacje, po kt\xf3rych Klient otrzymuje propozycje oferty z zakresem prac. Po akceptacji projektu, zostaje podpisana umowa oraz rezerwujemy termin w kt\xf3rym odbywa\u0107 b\u0119dzie si\u0119 uroczysto\u015b\u0107."))),i.a.createElement("br",null),i.a.createElement("p",{className:"article__text"},"Zapraszam do kontaktu")),i.a.createElement(p.Link,{to:"offer",spy:!0,smooth:!0,duration:1e3,offset:this.state.tightScreen?820:-140,className:"col-4",onClick:this.state.tightScreen?this.handleBiggerColumn:this.handleBigger,id:"thirdOffer"},i.a.createElement("div",{className:"article__img"}),i.a.createElement("h3",{className:"article__title"},"FLORYSTYKA DLA DOMU I FIRMY"),i.a.createElement("p",{className:"article__text"},"Organizujemy przestrze\u0144, gdzie nie powinno zabrakn\u0105\u0107 kwiat\xf3w, kt\xf3re wprowadz\u0105 wyj\u0105tkow\u0105 atmosfer\u0119, \u015bwie\u017co\u015b\u0107 i mn\xf3stwo barw."),i.a.createElement("br",null),i.a.createElement("div",{className:"article__box",style:this.state.tightScreen?{display:"block"}:{}},i.a.createElement("div",null,i.a.createElement("p",{className:"article__text"},"Pracownia Kwiatostan \u015bwiadczy us\u0142ugi florystyczne dla klient\xf3w indywidualnych oraz firmowych. Proponujemy dostaw\u0119 \u015bwie\u017cych kwiat\xf3w do domu, biura lub restauracji co najmniej raz w tygodniu.")),this.state.tightScreen?i.a.createElement("br",null):"",i.a.createElement("div",null,i.a.createElement("p",{className:"article__text"},"Dodatkowo naszym Klientom oferujemy:"),i.a.createElement("ul",{className:"article__text article__text--list"},i.a.createElement("li",null,"Kompozycje kwiatowe do recepcji, restauracji, gabinetu, wn\u0119trz hoteli"),i.a.createElement("li",null,"Aran\u017cacje mieszka\u0144 prywatnych"),i.a.createElement("li",null,"Dostawa \u015bwie\u017cych kwiat\xf3w"),i.a.createElement("li",null,"Dekoracje \u015bwi\u0105teczne i sezonowe"),i.a.createElement("li",null,"Opraw\u0119 florystyczn\u0105 imprez firmowych tj., wigilia firmowa, bankiety")))),i.a.createElement("br",null),i.a.createElement("p",{className:"article__text"},"Zapraszam do kontaktu")))))}}]),a}(n.Component)),b=(t(66),function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("article",{className:"quote"},i.a.createElement("section",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("p",{className:"quote__text"},'"NAJLEPSZYCH I NAJPI\u0118KNIEJSZYCH RZECZY NA \u015aWIECIE, NIE MO\u017bNA ANI ZOBACZY\u0106, ANI DOTKN\u0104\u0106. TRZEBA JE POCZU\u0106 SERCEM."'),i.a.createElement("p",{className:"quote__author"},"HELLEN KELLER"),i.a.createElement(p.Link,{to:"realization",spy:!0,smooth:!0,duration:1e3,offset:-130,className:"linkButton"},i.a.createElement("div",{className:"quoteButton"},"ZOBACZ REALIZACJE"))))))}}]),a}(n.Component)),_=(t(67),function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("article",{className:"container"},i.a.createElement("div",{className:"row about"},i.a.createElement("div",{className:"about__img"}),i.a.createElement("p",{className:"about__title"},"KWIATOSTAN ",i.a.createElement("span",null,"\u2013")," PRACOWNIA FLORYSTYCZNA"),i.a.createElement("p",{className:"about__text"},"Pracownia Kwiatostan powsta\u0142a z pasji do tworzenia pi\u0119knych kompozycji oraz z zami\u0142owania do kwiat\xf3w. Stawiamy przede wszystkim na \u015bwie\u017co\u015b\u0107 kwiat\xf3w, dob\xf3r najlepszych gatunk\xf3w oraz estetyk\u0119 ca\u0142ej dekoracji. Liczy si\u0119 dla nas zadowolenie naszych Klient\xf3w, dlatego troszczymy si\u0119 o ka\u017cdy detal, tak aby ta najwa\u017cniejsza uroczysto\u015b\u0107 w \u017cyciu zapad\u0142a na d\u0142ugo w ich pami\u0119ci. Nasze inspiracje czerpiemy z otoczenia oraz najnowszych trend\xf3w, nieustannie poszukujemy mo\u017cliwo\u015bci rozwoju i doskonalenia warsztatu."),i.a.createElement("p",{className:"about__footer"},"\u2013 To wszystko dla Was \u2013"))))}}]),a}(n.Component)),f=t(45),z=t(11),k=t.n(z),g=t(17),N=t.n(g),j=t(18),v=t.n(j),O=t(19),x=t.n(O),P=(t(115),[{src:N.a,thumbnail:N.a,thumbnailWidth:320,thumbnailHeight:174},{src:v.a,thumbnail:v.a,thumbnailWidth:320,thumbnailHeight:320},{src:x.a,thumbnail:x.a,thumbnailWidth:320,thumbnailHeight:174}]),S=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("article",{className:"realizations",name:"realization"},i.a.createElement("section",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("p",{className:"realizations__title"},"REALIZACJE")),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"realizations__box"},i.a.createElement(k.a,{images:P,enableImageSelection:!1,enableLightbox:!0,margin:0}),i.a.createElement("i",{className:"fas fa-search"})),i.a.createElement("div",{className:"realizations__box"},i.a.createElement(k.a,{images:P,enableImageSelection:!1,enableLightbox:!0,margin:0}),i.a.createElement("i",{className:"fas fa-search"}))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"realizations__box"},i.a.createElement(k.a,{images:P,enableImageSelection:!1,enableLightbox:!0,margin:0}),i.a.createElement("i",{className:"fas fa-search"})),i.a.createElement("div",{className:"realizations__box"},i.a.createElement(k.a,{images:P,enableImageSelection:!1,enableLightbox:!0,margin:0}),i.a.createElement("i",{className:"fas fa-search"}))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"realizations__box"},i.a.createElement(k.a,{images:P,enableImageSelection:!1,enableLightbox:!0,margin:0}),i.a.createElement("i",{className:"fas fa-search"})),i.a.createElement("div",{className:"realizations__box"},i.a.createElement(k.a,{images:P,enableImageSelection:!1,enableLightbox:!0,margin:0}),i.a.createElement("i",{className:"fas fa-search"}))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"realizations__box",style:{height:"auto"}},i.a.createElement(f.a,null,i.a.createElement("img",{src:N.a,alt:"alt"}),i.a.createElement("img",{src:v.a,alt:"alt"}),i.a.createElement("img",{src:x.a,alt:"alt"})))))))}}]),a}(n.Component),A=(t(119),function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"contact"},i.a.createElement("section",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"contact__logo"}),i.a.createElement("p",{className:"contact__text"},"Skontaktuj si\u0119 z nami"),i.a.createElement("div",{className:"contact__mediaBox"},i.a.createElement("div",{className:"contact__mediaBox__standardMedia"},i.a.createElement("p",{className:"standardMedia"},i.a.createElement("i",{className:"fas fa-mobile-alt"}),"+ 48 123 456 789 "),i.a.createElement("p",{className:"standardMedia"},i.a.createElement("i",{className:"fas fa-envelope"}),i.a.createElement("a",{href:"mailto:kwiatostan.biuro@gmail.com"},"kwiatostan.biuro@gmail.com"))),i.a.createElement("div",{className:"contact__mediaBox__socialMedia"},i.a.createElement("p",{className:"socialMedia"},i.a.createElement("a",{href:"https://www.facebook.com/kwiatostanpracowniaflorystyczna",target:"_blank"},i.a.createElement("i",{className:"fab fa-facebook-square"}))),i.a.createElement("p",{className:"socialMedia"},i.a.createElement("a",{href:"https://www.instagram.com/kwiatostan_pracownia/",target:"_blank"},i.a.createElement("i",{className:"fab fa-instagram"})))))))))}}]),a}(n.Component)),C=(t(120),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).handleExtraPolicy=function(){t.setState({privacyPolicy:!t.state.privacyPolicy})},t.handleCloseExtraPolicy=function(e){27===e.keyCode&&t.setState({privacyPolicy:!1}),console.log(e.keyCode)},t.state={privacyPolicy:!1},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleCloseExtraPolicy,!1)}},{key:"componentWillUnmount",value:function(){document.addEventListener("keydown",this.handleCloseExtraPolicy,!1)}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("footer",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("p",{className:"footer__text"},"Wszelkie prawa zastrze\u017cone ",i.a.createElement("span",null,"www.slubnaflorystyka.pl")," ",i.a.createElement("span",null,"|")," ",i.a.createElement("span",{onClick:this.handleExtraPolicy},"Polityka prywatno\u015bci")),i.a.createElement("p",{className:"footer__design"},"Designed by ",i.a.createElement("span",null,i.a.createElement("a",{href:"https://github.com/ArturDziadosz",target:"_blank"},"Artur Dziadosz")))),i.a.createElement("article",{className:"privacyPolicy",style:this.state.privacyPolicy?{display:"block"}:{}},i.a.createElement("header",{className:"privacyPolicy__title"},i.a.createElement("h2",null,"POLITYKA PRYWATNO\u015aCI")),i.a.createElement("h3",{className:"privacyPolicy__subtitle"},"DANE OSOBOWE"),i.a.createElement("p",{className:"privacyPolicy__text"},"1. Administrator danych osobowych"),i.a.createElement("p",{className:"privacyPolicy__subtext"},"Dane kontaktowe:"),i.a.createElement("p",{className:"privacyPolicy__subtext"},"e-mail: kwiatostan.biuro@gmail.com"),i.a.createElement("p",{className:"privacyPolicy__text"},"2. Cel zbierania danych"),i.a.createElement("p",{className:"privacyPolicy__subtext"},"Pa\u0144stwa dane osobowe przes\u0142ane na naszego e-maila lub przez formularz kontaktowy s\u0105 przetwarzane wy\u0142\u0105cznie w celu udzielenia odpowiedzi na zadane pytania i/lub przekazania niezb\u0119dnych informacji."),i.a.createElement("p",{className:"privacyPolicy__subtext"},"Podane w formularzu dane osobowe (imi\u0119, adres e-mail) po klikni\u0119ciu przycisku \u201ewy\u015blij\u201d zostan\u0105 przes\u0142ane bezpo\u015brednio na naszego e-maila."),i.a.createElement("p",{className:"privacyPolicy__subtext"},"Przetwarzane dane w przypadku zainteresowania nasz\u0105 ofert\u0105 b\u0119d\u0105 niezb\u0119dne do zawarcia lub realizacji umowy."),i.a.createElement("p",{className:"privacyPolicy__subtext"},"Przes\u0142ane dane osobowe nie b\u0119d\u0105 wykorzystywane do cel\xf3w marketingowych, nie b\u0119d\u0105 udost\u0119pniane innym podmiotom, oraz nie b\u0119d\u0105 przetwarzane w zautomatyzowany spos\xf3b (profilowanie)."),i.a.createElement("p",{className:"privacyPolicy__text"},"3. Zakres przetwarzanych danych"),i.a.createElement("p",{className:"privacyPolicy__subtext"},"Przetwarzamy nast\u0119puj\u0105cy zakres danych osobowych:"),i.a.createElement("p",{className:"privacyPolicy__subtext"},"\u2013 imi\u0119,"),i.a.createElement("p",{className:"privacyPolicy__subtext"},"\u2013 adres e-mail,"),i.a.createElement("p",{className:"privacyPolicy__subtext"},"\u2013 dodatkowe dane podane dobrowolnie w tre\u015bci wiadomo\u015bci"),i.a.createElement("p",{className:"privacyPolicy__text"},"4. Okres czasu przechowywania danych osobowych"),i.a.createElement("p",{className:"privacyPolicy__subtext"},"Dok\u0142adamy wszelkich stara\u0144 aby ograniczy\u0107 okres przechowywania Pa\u0144stwa danych osobowych."),i.a.createElement("p",{className:"privacyPolicy__subtext"},"Dane przetwarzane w celu udzielenia odpowiedzi na zadane pytania i przekazania niezb\u0119dnych informacji b\u0119d\u0105 przetwarzane przez okres trwania korespondencji."),i.a.createElement("p",{className:"privacyPolicy__subtext"},"W przypadku niebudz\u0105cego w\u0105tpliwo\u015bci zako\u0144czenia korespondencji z Pa\u0144stwa strony, dane zostan\u0105 usuni\u0119te w terminie 7 dni."),i.a.createElement("p",{className:"privacyPolicy__text"},"5. Przys\u0142uguj\u0105ce prawa w stosunku do przetwarzanych danych osobowych"),i.a.createElement("p",{className:"privacyPolicy__subtext"},"Przys\u0142uguje Pa\u0144stwu prawo \u017c\u0105dania dost\u0119pu do swoich danych osobowych, ich sprostowania, usuni\u0119cia lub ograniczenia przetwarzania, prawo do przeniesienia danych, wyra\u017cenia sprzeciwu wobec przetwarzania danych oraz prawo do wniesienia skargi do organu nadzorczego."),i.a.createElement("button",{className:"privacyPolicy__exit",onClick:this.handleExtraPolicy},"X"))))}}]),a}(n.Component)),L=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={intro:!0},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.timeoutID=setTimeout((function(){e.setState({intro:!1})}),2800)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutID)}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"start",style:this.state.intro?{display:"flex"}:{display:"none"}},i.a.createElement("div",{className:"logo"})),i.a.createElement(d,null),i.a.createElement(y,null),i.a.createElement(E,null),i.a.createElement("main",null,i.a.createElement(w,{name:"offer"}),i.a.createElement(b,null),i.a.createElement(_,null),i.a.createElement(S,{name:"realization"})),i.a.createElement(A,{name:"contact"}),i.a.createElement(C,null))}}]),a}(n.Component);t(121);l.a.render(i.a.createElement(L,null),document.getElementById("root"))},17:function(e,a,t){e.exports=t.p+"static/media/photobox1.e9fba2fa.jpg"},18:function(e,a,t){e.exports=t.p+"static/media/photobox2.9419b7b5.jpg"},19:function(e,a,t){e.exports=t.p+"static/media/photobox3.a4e2ba7f.jpg"},47:function(e,a,t){e.exports=t(122)},52:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){}},[[47,1,2]]]);
//# sourceMappingURL=main.278bda74.chunk.js.map