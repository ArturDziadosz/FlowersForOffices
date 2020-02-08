import React, {Component} from 'react';
import './ContactBar.scss';

class ContactBar extends Component {
  render() {
    return (
      <>
        <section className="contactBar">
          <div className="container">
            <div className="row">
              <div>
                <p className="standardMedia"><i className="fas fa-mobile-alt"/><span>+ 48 123 456 789</span></p>
                <p className="standardMedia"><i className="fas fa-envelope"/><a
                  href={"mailto:kwiatostan.biuro@gmail.com"}>kwiatostan.biuro@gmail.com</a></p>
              </div>
              <p className="socialMedia"><a href={"https://www.facebook.com/kwiatostanpracowniaflorystyczna"}
                                            target={"_blank"}><i className="fab fa-facebook-square"/></a><a
                href={"https://www.instagram.com/kwiatostan_pracownia/"} target={"_blank"}><i
                className="fab fa-instagram"/></a></p>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default ContactBar;