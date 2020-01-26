import React, {Component} from 'react';
import Header from "./Header";
import Hero from "./Hero";
import Offer from "./Offer";
import Quote from "./Quote";
import About from "./About";
import Realizations from "./Realizations";
import Contact from "./Contact";
import PrivacyPolicy from "./PrivacyPolicy";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intro: true
    }
  }

  componentDidMount() {
    this.timeoutID = setTimeout(() => {
      this.setState({
        intro: false
      })
    }, 3000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutID);
  }

  render() {
    return (
      <>
        <div className="start" style={this.state.intro ? {display: "flex"} : {display: "none"}}>
          <div className="logo"/>
        </div>
        <Header/>
        <Hero/>
        <main>
          <Offer/>
          <Quote/>
          <About/>
          <Realizations/>
        </main>
        <Contact/>
        {/*        <Home4Steps name={"fourSteps"}/>*/}
      </>
    )
  }
}

export default App;
