import React, { Component } from 'react';
import '../styles/Hero-page.scss';
import Herosdata from '.././data/super-heros.json';

// https://stackoverflow.com/questions/47837221/react-router-4-path-with-parameter

class Heros extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const heroURL = this.props.match.url;
    const Heros = Herosdata.heros;
    
    const data = Heros.find(hero =>{
      return hero.url === heroURL
    })
    const Background = require(`./../images/heros/${data.smallImg}`); 
    return (
      <div className="hero-page" style={{backgroundImage: `url(${Background})`}}>
        <div className="intro">
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        </div>
      </div>
    );
  }
}

export default Heros;
