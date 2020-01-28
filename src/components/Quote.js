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
              <p className="quote__text">"NAJLEPSZYCH I NAJPIĘKNIEJSZYCH RZECZY NA ŚWIECIE, NIE MOŻNA ANI ZOBACZYĆ, ANI DOTKNĄĆ. TRZEBA JE POCZUĆ SERCEM."
              </p>
              <p className="quote__author">HELLEN KELLER
              </p>
              <Link to={"realization"} spy={true} smooth={true} duration={1000} offset={-200} className={"linkButton"}><div className="quoteButton">ZOBACZ REALIZACJE</div></Link>
            </div>
          </section>
        </article>
      </>
    )
  }
}

export default Quote;