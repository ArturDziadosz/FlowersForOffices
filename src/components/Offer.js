import React, {Component} from 'react';
import './Offer.scss';

class Offer extends Component {
  render() {
    return (
      <>
        <article className="container" name={"offer"}>
          <div className="row">
            <section className="col-4">
              <div className="article__img" />
              <h3 className="article__title">FLORYSTYKA ŚLUBNA</h3>
              <p className="article__text">Zajmujemy się kompleksową oprawą florystyczną ślubu. Stworzymy dla Was niezapomniane dekoracje w najważniejszym momencie życia.</p>
            </section>
            <section className="col-4">
              <div className="article__img" />
              <h3 className="article__title">FLORYSTYKA OKOLICZNOŚCIOWA</h3>
              <p className="article__text">Oferujemy niepowtarzalne aranżacje kwiatowe, pasujące do charakteru i okoliczności przyjęcia. Zadbamy, aby ten dzień był dla Was niezapomniany.</p>
            </section>
            <section className="col-4">
              <div className="article__img" />
              <h3 className="article__title">FLORYSTYKA DLA DOMU I FIRMY</h3>
              <p className="article__text">Organizujemy przestrzeń, gdzie nie powinno zabraknąć kwiatów, które wprowadzą wyjątkową atmosferę, świeżość i mnóstwo barw.</p>
            </section>
          </div>
        </article>
      </>
    )
  }
}
export default Offer;