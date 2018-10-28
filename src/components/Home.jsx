import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button, PageHeader } from "react-bootstrap";
import Navbar from './CustomNavbar';
import './style/Home.css';
import './style/Blog.css';
// import { url } from 'inspector';

export default class Home extends Component {

  // constructor (props){
  //       super(props)
  //       this.state = {

  //       }
  // }

 
    // generateNews = this.generateNews.bind(this)

    //  generateNews(){
    //    fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey="+ this.api_Key)
    //     .then((result) => {
    //         return result.json();
    //             })
    //     .then((json) =>{
    //         console.log(json);
    //     })
    // }
  
    // componentDidMount() {
    //     this.generateNews();
    //   }
  
  render() {

    var pageheader = {
      backgroundImage: `url(${'/assets/clouds-texture03.jpg'})`
    };
    return (
      <div> 
          <header className="page-header" style={pageheader}>
          {/* <div className="overlay"></div> */}
          <div className="container">
         <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="page-info">
            <h1>Stephen Sarfo</h1>
              <span className="subheading">Junior Web Developer</span>
             </div>
            </div>
          </div>
         </div>
        </header>
{/*         
          <Row sm={2} md={3} className="show-grid test-center" responsive>
             <div  className="logos">
             <Image src="assets/html-5-logo.png" placeholder="Image here"  className="html-logo" height="200px" width="150px" responsive/>
             <Image src="assets/css-svg-logo.png" placeholder="Image here"  className="css-logo" height="200px" width="150px" responsive/>
             <Image src="assets/javascript_badge.png" placeholder="Image here"  className="js-logo" height="200px" width="200px" responsive/>
             </div>
          </Row> */}
          <Row>
          
          </Row>
            

      </div>
    )
  }
}
