import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom'
import { SignProvider } from './contexts/signContext'
import NavPlaceholder from './components/nav-placeholder/nav-placeholder'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Home from './pages/home'
import Explore from './pages/explore'
import Pricing from './pages/pricing'
import SignInSignUp from './pages/sign-in-sign-up'
import About from './pages/about'

function App() {
  return (
    <SignProvider>
      <div className="App">
      <Navbar />
      <NavPlaceholder />
      <Switch>
        <Route key='Home' exact path='/' component={Home} />
        <Route key='Explore' exact path='/explore' component={Explore}/>
        <Route key='Pricing' exact path='/pricing' component={Pricing} />
        <Route key='SignIn' exact path='/signin' component={SignInSignUp} />
        <Route key='About' exact path='/about' component={About} />
      </Switch>
      <Footer />
    </div>
    </SignProvider>
  );
}

export default App;
