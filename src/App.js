import React, { Component } from 'react';
import './css/landing.css';
import './css/main.css'
import { Switch, Navbar } from './containers'



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSection: "home"
    };

    this.navigation = this.navigation.bind(this);
  }
  navigation(e) {
    var section = e.target.id;
    if (section) {
      this.setState({ currentSection: section });
      setTimeout(() => {
        console.log(this.state.currentSection);
      }, 300);
    }
  }
  render() {
    return (
      <section class="hero is-info is-fullheight">
        <Navbar navigation={this.navigation} />

        <div class="hero-body">
          <Switch section={this.state.currentSection} navigation={this.navigation} />
        </div>

      </section>
    );
  }
}

export default App;
