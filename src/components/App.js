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
  render() {
    return (
      <>
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
