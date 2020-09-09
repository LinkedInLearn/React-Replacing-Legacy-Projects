import React, { Component } from 'react';
import Navigation from './Navigation';
import Jumbotron from './Jumbotron';
import Feed from './Feed';

class App extends Component {
  render() {
    return (
      <div class="container">
        <Navigation />
        <Jumbotron />
        <Feed />
        <div class="footer">
              <p>&copy; A1A Beachfront Ave.</p>
        </div>
      </div>
    )
  }
}

export default App;
