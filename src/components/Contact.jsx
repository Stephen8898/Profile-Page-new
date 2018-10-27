import React, { Component } from 'react'
import { PageHeader, Jumbotron,Grid, Row, Col, Image } from "react-bootstrap"
import { Form, FormGroup, ControlLabel, FormControl, Button} from "react-bootstrap"
import './style/Contact.css';

export default class Contact extends Component {
  

  render() {


    return (
        <div>
      <Jumbotron className="contact-header">
      <h1>Contacts <small>Where to find me</small></h1>
      <h3>Email</h3>
      </Jumbotron>
      <Row>
        <Col className="header">
        </Col>
    
      </Row>
        </div>
    )
  }
}
