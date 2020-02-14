import React, {Component} from 'react';
import './PrivacyPolicy.scss';

class PrivacyPolicy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      privacyPolicy: false
    }
  }

  handleExtraPolicy = () => {
    this.setState({
      privacyPolicy: !this.state.privacyPolicy
    })
  };

  handleCloseExtraPolicy = (e) => {
    if (e.keyCode === 27) {
      this.setState({
        privacyPolicy: false
      })
    }
    console.log(e.keyCode);
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleCloseExtraPolicy, false)
  }
  componentWillUnmount() {
    document.addEventListener("keydown", this.handleCloseExtraPolicy, false);
  }

  render() {
    return (
      <>
        <footer className="container">
          <div className="row">
            <p className="footer__text">Wszelkie prawa zastrzeżone <span><a href={"https://www.kwiatostan.pl"} target={"_blank"}>www.kwiatostan.pl</a></span> <span>|</span> <span onClick={this.handleExtraPolicy}>Polityka prywatności</span></p>
            <p className="footer__design">Designed by <span><a href={"https://github.com/ArturDziadosz"} target={"_blank"}>Artur Dziadosz</a></span></p>
          </div>
          <article className={"privacyPolicy"} style={this.state.privacyPolicy ? {display: "block"} : {}}>
            <header className="privacyPolicy__title"><h2>POLITYKA PRYWATNOŚCI</h2></header>
            <h3 className="privacyPolicy__subtitle">DANE OSOBOWE</h3>
            <p className="privacyPolicy__text">1. Administrator danych osobowych</p>
            <p className="privacyPolicy__subtext">Dane kontaktowe:</p>
            <p className="privacyPolicy__subtext">e-mail: kwiatostan.biuro@gmail.com</p>
            <p className="privacyPolicy__text">2. Cel zbierania danych</p>
            <p className="privacyPolicy__subtext">Państwa dane osobowe przesłane na naszego e-maila lub przez formularz kontaktowy są przetwarzane wyłącznie w celu udzielenia odpowiedzi na zadane pytania i/lub przekazania niezbędnych informacji.</p>
            <p className="privacyPolicy__subtext">Podane w formularzu dane osobowe (imię, adres e-mail) po kliknięciu przycisku „wyślij” zostaną przesłane bezpośrednio na naszego e-maila.</p>
            <p className="privacyPolicy__subtext">Przetwarzane dane w przypadku zainteresowania naszą ofertą będą niezbędne do zawarcia lub realizacji umowy.</p>
            <p className="privacyPolicy__subtext">Przesłane dane osobowe nie będą wykorzystywane do celów marketingowych, nie będą udostępniane innym podmiotom, oraz nie będą przetwarzane w zautomatyzowany sposób (profilowanie).</p>
            <p className="privacyPolicy__text">3. Zakres przetwarzanych danych</p>
            <p className="privacyPolicy__subtext">Przetwarzamy następujący zakres danych osobowych:</p>
            <p className="privacyPolicy__subtext">– imię,</p>
            <p className="privacyPolicy__subtext">– adres e-mail,</p>
            <p className="privacyPolicy__subtext">– dodatkowe dane podane dobrowolnie w treści wiadomości</p>
            <p className="privacyPolicy__text">4. Okres czasu przechowywania danych osobowych</p>
            <p className="privacyPolicy__subtext">Dokładamy wszelkich starań aby ograniczyć okres przechowywania Państwa danych osobowych.</p>
            <p className="privacyPolicy__subtext">Dane przetwarzane w celu udzielenia odpowiedzi na zadane pytania i przekazania niezbędnych informacji będą przetwarzane przez okres trwania korespondencji.</p>
            <p className="privacyPolicy__subtext">W przypadku niebudzącego wątpliwości zakończenia korespondencji z Państwa strony, dane zostaną usunięte w terminie 7 dni.</p>
            <p className="privacyPolicy__text">5. Przysługujące prawa w stosunku do przetwarzanych danych osobowych</p>
            <p className="privacyPolicy__subtext">Przysługuje Państwu prawo żądania dostępu do swoich danych osobowych, ich sprostowania, usunięcia lub ograniczenia przetwarzania, prawo do przeniesienia danych, wyrażenia sprzeciwu wobec przetwarzania danych oraz prawo do wniesienia skargi do organu nadzorczego.</p>
            <button className="privacyPolicy__exit" onClick={this.handleExtraPolicy}>X</button>
          </article>
        </footer>
      </>
    )
  }
}

export default PrivacyPolicy;
