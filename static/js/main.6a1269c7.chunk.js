(this.webpackJsonpflowers_for_offices=this.webpackJsonpflowers_for_offices||[]).push([[0],[,,,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/photobox1.e9fba2fa.jpg"},function(e,a,t){e.exports=t.p+"static/media/photobox2.9419b7b5.jpg"},function(e,a,t){e.exports=t.p+"static/media/photobox3.a4e2ba7f.jpg"},,,,,,,,,,function(e,a,t){e.exports=t(57)},,,,,function(e,a,t){},,,,,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(10),i=t.n(r),o=t(2),l=t(3),s=t(5),m=t(4),u=t(6),p=(t(32),function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"contactBar"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("p",{className:"standardMedia"},c.a.createElement("i",{className:"fas fa-mobile-alt"}),"+ 48 123 456 789",c.a.createElement("i",{className:"fas fa-envelope"}),c.a.createElement("a",{href:"mailto:kwiatostan.biuro@gmail.com"},"kwiatostan.biuro@gmail.com")),c.a.createElement("p",{className:"socialMedia"},c.a.createElement("a",{href:"https://www.facebook.com/kwiatostanpracowniaflorystyczna",target:"_blank"},c.a.createElement("i",{className:"fab fa-facebook-square"})),c.a.createElement("a",{href:"https://www.instagram.com/kwiatostan_pracownia/",target:"_blank"},c.a.createElement("i",{className:"fab fa-instagram"})))))))}}]),a}(n.Component)),d=t(7),y=(t(43),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).handleExtraMenu=function(){t.setState({extraMenu:!t.state.extraMenu})},t.state={topPosition:t.props.topPosition,extraMenu:!1},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"componentDidUpdate",value:function(e){e.topPosition!==this.props.topPosition&&this.setState({topPosition:this.props.topPosition})}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("nav",{className:"nav"},c.a.createElement("ul",{className:"nav__list"},c.a.createElement("li",{className:this.state.topPosition?"nav__list__elem":"nav__list__elem nav__list__elem--short"},c.a.createElement(d.Link,{to:"header",spy:!0,smooth:!0,duration:1e3,offset:-250},"STRONA G\u0141\xd3WNA")),c.a.createElement("li",{className:this.state.topPosition?"nav__list__elem":"nav__list__elem nav__list__elem--short",onMouseEnter:this.handleExtraMenu,onMouseLeave:this.handleExtraMenu},c.a.createElement(d.Link,{to:"offer",spy:!0,smooth:!0,duration:1e3,offset:-200},"OFERTA ",c.a.createElement("i",{className:"fas fa-chevron-down"})),c.a.createElement("ul",{className:"nav__list__more",style:this.state.extraMenu?{display:"block"}:{}},c.a.createElement("li",{className:"nav__list__more__child"},"FLORYSTYKA \u015aLUBNA"),c.a.createElement("li",{className:"nav__list__more__child"},"FLORYSTYKA OKOLICZNO\u015aCIOWA"),c.a.createElement("li",{className:"nav__list__more__child"},"FLORYSTYKA DLA DOMU I FIRMY"))),c.a.createElement("li",{className:this.state.topPosition?"nav__list__elem":"nav__list__elem nav__list__elem--short"},c.a.createElement(d.Link,{to:"realization",spy:!0,smooth:!0,duration:1e3,offset:-80},"REALIZACJE")),c.a.createElement("li",{className:this.state.topPosition?"nav__list__elem":"nav__list__elem nav__list__elem--short"},c.a.createElement(d.Link,{to:"contact",spy:!0,smooth:!0,duration:1e3},"KONTAKT")))))}}]),a}(n.Component)),E=(t(44),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).distanceToTop=function(){window.addEventListener("scroll",(function(e){window.scrollY>=100?t.setState({topPosition:!1}):t.setState({topPosition:!0})}))},t.state={topPosition:!0},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.distanceToTop()}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("header",{className:this.state.topPosition?"header":"header container--short"},c.a.createElement("section",{className:this.state.topPosition?"container":"container container--short"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"header__logo"}),c.a.createElement(y,{topPosition:this.state.topPosition})))))}}]),a}(n.Component)),_=(t(45),function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"heroBanner container",name:"header"},c.a.createElement("div",{className:"heroBanner__img heroBanner__img--first"}),c.a.createElement("div",{className:"heroBanner__img heroBanner__img--second"})))}}]),a}(n.Component)),f=(t(46),function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).handleBigger=function(e){"800ms linear 0s 1 normal forwards running offerFlex"===e.currentTarget.style.animation?(e.currentTarget.style.animation="",document.querySelectorAll("article.container .row .col-4").forEach((function(e){e.style.left="0"}))):(document.querySelectorAll("article.container .row .col-4").forEach((function(e){e.style.animation="",e.style.left="0"})),"secondOffer"===e.currentTarget.getAttribute("id")?document.querySelectorAll("article.container .row .col-4").forEach((function(e){e.style.left="-460px"})):"thirdOffer"===e.currentTarget.getAttribute("id")&&document.querySelectorAll("article.container .row .col-4").forEach((function(e){e.style.left="-920px"})),e.currentTarget.style.animation="offerFlex 800ms forwards linear")},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("article",{className:"container",name:"offer"},c.a.createElement("div",{className:"row"},c.a.createElement(d.Link,{to:"offer",spy:!0,smooth:!0,duration:1e3,offset:-60,className:"col-4",onClick:this.handleBigger,id:"firstOffer"},c.a.createElement("div",{className:"article__img"}),c.a.createElement("h3",{className:"article__title"},"FLORYSTYKA OKOLICZNO\u015aCIOWA"),c.a.createElement("p",{className:"article__text"},"Oferujemy niepowtarzalne aran\u017cacje kwiatowe, pasuj\u0105ce do charakteru i okoliczno\u015bci przyj\u0119cia. Zadbamy, aby ten dzie\u0144 by\u0142 dla Was niezapomniany.")),c.a.createElement(d.Link,{to:"offer",spy:!0,smooth:!0,duration:1e3,offset:-60,className:"col-4",onClick:this.handleBigger,id:"secondOffer"},c.a.createElement("div",{className:"article__img"}),c.a.createElement("h3",{className:"article__title"},"FLORYSTYKA \u015aLUBNA"),c.a.createElement("p",{className:"article__text"},"Zajmujemy si\u0119 kompleksow\u0105 opraw\u0105 florystyczn\u0105 \u015blubu. Stworzymy dla Was niezapomniane dekoracje w najwa\u017cniejszym momencie \u017cycia.")),c.a.createElement(d.Link,{to:"offer",spy:!0,smooth:!0,duration:1e3,offset:-60,className:"col-4",onClick:this.handleBigger,id:"thirdOffer"},c.a.createElement("div",{className:"article__img"}),c.a.createElement("h3",{className:"article__title"},"FLORYSTYKA DLA DOMU I FIRMY"),c.a.createElement("p",{className:"article__text"},"Organizujemy przestrze\u0144, gdzie nie powinno zabrakn\u0105\u0107 kwiat\xf3w, kt\xf3re wprowadz\u0105 wyj\u0105tkow\u0105 atmosfer\u0119, \u015bwie\u017co\u015b\u0107 i mn\xf3stwo barw.")))))}}]),a}(n.Component)),h=(t(47),function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("article",{className:"quote"},c.a.createElement("section",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("p",{className:"quote__text"},'"NAJLEPSZYCH I NAJPI\u0118KNIEJSZYCH RZECZY NA \u015aWIECIE, NIE MO\u017bNA ANI ZOBACZY\u0106, ANI DOTKN\u0104\u0106. TRZEBA JE POCZU\u0106 SERCEM."'),c.a.createElement("p",{className:"quote__author"},"HELLEN KELLER"),c.a.createElement(d.Link,{to:"realization",spy:!0,smooth:!0,duration:1e3,offset:-200,className:"linkButton"},c.a.createElement("div",{className:"quoteButton"},"ZOBACZ REALIZACJE"))))))}}]),a}(n.Component)),w=(t(48),function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("article",{className:"container"},c.a.createElement("div",{className:"row about"},c.a.createElement("div",{className:"about__img"}),c.a.createElement("p",{className:"about__title"},"KWIATOSTAN \u2013 PRACOWNIA FLORYSTYCZNA"),c.a.createElement("p",{className:"about__text"},"Pracownia Kwiatostan powsta\u0142a z pasji do tworzenia pi\u0119knych kompozycji oraz z zami\u0142owania do kwiat\xf3w. Stawiamy przede wszystkim na \u015bwie\u017co\u015b\u0107 kwiat\xf3w, dob\xf3r najlepszych gatunk\xf3w oraz estetyk\u0119 ca\u0142ej dekoracji. Liczy si\u0119 dla nas zadowolenie naszych Klient\xf3w, dlatego troszczymy si\u0119 o ka\u017cdy detal, tak aby ta najwa\u017cniejsza uroczysto\u015b\u0107 w \u017cyciu zapad\u0142a na d\u0142ugo w ich pami\u0119ci. Nasze inspiracje czerpiemy z otoczenia oraz najnowszych trend\xf3w, nieustannie poszukujemy mo\u017cliwo\u015bci rozwoju i doskonalenia warsztatu."),c.a.createElement("p",{className:"about__footer"},"\u2013 To wszystko dla Was \u2013"))))}}]),a}(n.Component)),b=t(19),z=t(15),N=t.n(z),v=t(16),k=t.n(v),j=t(17),O=t.n(j),g=(t(49),function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).handleChange=function(e){e.currentTarget.style.display="none"},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("article",{className:"realizations",name:"realization"},c.a.createElement("section",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("p",{className:"realizations__title"},"REALIZACJE")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"realizations__box"},c.a.createElement("div",{className:"realizations__project"},c.a.createElement("i",{className:"fas fa-search"}))),c.a.createElement("div",{className:"realizations__box"},c.a.createElement("div",{className:"realizations__project"},c.a.createElement("i",{className:"fas fa-search"})))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"realizations__box"},c.a.createElement("div",{className:"realizations__project",onClick:this.handleChange},c.a.createElement("i",{className:"fas fa-search"})),c.a.createElement(b.a,null,c.a.createElement("img",{src:N.a,alt:"alt"}),c.a.createElement("img",{src:k.a,alt:"alt"}),c.a.createElement("img",{src:O.a,alt:"alt"}))),c.a.createElement("div",{className:"realizations__box"},c.a.createElement("div",{className:"realizations__project"},c.a.createElement("i",{className:"fas fa-search"})))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"realizations__box"},c.a.createElement("div",{className:"realizations__project"},c.a.createElement("i",{className:"fas fa-search"}))),c.a.createElement("div",{className:"realizations__box"},c.a.createElement(b.a,null,c.a.createElement("img",{src:N.a,alt:"alt"}),c.a.createElement("img",{src:k.a,alt:"alt"}),c.a.createElement("img",{src:O.a,alt:"alt"})))))))}}]),a}(n.Component)),P=(t(54),function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"contact"},c.a.createElement("section",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"contact__logo"}),c.a.createElement("p",{className:"contact__text"},"Skontaktuj si\u0119 z nami"),c.a.createElement("div",{className:"contact__mediaBox"},c.a.createElement("div",{className:"contact__mediaBox__standardMedia"},c.a.createElement("p",{className:"standardMedia"},c.a.createElement("i",{className:"fas fa-mobile-alt"}),"+ 48 123 456 789 "),c.a.createElement("p",{className:"standardMedia"},c.a.createElement("i",{className:"fas fa-envelope"}),c.a.createElement("a",{href:"mailto:kwiatostan.biuro@gmail.com"},"kwiatostan.biuro@gmail.com"))),c.a.createElement("div",{className:"contact__mediaBox__socialMedia"},c.a.createElement("p",{className:"socialMedia"},c.a.createElement("a",{href:"https://www.facebook.com/kwiatostanpracowniaflorystyczna",target:"_blank"},c.a.createElement("i",{className:"fab fa-facebook-square"}))),c.a.createElement("p",{className:"socialMedia"},c.a.createElement("a",{href:"https://www.instagram.com/kwiatostan_pracownia/",target:"_blank"},c.a.createElement("i",{className:"fab fa-instagram"})))))))))}}]),a}(n.Component)),x=(t(55),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).handleExtraPolicy=function(){t.setState({privacyPolicy:!t.state.privacyPolicy})},t.handleCloseExtraPolicy=function(e){27===e.keyCode&&t.setState({privacyPolicy:!1}),console.log(e.keyCode)},t.state={privacyPolicy:!1},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleCloseExtraPolicy,!1)}},{key:"componentWillUnmount",value:function(){document.addEventListener("keydown",this.handleCloseExtraPolicy,!1)}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("footer",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("p",{className:"footer__text"},"Wszelkie prawa zastrze\u017cone ",c.a.createElement("span",null,"www.slubnaflorystyka.pl")," | ",c.a.createElement("span",{onClick:this.handleExtraPolicy},"Polityka prywatno\u015bci")),c.a.createElement("p",{className:"footer__design"},"Designed by ",c.a.createElement("span",null,c.a.createElement("a",{href:"https://github.com/ArturDziadosz",target:"_blank"},"Artur Dziadosz")))),c.a.createElement("article",{className:"privacyPolicy",style:this.state.privacyPolicy?{display:"block"}:{}},c.a.createElement("header",{className:"privacyPolicy__title"},c.a.createElement("h2",null,"POLITYKA PRYWATNO\u015aCI")),c.a.createElement("h3",{className:"privacyPolicy__subtitle"},"DANE OSOBOWE"),c.a.createElement("p",{className:"privacyPolicy__text"},"1. Administrator danych osobowych"),c.a.createElement("p",{className:"privacyPolicy__subtext"},"Dane kontaktowe:"),c.a.createElement("p",{className:"privacyPolicy__subtext"},"e-mail: kwiatostan.biuro@gmail.com"),c.a.createElement("p",{className:"privacyPolicy__text"},"2. Cel zbierania danych"),c.a.createElement("p",{className:"privacyPolicy__subtext"},"Pa\u0144stwa dane osobowe przes\u0142ane na naszego e-maila lub przez formularz kontaktowy s\u0105 przetwarzane wy\u0142\u0105cznie w celu udzielenia odpowiedzi na zadane pytania i/lub przekazania niezb\u0119dnych informacji."),c.a.createElement("p",{className:"privacyPolicy__subtext"},"Podane w formularzu dane osobowe (imi\u0119, adres e-mail) po klikni\u0119ciu przycisku \u201ewy\u015blij\u201d zostan\u0105 przes\u0142ane bezpo\u015brednio na naszego e-maila."),c.a.createElement("p",{className:"privacyPolicy__subtext"},"Przetwarzane dane w przypadku zainteresowania nasz\u0105 ofert\u0105 b\u0119d\u0105 niezb\u0119dne do zawarcia lub realizacji umowy."),c.a.createElement("p",{className:"privacyPolicy__subtext"},"Przes\u0142ane dane osobowe nie b\u0119d\u0105 wykorzystywane do cel\xf3w marketingowych, nie b\u0119d\u0105 udost\u0119pniane innym podmiotom, oraz nie b\u0119d\u0105 przetwarzane w zautomatyzowany spos\xf3b (profilowanie)."),c.a.createElement("p",{className:"privacyPolicy__text"},"3. Zakres przetwarzanych danych"),c.a.createElement("p",{className:"privacyPolicy__subtext"},"Przetwarzamy nast\u0119puj\u0105cy zakres danych osobowych:"),c.a.createElement("p",{className:"privacyPolicy__subtext"},"\u2013 imi\u0119,"),c.a.createElement("p",{className:"privacyPolicy__subtext"},"\u2013 adres e-mail,"),c.a.createElement("p",{className:"privacyPolicy__subtext"},"\u2013 dodatkowe dane podane dobrowolnie w tre\u015bci wiadomo\u015bci"),c.a.createElement("p",{className:"privacyPolicy__text"},"4. Okres czasu przechowywania danych osobowych"),c.a.createElement("p",{className:"privacyPolicy__subtext"},"Dok\u0142adamy wszelkich stara\u0144 aby ograniczy\u0107 okres przechowywania Pa\u0144stwa danych osobowych."),c.a.createElement("p",{className:"privacyPolicy__subtext"},"Dane przetwarzane w celu udzielenia odpowiedzi na zadane pytania i przekazania niezb\u0119dnych informacji b\u0119d\u0105 przetwarzane przez okres trwania korespondencji."),c.a.createElement("p",{className:"privacyPolicy__subtext"},"W przypadku niebudz\u0105cego w\u0105tpliwo\u015bci zako\u0144czenia korespondencji z Pa\u0144stwa strony, dane zostan\u0105 usuni\u0119te w terminie 7 dni."),c.a.createElement("p",{className:"privacyPolicy__text"},"5. Przys\u0142uguj\u0105ce prawa w stosunku do przetwarzanych danych osobowych"),c.a.createElement("p",{className:"privacyPolicy__subtext"},"Przys\u0142uguje Pa\u0144stwu prawo \u017c\u0105dania dost\u0119pu do swoich danych osobowych, ich sprostowania, usuni\u0119cia lub ograniczenia przetwarzania, prawo do przeniesienia danych, wyra\u017cenia sprzeciwu wobec przetwarzania danych oraz prawo do wniesienia skargi do organu nadzorczego."),c.a.createElement("button",{className:"privacyPolicy__exit",onClick:this.handleExtraPolicy},"X"))))}}]),a}(n.Component)),A=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={intro:!0},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.timeoutID=setTimeout((function(){e.setState({intro:!1})}),3e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutID)}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"start",style:this.state.intro?{display:"flex"}:{display:"none"}},c.a.createElement("div",{className:"logo"})),c.a.createElement(p,null),c.a.createElement(E,null),c.a.createElement(_,null),c.a.createElement("main",null,c.a.createElement(f,{name:"offer"}),c.a.createElement(h,null),c.a.createElement(w,null),c.a.createElement(g,{name:"realization"})),c.a.createElement(P,{name:"contact"}),c.a.createElement(x,null))}}]),a}(n.Component);t(56);i.a.render(c.a.createElement(A,null),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.6a1269c7.chunk.js.map