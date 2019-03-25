import React, { Component } from 'react';
import Routers from './router'
import{BrowserRouter} from 'react-router-dom'

import NavMenu from './navmenu';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
      <NavMenu/>
       <Routers/> 
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
