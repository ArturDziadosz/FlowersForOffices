import React, {Component} from 'react';
import {Link} from 'react-scroll';
import './NavBar.scss';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topPosition: this.props.topPosition
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.topPosition !== this.props.topPosition) {
      this.setState({
        topPosition: this.props.topPosition
      })
    }
  }

  render() {
    return (
      <>
        <nav className={"nav"}>
          <ul className={"nav__list"}>
            <li className={this.state.topPosition ? "nav__list__elem" : "nav__list__elem nav__list__elem--short"}><Link to={"header"} spy={true} smooth={true} duration={1000} offset={-250}>STRONA GŁÓWNA</Link></li>
            <li className={this.state.topPosition ? "nav__list__elem" : "nav__list__elem nav__list__elem--short"}><Link to={"offer"} spy={true} smooth={true} duration={1000} offset={-200}>OFERTA <i className="fas fa-chevron-down" /></Link></li>
            <li className={this.state.topPosition ? "nav__list__elem" : "nav__list__elem nav__list__elem--short"}><Link to={"realization"} spy={true} smooth={true} duration={1000} offset={-80}>REALIZACJE</Link></li>
            <li className={this.state.topPosition ? "nav__list__elem" : "nav__list__elem nav__list__elem--short"}><Link to={"contact"} spy={true} smooth={true} duration={1000}>KONTAKT</Link></li>
          </ul>
        </nav>
      </>
    )
  }
}

export default NavBar;