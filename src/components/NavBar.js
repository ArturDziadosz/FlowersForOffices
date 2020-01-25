import React, {Component} from 'react';
import './NavBar.scss';

class NavBar extends Component {
  render() {
    return (
      <>
        <nav className={"nav"}>
          <ul className={"nav__list"}>
            <li className={"nav__list__elem"}>STRONA GŁÓWNA</li>
            <li className={"nav__list__elem"}>OFERTA <i className="fas fa-chevron-down" /></li>
            <li className={"nav__list__elem"}>REALIZACJE</li>
            <li className={"nav__list__elem"}>KONTAKT</li>
          </ul>
        </nav>
      </>
    )
  }
}

export default NavBar;