import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom'
import NavPlaceholder from './components/nav-placeholder/nav-placeholder'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Home from './pages/home'
import Pricing from './pages/pricing'

function App() {
  return (
    <div className="App">
      <Navbar />
      <NavPlaceholder />
      <Switch>
        <Route key='Home' exact path='/' component={Home} />
        <Route key='Pricing' exact path='/pricing' component={Pricing} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
