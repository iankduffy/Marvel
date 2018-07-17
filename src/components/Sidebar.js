import React, { Component } from 'react';
import logo from '../images/Avengers-A.svg'
import '../styles/sidebar.scss';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="logo-box">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="menu">
        </div> 
      </div>
    );
  }
}

export default Sidebar;
