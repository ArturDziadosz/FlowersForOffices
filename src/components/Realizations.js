import React, {Component} from 'react';
import './Realizations.scss';

class Realizations extends Component {
  render() {
    return (
      <>
        <article className="realizations">
          <section className="container">
            <div className="row">
              <p className="realizations__title">REALIZACJE</p>
            </div>
            <div className="row">
              <div className="realizations__project" />
              <div className="realizations__project" />
            </div>
            <div className="row">
              <div className="realizations__project" />
              <div className="realizations__project" />
            </div>
          </section>
        </article>
      </>
    )
  }
}

export default Realizations;