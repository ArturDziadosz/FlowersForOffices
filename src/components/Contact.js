import React, {Component} from 'react';
import "./Contact.scss";

class Contact extends Component {
  render() {
    return (
      <>
        <div className="contact">
          <section className="container">
            <div className="row">
              <div className="contact__logo"/>
              <p className="contact__text">Skontaktuj się z nami</p>
              <div className="contact__mediaBox">
                <div className="contact__mediaBox__standardMedia">
                  <p className="standardMedia"><i className="fas fa-mobile-alt"/>+ 48 602 415 025 </p>
                  <p className="standardMedia"><i className="fas fa-envelope"/><a
                    href={"mailto:kwiatostan.biuro@gmail.com"}>kwiatostan.biuro@gmail.com</a></p>
                </div>
                <div className="contact__mediaBox__socialMedia">
                  <p className="socialMedia"><a href={"https://www.facebook.com/kwiatostanpracowniazieleni"} target={"_blank"}><i className="fab fa-facebook-square"/></a></p>
                  <p className="socialMedia"><a href={"https://www.instagram.com/kwiatostan_pracownia_zieleni/"} target={"_blank"}><i className="fab fa-instagram"/></a></p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    )
  }
}

export default Contact;