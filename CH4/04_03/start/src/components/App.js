import React, { Component } from 'react';
import firebase from 'firebase';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Jumbotron from './Jumbotron';
import Feed from './Feed';
import Contact from './Contact';
import About from './About';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      name: "Manny Henri",
      jumbotronTitle: "List of courses",
      feeds: [],
    }
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_AUTH_DOMAIN",
      databaseURL: "YOUR_DATABASE_URL",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_STORAGE_BUCKET",
      messagingSenderId: "YOUR_MESSAGING_SENDER_ID"
    });

    firebase.database().ref(`/`)
    .on('value', snapshot => {
      this.setState({
        feeds: snapshot.val()
      })
    })
  }
  render() {
    return (
      <Router>
        <div className="container">
          <Navigation />
          <Jumbotron title={this.state.jumbotronTitle}/>
          <Switch>
            <Route path="/contact" component={Contact}/>
            <Route path="/about" component={About}/>
            <Route exact path="/" render={(props) => (
              <Feed feeds={this.state.feeds} />
            )} />
          </Switch>
          <div className="footer">
                <p>&copy; {this.state.name} Inc.</p>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
