import React, { Component } from 'react';
import './style/Footer.css';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
     <div className="footer">
        <footer className="section footer-classic context-dark bg-image">
                <div className="container">
                  <div className="row row-30">
                    <div className="col-md-4 col-xl-5">
                      <div className="pr-xl-4"><a className="brand" href="index.html"><img className="brand-logo-light" src="images/agency/logo-inverse-140x37.png" alt="" width="140" height="37" src="images/agency/logo-retina-inverse-280x74.png 2x"/></a>
                        <p>This is my profile page I created, please explore it and I hope my work speaks for itself.</p>
                         Rights
                        {/* <p class="rights"><span>©  </span><span class="copyright-year">2018</span><span> </span><span>Waves</span><span>. </span><span>All Rights Reserved.</span></p> */}
                      </div>
                    </div>
                    <div className="col-md-4">
                      <h5>Contacts</h5>
                      <dl className="contact-list">
                      </dl>
                      <dl className="contact-list">
                        <dt>email:</dt>
                        <dd><a href="mailto:#">stephen.sarfo1998@outlook.com</a></dd>
                      </dl>
                      <dl className="contact-list">
                        <dt>phones:</dt>
                        <dd><a href="tel:#">+91 7568543012</a> <span>or</span> <a href="tel:#">+91 9571195353</a>
                        </dd>
                      </dl>
                    </div>
                    <div className="col-md-4 col-xl-3">
                      <h5>Links</h5>
                      <div className="nav-list">
                      <ul>
                        <li className="home-link"><Link to="/" >Home</Link></li>
                        <li className="blog-link"><Link to="/blog" >Blog</Link></li>  
                        <li className="about-link"><Link to="/portfolio" >Portfolio</Link></li>
                      </ul>
                      </div>
                    </div>
                  </div>
                  <div className="footer-copyright text-center py-3">© 2018 Copyright:
                  <a href="/">Stephen web-page </a>
                </div>
                </div>
            </footer>
        </div> 
    )
  }
}
