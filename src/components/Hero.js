import React, { Component } from 'react';
import '../styles/Main.scss';


// https://stackoverflow.com/questions/47837221/react-router-4-path-with-parameter

class Heros extends Component {
  constructor(props){
    super(props)
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Hero</h1>
        <p>{this.props.match.params.id}</p>
      </div>
    );
  }
}

export default Heros;
