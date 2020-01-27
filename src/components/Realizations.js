import React, {Component} from 'react';
import './Realizations.scss';

class Realizations extends Component {
  render() {
    return (
      <>
        <article className="realizations" name={"realization"}>
          <section className="container">
            <div className="row">
              <p className="realizations__title">REALIZACJE</p>
            </div>
            <div className="row">
              <div className="realizations__box">
                <div className="realizations__project">
                  <i className="fas fa-search"/>
                </div>
              </div>
              <div className="realizations__box">
                <div className="realizations__project">
                  <i className="fas fa-search"/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="realizations__box">
                <div className="realizations__project">
                  <i className="fas fa-search"/>
                </div>
              </div>
              <div className="realizations__box">
                <div className="realizations__project">
                  <i className="fas fa-search"/>
                </div>
              </div>
            </div>
          </section>
        </article>
      </>
    )
  }
}

export default Realizations;