import React, { Component } from 'react';
import '../styles/Main.scss'; 
import { Route, Switch } from 'react-router-dom';
import HomePage from './Homepage';
import Hero from './Hero';

// https://stackoverflow.com/questions/47837221/react-router-4-path-with-parameter

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Switch> 
          <Route exact path="/" component={HomePage} />
          <Route path="/hero/:id" component={Hero} />
        </Switch> 



      </div>
    );
  }
}

export default Main;
