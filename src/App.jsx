import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Blog from './components/Blog';
import Navbar from './components/CustomNavbar';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

class App extends Component {


  
  render() {
   
    return (
      <Router>
        <React.Fragment>
          <Navbar/>
          <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/portfolio"component={Portfolio}/>
          <Route path="/blog" component={Blog}/>
          </Switch>
          <Footer/>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
