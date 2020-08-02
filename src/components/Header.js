import React, {Component} from 'react';
import {Link} from "react-scroll";
import NavBar from "./NavBar";
import './Header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topPosition: true,
      tightScreen: false,
      hamburgerMenuOpen: false
    }
  }

  componentDidMount() {
    this.distanceToTop();
    this.checkingInnerWidth();
  }

  distanceToTop = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 200) {
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

  checkingInnerWidth = () => {
    if (window.innerWidth < 850) {
      this.setState({
        tightScreen: true
      })
    } else {
      this.setState({
        tightScreen: false
      })
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 850) {
        this.setState({
          tightScreen: true
        })
      } else {
        this.setState({
          tightScreen: false
        })
      }
    })
  };

  handleHamburgerMenu = () => {
    this.setState({
      hamburgerMenuOpen: !this.state.hamburgerMenuOpen
    })
  };

  closeHamburgerMenu = () => {
    this.setState({
      hamburgerMenuOpen: false
    })
  };

  render() {
    return (
      <>
        <header className={this.state.topPosition ? "header" : "header container--short"}>
          <section className={this.state.topPosition ? "container" : "container container--short"}>
            <div className="row">
              <Link to={"header"} spy={true} smooth={true} duration={1000} offset={-250}>
                <div className={this.state.topPosition ? "header__logo" : "header__logo header__logo--alt"}/>
              </Link>
              <NavBar topPosition={this.state.topPosition}/>
              {this.state.tightScreen ? this.state.hamburgerMenuOpen ?
                <div className={"header__hamburger header__hamburger--open"} style={this.state.topPosition ? {} : {top: "28px"}} onClick={this.handleHamburgerMenu}>
                  <div className={"header__hamburger__bar"}/>
                  <div className={"header__hamburger__bar"}/>
                </div> :
                <div className={"header__hamburger"} style={this.state.topPosition ? {} : {top: "23px"}} onClick={this.handleHamburgerMenu}>
                  <div className={"header__hamburger__bar"}/>
                </div> : ""}
            </div>
            {this.state.hamburgerMenuOpen && this.state.tightScreen ?
              <NavBar topPosition={this.state.topPosition} hamburgerMenuOpen={this.state.hamburgerMenuOpen}
                      handleParentCloseHamburgerMenu={this.closeHamburgerMenu}/> : ""}
          </section>
        </header>
      </>
    )
  }
}

export default Header;