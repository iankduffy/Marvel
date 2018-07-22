import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/hero-link.scss'; 


const HeroLink = ({hero}) => {
  let img = require(`./../images/heros/${hero.smallImg}`); 
  
  return (
    
    <Link to={hero.url}>
    <div className="hero-link">
      <img src={img} alt={hero.name} />
    </div>
    </Link>
  )

}
export default HeroLink;
