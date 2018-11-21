import React, { Component } from 'react'
import { Grid, Jumbotron, Row, Image } from 'react-bootstrap'
import './style/Portfolio.css';




export default class Portfolio extends Component {


  render() {
    return (
      <div>
        <Jumbotron>
        <h1>Portfolio</h1>
        </Jumbotron>
        <Grid>
          <Row className="gifImage">
            <Image src="/assets/animated-under-construction.gif" alt="gif here" responsive/>
          </Row>
        </Grid>
      </div>
    )
  }
}
