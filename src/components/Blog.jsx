import React, { Component } from 'react'
import { PageHeader, Jumbotron,Grid, Row, Col, Image } from "react-bootstrap"
import { Form, FormGroup, ControlLabel, FormControl, Button} from "react-bootstrap"
import './style/Blog.css';

export default class Blog extends Component {
  

  render() {
    var style = {
        backgroundImage: `url(${'/assets/clouds-texture01.jpg'})`
     
    };
    return (
      <div>
        <header className="masthead" style={style}>
        <div className="overlay"></div>
        <div className="container">
         <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="site-heading">
               <h1>Blog</h1>
                <span className="subheading">Blogs will be posted here</span>
            </div>
          </div>
         </div>
        </div>
        </header>
        {/* body */}
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
