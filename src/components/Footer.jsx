import React, { Component } from 'react';
import './style/Footer.css';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <hr id="hr-top"/>
        <div className="link-footer">
        <div className="links">
        <span className="home-link"><Link to="/" >Home</Link></span>
        <span className="contact-link"><Link to="/contact" >Contact Me</Link></span>  
        <span className="about-link"><Link to="/about" >About Me</Link></span>
        </div>
        </div>
        <hr id="hr-bottom"/>
        <div className="footer-copy">
         <em>&copy; Stephen web-page </em> 
         </div>
      </div>
    )
  }
}
