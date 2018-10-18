import React, { Component } from 'react'
import { PageHeader, Grid, Row, Col, Image } from "react-bootstrap";
import './style/Contact.css';

export default class Contact extends Component {
  render() {
    return (
        <div>
        <PageHeader className="header">
        Contacts <small>Where to find me</small>
      </PageHeader>

        <h3>Email</h3>
        </div>
    )
  }
}
