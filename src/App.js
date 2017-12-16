import React, { Component } from 'react';
import './css/landing.css';
import './css/main.css'
import { Navbar, Text, Iframe } from './containers'
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSection: "home"
    };
  }

  render() {
    return (
      <Router>
        <section className="hero is-info is-fullheight">
          <Navbar navigation={this.navigation} />

          <div className="hero-body">
            <Route exact path="/" component={Text} />
            <Route path="/projects/:project" component={Iframe} />
            <Route exact path="/contact" component={Text} />
            {/* <Switch section={this.state.currentSection} navigation={this.navigation} /> */}
          </div>
        </section>
      </Router>
    );
  }
}

export default App;
