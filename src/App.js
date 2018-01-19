import React, { Component } from 'react';
import './css/landing.css';
import { Navbar, Intro, Iframe, LinkedIn } from './containers';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


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
            <Switch>
              <Route exact path="/" component={Intro} />
              <Route path="/projects/:project" component={Iframe} />
              <Route exact path="/contact" component={LinkedIn} />
            </Switch>
          </div>
        </section>
      </Router>
    );
  }
}

export default App;
