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
        {/* <Grid> */}
          <header className="page-header" style={pageheader}>
          {/* <div className="overlay"></div> */}
          <div className="container">
         <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="page-info">
            <h1>Stephen Sarfo</h1>
              <h4>Junior Web Developer</h4>
             </div>
            </div>
          </div>
         </div>
        </header>
   <Grid>
    <Row sm={2} md={3} className="show-grid test-center" responsive>
         <div  className="logos">
         {/* <Col> */}
         <Image src="assets/html-5-logo.png"   alt="Html-Logo" className="html-logo" height="200px" width="150px" responsive/>
         {/* </Col>
         <Col> */}
         <Image src="assets/css-svg-logo.png" alt="Html-Logo" className="css-logo"  className="css-logo" height="200px" width="150px" responsive/>
         {/* </Col>
         <Col> */}
         <Image src="assets/javascript_badge.png" alt="Html-Logo" className="js-logo" className="js-logo" height="200px" width="200px" responsive/>
         {/* </Col> */}
         </div>
      </Row> 
      <hr/>
      <Row className="about">
          <h2>About</h2>
          <Image  src="" className="about-pic" alt="Picture of me" responsive/>
          <p>
          Show it who's boss! This is a very individual thing, painting is. This is your dirt, so
           you put it where you want it. Let's do a winter scene, what the heck. I want to do something 
           that's just a little bit different, and I think you'll find it's fun. We're like drug dealers -- 
           we come into town and get people absolutely addicted to painting. Follow the contour of the mountain. 
           The other thing that is so fantastic about painting is that it teaches you to see. Take right off today! 
           Pull from the outside in. Give it a lift-upper. Don't worry about it -- just sort of throw it in. Blend 
           color right here on the canvas. Maybe we will have a little moon up here. Just let them fall right out of your brush.
            Get tough with it. Just a nice little mountain, a little friendly guy. I'll show you exactly the kind of messes we get
             into sometimes. Just any old thing that'll stick to the canvas. In the woods, you have all different colors of green.
          </p>
      </Row>
            
      </Grid>
      </div>
    )
  }
}
