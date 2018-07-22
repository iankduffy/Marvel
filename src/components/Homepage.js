import React, { Component } from 'react';
import '../styles/Main.scss';
import { Link } from 'react-router-dom';
import HeroLink from './Link'
import Heros from '.././data/super-heros.json'; 
import Background from '.././images/Home-image.jpg'; 

// https://stackoverflow.com/questions/47837221/react-router-4-path-with-parameter

class Homepage extends Component {

  render() {
    const heros = Heros.heros; 
    const data = heros
    ?(<div className="hero-list">
      {heros.map((hero) => (
        <HeroLink hero={hero}/>
      ))}
      </div>)
      : null; 
    // console.log(data[0].name); 

    return (
      <div style={{backgroundImage: `url(${Background})`}}>
        <div className="intro">
          <h1>MARVEL AVENGERS</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam efficitur orci in risus blandit pellentesque. Nunc aliquam augue vitae mi molestie maximus. Pellentesque ut vestibulum nibh. Ut volutpat consequat magna sed vestibulum. Duis nec erat sollicitudin, tempor libero et, aliquet lectus. Mauris pretium tincidunt nisi ut congue. Nam quis mauris nec diam pellentesque lacinia sed in dolor. Fusce malesuada augue ultrices lobortis tristique.</p>
          <p>Nam quis urna sit amet magna hendrerit finibus. Proin id nibh felis. Nullam rutrum tortor in elit vestibulum, vel hendrerit sapien imperdiet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas volutpat accumsan ligula id condimentum. Pellentesque vel ligula sed ex porttitor eleifend. Nam pulvinar tristique felis sit amet vulputate.</p>
        </div>
          {data}
      </div>
    );
  }
}

export default Homepage;