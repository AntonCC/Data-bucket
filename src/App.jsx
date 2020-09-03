import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Home from './pages/home'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' name='Home' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
