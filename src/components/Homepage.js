import React, { Component } from 'react';
import '../styles/Main.scss';
import { Link } from 'react-router-dom';

// https://stackoverflow.com/questions/47837221/react-router-4-path-with-parameter

class Homepage extends Component {
  render() {
    return (
      <div>
        <h1>Marvel</h1>
        <Link to="/hero/spiderman">Spiderman</Link>
        <Link to="/hero/IronMan">IronMan</Link>
      </div>
    );
  }
}

export default Homepage;
