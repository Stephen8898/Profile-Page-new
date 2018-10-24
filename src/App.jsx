import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/CustomNavbar';
import Footer from './components/Footer';

class App extends Component {


  
  render() {
   
    return (
      <Router>
        <div>
          <Navbar/>
          <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about"component={About}/>
          <Route path="/contact" component={Contact}/>
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
