import React, { Component } from 'react';
import './style/Footer.css';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <hr/>
        <h6><Link to="/" >Home</Link></h6>
        <h6><Link to="/contact" >Contact Me</Link></h6>  <h6><Link to="/about" >About Me</Link></h6>
         <em className="footer">&copy; Stephen web-page </em> 
      </div>
    )
  }
}
