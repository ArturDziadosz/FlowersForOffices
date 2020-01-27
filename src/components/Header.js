import React, {Component} from 'react';
import NavBar from "./NavBar";
import './Header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topPosition: true
    }
  }

  componentDidMount() {
    this.distanceToTop();
  }

  distanceToTop = () => {
    window.addEventListener("scroll", ev => {
      if (window.scrollY >= 100) {
        this.setState({
          topPosition: false
        })
      } else {
        this.setState({
          topPosition: true
        })
      }
    })
  };

  render() {
    return (
      <>
        <header className={this.state.topPosition ? "" : "container--short"}>
          <section className={this.state.topPosition ? "container" : "container container--short"}>
            <div className="row">
              <div className="header__logo"/>
              <NavBar topPosition={this.state.topPosition}/>
            </div>
          </section>
        </header>
      </>
    )
  }
}

export default Header;