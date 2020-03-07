import React, {Component} from 'react';
import {Link} from 'react-scroll';
import './NavBar.scss';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topPosition: this.props.topPosition,
      extraMenu: false,
      hamburgerMenuOpen: this.props.hamburgerMenuOpen
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.topPosition !== this.props.topPosition) {
      this.setState({
        topPosition: this.props.topPosition
      })
    }
  }

/*  handleExtraMenu = () => {
    this.setState({
      extraMenu: !this.state.extraMenu
    })
  };*/

  handleCloseHamburgerMenu = () => {
    if (typeof this.props.handleParentCloseHamburgerMenu === "function") {
      this.props.handleParentCloseHamburgerMenu();
    }
  };

  render() {
    return (
      <>
        <nav className={this.state.hamburgerMenuOpen ? "nav nav--hamburger" : "nav"}>
          <ul className={"nav__list"}>
            <li className={this.state.topPosition ? "nav__list__elem" : "nav__list__elem nav__list__elem--short"}><Link to={"header"} spy={true} smooth={true} duration={1000} offset={-250} onClick={this.handleCloseHamburgerMenu}>STRONA GŁÓWNA</Link></li>
            <li className={this.state.topPosition ? "nav__list__elem" : "nav__list__elem nav__list__elem--short"} /*onMouseEnter={this.handleExtraMenu} onMouseLeave={this.handleExtraMenu}*/ ><Link to={"offer"} spy={true} smooth={true} duration={1000} offset={-140} onClick={this.handleCloseHamburgerMenu}>OFERTA {/*<i className="fas fa-chevron-down" />*/}</Link>
{/*              <ul className={"nav__list__more"} style={this.state.extraMenu ? {display: "block"} : {}}>
                <li className="nav__list__more__child">FLORYSTYKA ŚLUBNA</li>
                <li className="nav__list__more__child">
                  FLORYSTYKA OKOLICZNOŚCIOWA</li>
                <li className="nav__list__more__child">FLORYSTYKA DLA DOMU I FIRMY</li>
              </ul>*/}
            </li>
            <li className={this.state.topPosition ? "nav__list__elem" : "nav__list__elem nav__list__elem--short"} ><Link to={"realization"} spy={true} smooth={true} duration={1000} offset={-130} onClick={this.handleCloseHamburgerMenu}>REALIZACJE</Link></li>
            <li className={this.state.topPosition ? "nav__list__elem" : "nav__list__elem nav__list__elem--short"} ><Link to={"contact"} spy={true} smooth={true} duration={1000} onClick={this.handleCloseHamburgerMenu}>KONTAKT</Link></li>
          </ul>
        </nav>
      </>
    )
  }
}

export default NavBar;