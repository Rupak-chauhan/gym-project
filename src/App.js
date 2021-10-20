import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import './App.css';
import AboutUsComponent from './components/AboutUsComponent';
import BackgroundComponent from './components/BackgroundComponent';
import ContactComponent from './components/ContactComponent';
import ContactContentComponent from './components/ContactContentComponent';
import FooterComponent from './components/FooterComponent';
import HomeComponent from './components/HomeComponent';
import OurServicesContent from './components/OurServicesContent';
import OurSevicesComponent from './components/OurServicesComponent';
import MainHeader from './Navigation/MainHeader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainHeader />
        <Switch>
          <Route path="/" exact component={HomeComponent}/>
          <Route path="/aboutus" exact component={AboutUsComponent}/>
          <Route path="/contactus" component={ContactComponent}/>
          <Route path="/services" component={OurSevicesComponent}/>
        </Switch>
        <FooterComponent />
      </div>
    );
  }
}

export default App;
