import React, {Component} from 'react';
import './Video.scss';

class Video extends Component {
  render() {
    return (
      <>
        <article className="video">
          <section className="container">
            <div className="row">
              <div className="video__img"/>
              <p className="realizations__title">TWOJA WŁASNA ANTYSMOGOWA OCHRONA</p>
            </div>
            <div className={"video__frame"} style={{margin: "0 auto"}}>
              <div style={{position: "relative", height: "0", paddingBottom: "56.25%"}}>
                <iframe src={"https://embed.ted.com/talks/kamal_meattle_how_to_grow_fresh_air?texttrack=pl"}
                        width={"854"}
                        height={"480"}
                        style={{position: "absolute", left: "0", top: "0", width: "100%", height: "100%"}}
                        frameBorder={"0"}
                        scrolling={"no"}
                        title={"ted"}
                        allowFullScreen={true}/>
              </div>

            </div>
          </section>
        </article>
      </>
    )
  }
}

export default Video;