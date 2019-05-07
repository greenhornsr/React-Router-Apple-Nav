import React from 'react';
import './App.css';

import NavWrapper from './components/NavWrapper'

import {Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Route path="/nav" component={NavWrapper} />
    </div>
  );
}

export default App;
