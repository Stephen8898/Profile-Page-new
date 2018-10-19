import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button, PageHeader } from "react-bootstrap";
import './style/Home.css';

export default class Home extends Component {
  constructor (props){
        super(props)
        this.state = {

        }
  }

    generateNews = this.generateNews.bind(this)

     generateNews(){
       fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=878b3482fff648a9a468d877d578e159")
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
      <Grid className="page-layout">
          {/* <Jumbotron>
              <Image className="image-jumbotron" src="assets/SpaceIIMG.jpg" responsive />
              <h2>Welcome to my profile-page</h2>
              <p>This is how your build a website with react router and bootstrap</p>
              <Link to="/about">
            <Button bsStyle="primary"> About </Button>
          </Link>
          </Jumbotron> */}
          <div className="container-fluid">
                <div className="container-banner">

                </div>
          </div>
          <PageHeader>
          {/* <Image className="image-jumbotron" src="assets/SpaceIIMG.jpg" responsive /> */}
          <h1>Stephen Sarfo</h1>
          </PageHeader>
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

      </Grid>
    )
  }
}
