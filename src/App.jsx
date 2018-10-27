import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
// import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Navbar from './components/CustomNavbar';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

class App extends Component {


  
  render() {
   
    return (
      <Router>
        <div>
          <Navbar/>
          <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/portfolio"component={Portfolio}/>
          <Route path="/contact" component={Contact}/>
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
