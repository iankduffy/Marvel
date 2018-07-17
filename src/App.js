import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import './App.css';
import { HashRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
        <Sidebar/> 
        <Main/>
      </div>
      </HashRouter>
    );
  }
}

export default App;
