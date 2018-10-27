import React, { Component } from 'react'
import { PageHeader, Jumbotron,Grid, Row, Col, Image } from "react-bootstrap"
import { Form, FormGroup, ControlLabel, FormControl, Button} from "react-bootstrap"
import './style/Blog.css';

export default class Blog extends Component {
  

  render() {
    return (
      <div>
        <header className="masthead" >
        {/* <h1>Contacts <small>Where to find me</small></h1>
        <h3>Email</h3> */}
        <div className="overlay"></div>
        <div className="container">
         <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="site-heading">
               <h1>Blog</h1>
                <span className="sub-heading">Blogs will be posted here</span>
            </div>
            <hr/>
          </div>
         </div>
        </div>
        </header>
        <div className="container">
         <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="post-preview">
                <a></a>
                
            </div>
            <hr/>
          </div>
         </div>
        </div>
      </div>
    )
  }
}
