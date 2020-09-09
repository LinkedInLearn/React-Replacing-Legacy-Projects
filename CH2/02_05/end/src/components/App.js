import React, { Component } from 'react';
import Navigation from './Navigation';
import Jumbotron from './Jumbotron';
import Feed from './Feed';

// data
import data from '../data/data.json';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      name: "Manny Henri",
      jumbotronTitle: "List of courses",
      feeds: data,
    }
  }
  render() {
    return (
      <div className="container">
        <Navigation />
        <Jumbotron title={this.state.jumbotronTitle}/>
        <Feed feeds={this.state.feeds}/>
        <div className="footer">
              <p>&copy; {this.state.name} Inc.</p>
        </div>
      </div>
    )
  }
}

export default App;
