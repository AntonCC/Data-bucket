import React, { useState } from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom'
import { SignProvider } from './contexts/signContext'
import ScrollTop from './components/scroll-top/scroll-top'
import Sidebar from './components/sidebar/sidebar'
import NavPlaceholder from './components/nav-placeholder/nav-placeholder'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Home from './pages/home'
import Explore from './pages/explore'
import Pricing from './pages/pricing'
import SignInSignUp from './pages/sign-in-sign-up'
import About from './pages/about'

const App = () => {
  const [sidebar, setSidebar] = useState(false)

  const handleSidebar = () => {
    setSidebar(!sidebar)
  }

  const closeSidebar = () => {
    setSidebar(false)
  }

  return (
    <SignProvider>
    <ScrollTop/>
    <Sidebar sidebar={sidebar} handleSidebar={handleSidebar} />
      <div className='App' onClick={sidebar ? closeSidebar : ''}>
        <Navbar handleSidebar={handleSidebar} />
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
