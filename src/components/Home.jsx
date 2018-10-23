import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button, PageHeader } from "react-bootstrap";
import Navbar from './CustomNavbar';
import './style/Home.css';

export default class Home extends Component {

  constructor (props){
        super(props)
        this.state = {

        }
  }

    api_Key = process.env.API_key;
    generateNews = this.generateNews.bind(this)

     generateNews(){
       fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey="+ this.api_Key)
        .then((result) => {
            return result.json();
                })
        .then((json) =>{
            console.log(json);
        })
    }
  
    componentDidMount() {
        this.generateNews();
      }
  
  render() {
    return (
      <div className="container-fluid">
          {/* <Jumbotron>
              <Image className="image-jumbotron" src="assets/SpaceIIMG.jpg" responsive />
              <h2>Welcome to my profile-page</h2>
              <p>This is how your build a website with react router and bootstrap</p>
              <Link to="/about">
            <Button bsStyle="primary"> About </Button>
          </Link>
          </Jumbotron> */}
          <PageHeader className="page-header">
          {/* <Image className="image-jumbotron" src="assets/SpaceIIMG.jpg" responsive /> */}
          <div className="page-info">
          <h1>Stephen Sarfo</h1>
          </div>
          </PageHeader>
          {/* <div className="container-fluid"> */}
                <div className="container-banner">
                   <h1>This will get my info</h1>
                </div>
          {/* </div> */}
          
          <Row className="show-grid test-center">
            <Col xs={12} sm={4} className="person-wrapper">
                <Image src="assets/linkdenProf.jpg" placeholder="Image here" circle className="profile-pic"/>
                <h3>Steve</h3>
                <p>He wants to be a developer.</p>
            </Col>
            <Col sm={6} md={3} className="news-box">
                <h4>News Feed</h4>
                <Button onClick={this.generateNews}>News</Button>
            </Col>
          </Row>

      </div>
    )
  }
}
