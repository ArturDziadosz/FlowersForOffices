import React, {Component} from 'react';
import './Quote.scss';

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
              <div className="quoteButton">ZOBACZ REALIZACJE</div>
            </div>
          </section>
        </article>
      </>
    )
  }
}

export default Quote;