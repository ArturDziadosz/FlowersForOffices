import React, {Component} from 'react';
import './Quote.scss';
import {Link} from "react-scroll";

class Quote extends Component {
  render() {
    return (
      <>
        <article className="quote">
          <section className="container">
            <div className="row">
              <p className="quote__text">„BĄDŹ ZMIANĄ KTÓRĄ PRAGNIESZ UJRZEĆ W ŚWIECIE”
              </p>
              <p className="quote__author">mahatma gandhi
              </p>
              <Link to={"realization"} spy={true} smooth={true} duration={1000} offset={-130} className={"linkButton"}>
                <div className="quoteButton">ZOBACZ REALIZACJE</div>
              </Link>
            </div>
          </section>
        </article>
      </>
    )
  }
}

export default Quote;