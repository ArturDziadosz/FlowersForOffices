(this.webpackJsonpflowers_for_offices=this.webpackJsonpflowers_for_offices||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/photobox1.e9fba2fa.jpg"},function(e,a,t){e.exports=t.p+"static/media/photobox2.9419b7b5.jpg"},function(e,a,t){e.exports=t.p+"static/media/photobox3.a4e2ba7f.jpg"},,,,,,,,,,,,,,,,,function(e,a,t){e.exports=t(57)},,,,,function(e,a,t){},,,,,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(14),c=t.n(r),i=t(2),o=t(3),s=t(5),m=t(4),u=t(6),E=(t(32),function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"contactBar"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("p",{className:"standardMedia"},l.a.createElement("i",{className:"fas fa-mobile-alt"}),"+ 48 123 456 789",l.a.createElement("i",{className:"fas fa-envelope"}),l.a.createElement("a",{href:"mailto:kwiatostan.biuro@gmail.com"},"kwiatostan.biuro@gmail.com")),l.a.createElement("p",{className:"socialMedia"},l.a.createElement("a",{href:"https://www.facebook.com/kwiatostanpracowniaflorystyczna",target:"_blank"},l.a.createElement("i",{className:"fab fa-facebook-square"})),l.a.createElement("a",{href:"https://www.instagram.com/kwiatostan_pracownia/",target:"_blank"},l.a.createElement("i",{className:"fab fa-instagram"})))))))}}]),a}(n.Component)),d=t(7),p=(t(43),function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).handleExtraMenu=function(){t.setState({extraMenu:!t.state.extraMenu})},t.state={topPosition:t.props.topPosition,extraMenu:!1},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidUpdate",value:function(e){e.topPosition!==this.props.topPosition&&this.setState({topPosition:this.props.topPosition})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"nav"},l.a.createElement("ul",{className:"nav__list"},l.a.createElement("li",{className:this.state.topPosition?"nav__list__elem":"nav__list__elem nav__list__elem--short"},l.a.createElement(d.Link,{to:"header",spy:!0,smooth:!0,duration:1e3,offset:-250},"STRONA G\u0141\xd3WNA")),l.a.createElement("li",{className:this.state.topPosition?"nav__list__elem":"nav__list__elem nav__list__elem--short",onMouseEnter:this.handleExtraMenu,onMouseLeave:this.handleExtraMenu},l.a.createElement(d.Link,{to:"offer",spy:!0,smooth:!0,duration:1e3,offset:-200},"OFERTA ",l.a.createElement("i",{className:"fas fa-chevron-down"})),l.a.createElement("ul",{className:"nav__list__more",style:this.state.extraMenu?{display:"block"}:{}},l.a.createElement("li",{className:"nav__list__more__child"},"FLORYSTYKA \u015aLUBNA"),l.a.createElement("li",{className:"nav__list__more__child"},"FLORYSTYKA OKOLICZNO\u015aCIOWA"),l.a.createElement("li",{className:"nav__list__more__child"},"FLORYSTYKA DLA DOMU I FIRMY"))),l.a.createElement("li",{className:this.state.topPosition?"nav__list__elem":"nav__list__elem nav__list__elem--short"},l.a.createElement(d.Link,{to:"realization",spy:!0,smooth:!0,duration:1e3,offset:-80},"REALIZACJE")),l.a.createElement("li",{className:this.state.topPosition?"nav__list__elem":"nav__list__elem nav__list__elem--short"},l.a.createElement(d.Link,{to:"contact",spy:!0,smooth:!0,duration:1e3},"KONTAKT")))))}}]),a}(n.Component)),y=(t(44),function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).distanceToTop=function(){window.addEventListener("scroll",(function(e){window.scrollY>=100?t.setState({topPosition:!1}):t.setState({topPosition:!0})}))},t.state={topPosition:!0},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){this.distanceToTop()}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:this.state.topPosition?"header":"header container--short"},l.a.createElement("section",{className:this.state.topPosition?"container":"container container--short"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"header__logo"}),l.a.createElement(p,{topPosition:this.state.topPosition})))))}}]),a}(n.Component)),_=(t(45),function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"heroBanner container",name:"header"},l.a.createElement("div",{className:"heroBanner__img heroBanner__img--first"}),l.a.createElement("div",{className:"heroBanner__img heroBanner__img--second"})))}}]),a}(n.Component)),w=(t(46),function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).handleBigger=function(e){"800ms linear 0s 1 normal forwards running offerFlex"===e.currentTarget.style.animation?(e.currentTarget.style.animation="",document.querySelectorAll("article.container .row .col-4").forEach((function(e){e.style.left="0"}))):(document.querySelectorAll("article.container .row .col-4").forEach((function(e){e.style.animation="",e.style.left="0"})),"secondOffer"===e.currentTarget.getAttribute("id")?document.querySelectorAll("article.container .row .col-4").forEach((function(e){e.style.left="calc(12.5% - 462px)"})):"thirdOffer"===e.currentTarget.getAttribute("id")?document.querySelectorAll("article.container .row .col-4").forEach((function(e){e.style.left="calc(12.5% - 924px)"})):"firstOffer"===e.currentTarget.getAttribute("id")&&document.querySelectorAll("article.container .row .col-4").forEach((function(e){e.style.left="12.5%"})),e.currentTarget.style.animation="offerFlex 800ms forwards linear")},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("article",{className:"container",name:"offer"},l.a.createElement("div",{className:"row"},l.a.createElement(d.Link,{to:"offer",spy:!0,smooth:!0,duration:1e3,offset:-200,className:"col-4",onClick:this.handleBigger,id:"firstOffer"},l.a.createElement("div",{className:"article__img"}),l.a.createElement("h3",{className:"article__title"},"FLORYSTYKA OKOLICZNO\u015aCIOWA"),l.a.createElement("p",{className:"article__text"},"Oferujemy niepowtarzalne aran\u017cacje kwiatowe, pasuj\u0105ce do charakteru i okoliczno\u015bci przyj\u0119cia. Zadbamy, aby ten dzie\u0144 by\u0142 dla Was niezapomniany."),l.a.createElement("br",null),l.a.createElement("div",{className:"article__box"},l.a.createElement("div",null,l.a.createElement("p",{className:"article__text"},"Pracownia Kwiatostan proponuje rozwi\u0105zania na ka\u017cd\u0105 okazj\u0119, oferujemy opraw\u0119 florystyczn\u0105 imprez okoliczno\u015bciowych, takich jak:"),l.a.createElement("ul",{className:"article__text article__text--list"},l.a.createElement("li",null,"Baby Shower"),l.a.createElement("li",null,"Chrzciny"),l.a.createElement("li",null,"Urodziny"),l.a.createElement("li",null,"Komunie \u015awi\u0119te"),l.a.createElement("li",null,"Jubileusze"),l.a.createElement("li",null,"Inne"))),l.a.createElement("div",null,l.a.createElement("p",{className:"article__text"},"Jest r\xf3wnie\u017c wiele okazji, by obdarowa\u0107 blisk\u0105 nam osob\u0119 pi\u0119knymi kwiatami, w naszej ofercie znajdziecie:"),l.a.createElement("ul",{className:"article__text article__text--list"},l.a.createElement("li",null,"Bukiety okoliczno\u015bciowe"),l.a.createElement("li",null,"Flower Box, kosze i kompozycje kwiatowe"),l.a.createElement("li",null,"Wianki"),l.a.createElement("li",null,"Dekoracje \u015bwi\u0105teczne")))),l.a.createElement("br",null),l.a.createElement("p",{className:"article__text"},"Zapraszam do kontaktu")),l.a.createElement(d.Link,{to:"offer",spy:!0,smooth:!0,duration:1e3,offset:-200,className:"col-4",onClick:this.handleBigger,id:"secondOffer"},l.a.createElement("div",{className:"article__img"}),l.a.createElement("h3",{className:"article__title"},"FLORYSTYKA \u015aLUBNA"),l.a.createElement("p",{className:"article__text"},"Zajmujemy si\u0119 kompleksow\u0105 opraw\u0105 florystyczn\u0105 \u015blubu. Stworzymy dla Was niezapomniane dekoracje w najwa\u017cniejszym momencie \u017cycia."),l.a.createElement("br",null),l.a.createElement("p",{className:"article__text"},"\u015alub to uroczysto\u015b\u0107 jedyna w swoim rodzaju. Ka\u017cdy chce, aby ten dzie\u0144 by\u0142 wyj\u0105tkowy, niepowtarzalny i magiczny. Pracownia Kwiatostan stworzy dla Was dekoracje kwiatowe, kt\xf3re b\u0119d\u0105 pi\u0119knym dope\u0142nieniem tego dnia."),l.a.createElement("br",null),l.a.createElement("div",{className:"article__box"},l.a.createElement("div",null,l.a.createElement("p",{className:"article__text"},"Oferujemy kompleksow\u0105 florystyk\u0119 \u015blubn\u0105:"),l.a.createElement("ul",{className:"article__text article__text--list"},l.a.createElement("li",null,"Bukiety \u015blubne"),l.a.createElement("li",null,"Dekoracje sal weselnych"),l.a.createElement("li",null,"Kwiaty na wesele"),l.a.createElement("li",null,"Dekoracje samochod\xf3w"),l.a.createElement("li",null,"Dekoracje ko\u015bcio\u0142\xf3w"),l.a.createElement("li",null,"Dekoracje \u015blubne"),l.a.createElement("li",null,"Podzi\u0119kowania dla rodzic\xf3w"))),l.a.createElement("div",null,l.a.createElement("p",{className:"article__text"},"Zapraszam na bezp\u0142atne konsultacje, po kt\xf3rych Klient otrzymuje propozycje oferty z zakresem prac. Po akceptacji projektu, zostaje podpisana umowa oraz rezerwujemy termin w kt\xf3rym odbywa\u0107 b\u0119dzie si\u0119 uroczysto\u015b\u0107."))),l.a.createElement("br",null),l.a.createElement("p",{className:"article__text"},"Zapraszam do kontaktu")),l.a.createElement(d.Link,{to:"offer",spy:!0,smooth:!0,duration:1e3,offset:-200,className:"col-4",onClick:this.handleBigger,id:"thirdOffer"},l.a.createElement("div",{className:"article__img"}),l.a.createElement("h3",{className:"article__title"},"FLORYSTYKA DLA DOMU I FIRMY"),l.a.createElement("p",{className:"article__text"},"Organizujemy przestrze\u0144, gdzie nie powinno zabrakn\u0105\u0107 kwiat\xf3w, kt\xf3re wprowadz\u0105 wyj\u0105tkow\u0105 atmosfer\u0119, \u015bwie\u017co\u015b\u0107 i mn\xf3stwo barw."),l.a.createElement("br",null),l.a.createElement("div",{className:"article__box"},l.a.createElement("div",null,l.a.createElement("p",{className:"article__text"},"Pracownia Kwiatostan \u015bwiadczy us\u0142ugi florystyczne dla klient\xf3w indywidualnych oraz firmowych. Proponujemy dostaw\u0119 \u015bwie\u017cych kwiat\xf3w do domu, biura lub restauracji co najmniej raz w tygodniu.")),l.a.createElement("div",null,l.a.createElement("p",{className:"article__text"},"Dodatkowo naszym Klientom oferujemy:"),l.a.createElement("ul",{className:"article__text article__text--list"},l.a.createElement("li",null,"Kompozycje kwiatowe do recepcji, restauracji, gabinetu, wn\u0119trz hoteli"),l.a.createElement("li",null,"Aran\u017cacje mieszka\u0144 prywatnych"),l.a.createElement("li",null,"Dostawa \u015bwie\u017cych kwiat\xf3w"),l.a.createElement("li",null,"Dekoracje \u015bwi\u0105teczne i sezonowe"),l.a.createElement("li",null,"Opraw\u0119 florystyczn\u0105 imprez firmowych tj., wigilia firmowa, bankiety")))),l.a.createElement("br",null),l.a.createElement("p",{className:"article__text"},"Zapraszam do kontaktu")))))}}]),a}(n.Component)),h=(t(47),function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("article",{className:"quote"},l.a.createElement("section",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("p",{className:"quote__text"},'"NAJLEPSZYCH I NAJPI\u0118KNIEJSZYCH RZECZY NA \u015aWIECIE, NIE MO\u017bNA ANI ZOBACZY\u0106, ANI DOTKN\u0104\u0106. TRZEBA JE POCZU\u0106 SERCEM."'),l.a.createElement("p",{className:"quote__author"},"HELLEN KELLER"),l.a.createElement(d.Link,{to:"realization",spy:!0,smooth:!0,duration:1e3,offset:-80,className:"linkButton"},l.a.createElement("div",{className:"quoteButton"},"ZOBACZ REALIZACJE"))))))}}]),a}(n.Component)),f=(t(48),function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("article",{className:"container"},l.a.createElement("div",{className:"row about"},l.a.createElement("div",{className:"about__img"}),l.a.createElement("p",{className:"about__title"},"KWIATOSTAN \u2013 PRACOWNIA FLORYSTYCZNA"),l.a.createElement("p",{className:"about__text"},"Pracownia Kwiatostan powsta\u0142a z pasji do tworzenia pi\u0119knych kompozycji oraz z zami\u0142owania do kwiat\xf3w. Stawiamy przede wszystkim na \u015bwie\u017co\u015b\u0107 kwiat\xf3w, dob\xf3r najlepszych gatunk\xf3w oraz estetyk\u0119 ca\u0142ej dekoracji. Liczy si\u0119 dla nas zadowolenie naszych Klient\xf3w, dlatego troszczymy si\u0119 o ka\u017cdy detal, tak aby ta najwa\u017cniejsza uroczysto\u015b\u0107 w \u017cyciu zapad\u0142a na d\u0142ugo w ich pami\u0119ci. Nasze inspiracje czerpiemy z otoczenia oraz najnowszych trend\xf3w, nieustannie poszukujemy mo\u017cliwo\u015bci rozwoju i doskonalenia warsztatu."),l.a.createElement("p",{className:"about__footer"},"\u2013 To wszystko dla Was \u2013"))))}}]),a}(n.Component)),b=t(11),z=t(8),k=t.n(z),N=t(9),g=t.n(N),v=t(10),j=t.n(v),x=(t(49),function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).handleChange4=function(e){e.currentTarget.style.visibility="hidden",e.currentTarget.parentElement.style.flex="0 1 100%",e.currentTarget.parentElement.style.height="auto",null!==e.currentTarget.parentElement.nextElementSibling?e.currentTarget.parentElement.nextElementSibling.style.flex="1 1 50%":e.currentTarget.parentElement.previousElementSibling.style.flex="1 1 50%",setTimeout((function(){t.setState({showCarousel2:!0})}),850)},t.handleChange3=function(e){e.currentTarget.style.visibility="hidden",e.currentTarget.parentElement.style.flex="0 1 100%",e.currentTarget.parentElement.style.height="auto",null!==e.currentTarget.parentElement.nextElementSibling?e.currentTarget.parentElement.nextElementSibling.style.flex="1 1 50%":e.currentTarget.parentElement.previousElementSibling.style.flex="1 1 50%",setTimeout((function(){t.setState({showCarousel1:!0})}),850)},t.handleChange2=function(e){e.currentTarget.style.visibility="hidden",e.currentTarget.parentElement.style.flex="0 1 100%",e.currentTarget.parentElement.style.height="auto",null!==e.currentTarget.parentElement.nextElementSibling?e.currentTarget.parentElement.nextElementSibling.style.flex="1 1 50%":e.currentTarget.parentElement.previousElementSibling.style.flex="1 1 50%",e.currentTarget.nextElementSibling.style.display="block"},t.handleChange1=function(e){e.currentTarget.style.display="none"},t.state={showCarousel1:!1,showCarousel2:!1},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("article",{className:"realizations",name:"realization"},l.a.createElement("section",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("p",{className:"realizations__title"},"REALIZACJE")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"realizations__box"},l.a.createElement("div",{className:"realizations__project",onClick:this.handleChange1},l.a.createElement("i",{className:"fas fa-search"})),l.a.createElement(b.a,null,l.a.createElement("img",{src:k.a,alt:"alt"}),l.a.createElement("img",{src:g.a,alt:"alt"}),l.a.createElement("img",{src:j.a,alt:"alt"}))),l.a.createElement("div",{className:"realizations__box"},l.a.createElement("div",{className:"realizations__project",onClick:this.handleChange1},l.a.createElement("i",{className:"fas fa-search"})),l.a.createElement(b.a,null,l.a.createElement("img",{src:k.a,alt:"alt"}),l.a.createElement("img",{src:g.a,alt:"alt"}),l.a.createElement("img",{src:j.a,alt:"alt"})))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"realizations__box"},l.a.createElement("div",{className:"realizations__project",onClick:this.handleChange3},l.a.createElement("i",{className:"fas fa-search"})),l.a.createElement(b.a,{style:this.state.showCarousel1?{display:"block"}:{display:"none"}},l.a.createElement("img",{src:k.a,alt:"alt"}),l.a.createElement("img",{src:g.a,alt:"alt"}),l.a.createElement("img",{src:j.a,alt:"alt"})),l.a.createElement("div",{style:this.state.showCarousel1?{position:"absolute",zIndex:"-1"}:{},className:"testing"})),l.a.createElement("div",{className:"realizations__box"},l.a.createElement("div",{className:"realizations__project",onClick:this.handleChange4},l.a.createElement("i",{className:"fas fa-search"})),l.a.createElement(b.a,{style:this.state.showCarousel2?{display:"block"}:{display:"none"}},l.a.createElement("img",{src:k.a,alt:"alt"}),l.a.createElement("img",{src:g.a,alt:"alt"}),l.a.createElement("img",{src:j.a,alt:"alt"})),l.a.createElement("div",{style:this.state.showCarousel2?{position:"absolute",zIndex:"-1"}:{},className:"testing"}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"realizations__box"},l.a.createElement("div",{className:"realizations__project",onClick:this.handleChange2},l.a.createElement("i",{className:"fas fa-search"})),l.a.createElement(b.a,{style:{display:"none"}},l.a.createElement("img",{src:k.a,alt:"alt"}),l.a.createElement("img",{src:g.a,alt:"alt"}),l.a.createElement("img",{src:j.a,alt:"alt"}))),l.a.createElement("div",{className:"realizations__box"},l.a.createElement("div",{className:"realizations__project",onClick:this.handleChange2},l.a.createElement("i",{className:"fas fa-search"})),l.a.createElement(b.a,{style:{display:"none"}},l.a.createElement("img",{src:k.a,alt:"alt"}),l.a.createElement("img",{src:g.a,alt:"alt"}),l.a.createElement("img",{src:j.a,alt:"alt"})))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"realizations__box",style:{height:"auto"}},l.a.createElement(b.a,null,l.a.createElement("img",{src:k.a,alt:"alt"}),l.a.createElement("img",{src:g.a,alt:"alt"}),l.a.createElement("img",{src:j.a,alt:"alt"})))))))}}]),a}(n.Component)),O=(t(54),function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"contact"},l.a.createElement("section",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"contact__logo"}),l.a.createElement("p",{className:"contact__text"},"Skontaktuj si\u0119 z nami"),l.a.createElement("div",{className:"contact__mediaBox"},l.a.createElement("div",{className:"contact__mediaBox__standardMedia"},l.a.createElement("p",{className:"standardMedia"},l.a.createElement("i",{className:"fas fa-mobile-alt"}),"+ 48 123 456 789 "),l.a.createElement("p",{className:"standardMedia"},l.a.createElement("i",{className:"fas fa-envelope"}),l.a.createElement("a",{href:"mailto:kwiatostan.biuro@gmail.com"},"kwiatostan.biuro@gmail.com"))),l.a.createElement("div",{className:"contact__mediaBox__socialMedia"},l.a.createElement("p",{className:"socialMedia"},l.a.createElement("a",{href:"https://www.facebook.com/kwiatostanpracowniaflorystyczna",target:"_blank"},l.a.createElement("i",{className:"fab fa-facebook-square"}))),l.a.createElement("p",{className:"socialMedia"},l.a.createElement("a",{href:"https://www.instagram.com/kwiatostan_pracownia/",target:"_blank"},l.a.createElement("i",{className:"fab fa-instagram"})))))))))}}]),a}(n.Component)),P=(t(55),function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).handleExtraPolicy=function(){t.setState({privacyPolicy:!t.state.privacyPolicy})},t.handleCloseExtraPolicy=function(e){27===e.keyCode&&t.setState({privacyPolicy:!1}),console.log(e.keyCode)},t.state={privacyPolicy:!1},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleCloseExtraPolicy,!1)}},{key:"componentWillUnmount",value:function(){document.addEventListener("keydown",this.handleCloseExtraPolicy,!1)}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("footer",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("p",{className:"footer__text"},"Wszelkie prawa zastrze\u017cone ",l.a.createElement("span",null,"www.slubnaflorystyka.pl")," | ",l.a.createElement("span",{onClick:this.handleExtraPolicy},"Polityka prywatno\u015bci")),l.a.createElement("p",{className:"footer__design"},"Designed by ",l.a.createElement("span",null,l.a.createElement("a",{href:"https://github.com/ArturDziadosz",target:"_blank"},"Artur Dziadosz")))),l.a.createElement("article",{className:"privacyPolicy",style:this.state.privacyPolicy?{display:"block"}:{}},l.a.createElement("header",{className:"privacyPolicy__title"},l.a.createElement("h2",null,"POLITYKA PRYWATNO\u015aCI")),l.a.createElement("h3",{className:"privacyPolicy__subtitle"},"DANE OSOBOWE"),l.a.createElement("p",{className:"privacyPolicy__text"},"1. Administrator danych osobowych"),l.a.createElement("p",{className:"privacyPolicy__subtext"},"Dane kontaktowe:"),l.a.createElement("p",{className:"privacyPolicy__subtext"},"e-mail: kwiatostan.biuro@gmail.com"),l.a.createElement("p",{className:"privacyPolicy__text"},"2. Cel zbierania danych"),l.a.createElement("p",{className:"privacyPolicy__subtext"},"Pa\u0144stwa dane osobowe przes\u0142ane na naszego e-maila lub przez formularz kontaktowy s\u0105 przetwarzane wy\u0142\u0105cznie w celu udzielenia odpowiedzi na zadane pytania i/lub przekazania niezb\u0119dnych informacji."),l.a.createElement("p",{className:"privacyPolicy__subtext"},"Podane w formularzu dane osobowe (imi\u0119, adres e-mail) po klikni\u0119ciu przycisku \u201ewy\u015blij\u201d zostan\u0105 przes\u0142ane bezpo\u015brednio na naszego e-maila."),l.a.createElement("p",{className:"privacyPolicy__subtext"},"Przetwarzane dane w przypadku zainteresowania nasz\u0105 ofert\u0105 b\u0119d\u0105 niezb\u0119dne do zawarcia lub realizacji umowy."),l.a.createElement("p",{className:"privacyPolicy__subtext"},"Przes\u0142ane dane osobowe nie b\u0119d\u0105 wykorzystywane do cel\xf3w marketingowych, nie b\u0119d\u0105 udost\u0119pniane innym podmiotom, oraz nie b\u0119d\u0105 przetwarzane w zautomatyzowany spos\xf3b (profilowanie)."),l.a.createElement("p",{className:"privacyPolicy__text"},"3. Zakres przetwarzanych danych"),l.a.createElement("p",{className:"privacyPolicy__subtext"},"Przetwarzamy nast\u0119puj\u0105cy zakres danych osobowych:"),l.a.createElement("p",{className:"privacyPolicy__subtext"},"\u2013 imi\u0119,"),l.a.createElement("p",{className:"privacyPolicy__subtext"},"\u2013 adres e-mail,"),l.a.createElement("p",{className:"privacyPolicy__subtext"},"\u2013 dodatkowe dane podane dobrowolnie w tre\u015bci wiadomo\u015bci"),l.a.createElement("p",{className:"privacyPolicy__text"},"4. Okres czasu przechowywania danych osobowych"),l.a.createElement("p",{className:"privacyPolicy__subtext"},"Dok\u0142adamy wszelkich stara\u0144 aby ograniczy\u0107 okres przechowywania Pa\u0144stwa danych osobowych."),l.a.createElement("p",{className:"privacyPolicy__subtext"},"Dane przetwarzane w celu udzielenia odpowiedzi na zadane pytania i przekazania niezb\u0119dnych informacji b\u0119d\u0105 przetwarzane przez okres trwania korespondencji."),l.a.createElement("p",{className:"privacyPolicy__subtext"},"W przypadku niebudz\u0105cego w\u0105tpliwo\u015bci zako\u0144czenia korespondencji z Pa\u0144stwa strony, dane zostan\u0105 usuni\u0119te w terminie 7 dni."),l.a.createElement("p",{className:"privacyPolicy__text"},"5. Przys\u0142uguj\u0105ce prawa w stosunku do przetwarzanych danych osobowych"),l.a.createElement("p",{className:"privacyPolicy__subtext"},"Przys\u0142uguje Pa\u0144stwu prawo \u017c\u0105dania dost\u0119pu do swoich danych osobowych, ich sprostowania, usuni\u0119cia lub ograniczenia przetwarzania, prawo do przeniesienia danych, wyra\u017cenia sprzeciwu wobec przetwarzania danych oraz prawo do wniesienia skargi do organu nadzorczego."),l.a.createElement("button",{className:"privacyPolicy__exit",onClick:this.handleExtraPolicy},"X"))))}}]),a}(n.Component)),C=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={intro:!0},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.timeoutID=setTimeout((function(){e.setState({intro:!1})}),3e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutID)}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"start",style:this.state.intro?{display:"flex"}:{display:"none"}},l.a.createElement("div",{className:"logo"})),l.a.createElement(E,null),l.a.createElement(y,null),l.a.createElement(_,null),l.a.createElement("main",null,l.a.createElement(w,{name:"offer"}),l.a.createElement(h,null),l.a.createElement(f,null),l.a.createElement(x,{name:"realization"})),l.a.createElement(O,{name:"contact"}),l.a.createElement(P,null))}}]),a}(n.Component);t(56);c.a.render(l.a.createElement(C,null),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.79a85b2e.chunk.js.map