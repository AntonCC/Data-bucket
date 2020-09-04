import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom'
import NavPlaceholder from './components/nav-placeholder/nav-placeholder'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Home from './pages/home'

function App() {
  return (
    <div className="App">
      <Navbar />
      <NavPlaceholder />
      <Switch>
        <Route exact path='/' name='Home' component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
