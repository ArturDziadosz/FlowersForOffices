import React, {Component} from 'react';
import './PrivacyPolicy.scss';

class PrivacyPolicy extends Component {
  render() {
    return (
      <>
        <footer className="container">
          <div className="row">
            <p className="footer__text">Wszelkie prawa zastrzeżone <span>www.slubnaflorystyka.pl</span> | <span>Polityka prywatności</span></p>
            <p className="footer__design">Designed by <span><a href={"https://github.com/ArturDziadosz"} target={"_blank"}>Artur Dziadosz</a></span></p>
          </div>
        </footer>
      </>
    )
  }
}

export default PrivacyPolicy;