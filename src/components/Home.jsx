import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import './style/Home.css';

export default class Home extends Component {
  render() {
    return (
      <Grid>
          <Jumbotron>
              <Image className="image-jumbotron" src="assets/SpaceIIMG.jpg" responsive />
              <h2>Welcome to my profile-page</h2>
              <p>This is how your build a website with react router and bootstrap</p>
              <Link to="/about">
            <Button bsStyle="primary"> About </Button>
          </Link>
          </Jumbotron>
          <Row className="show-grid test-center">
            <Col xs={12} sm={4} className="person-wrapper">
                <Image src="assets/linkdenProf.jpg" placeholder="Image here" circle className="profile-pic"/>
                <h3>Steve</h3>
                <p>He wants to be a developer.</p>
            </Col>
          </Row>

      </Grid>
    )
  }
}
