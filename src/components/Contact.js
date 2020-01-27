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
                  <p className="standardMedia"><i className="fas fa-mobile-alt"/>+ 48 123 456 789 </p>
                  <p className="standardMedia"><i className="fas fa-envelope"/>kwiatostan.biuro@gmail.com</p>
                </div>
                <div className="contact__mediaBox__socialMedia">
                  <p className="socialMedia"><i className="fab fa-facebook-square"/></p>
                  <p className="socialMedia"><i className="fab fa-instagram"/></p>
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