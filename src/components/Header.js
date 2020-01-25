import React, {Component} from 'react';
import NavBar from "./NavBar";
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <>
        <header className="container">
          <section className="row">
            <div className="header__logo" />
            <NavBar />
          </section>
        </header>
      </>
    )
  }
}

export default Header;