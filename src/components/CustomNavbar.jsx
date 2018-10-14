import React, { Component } from 'react'
import { Navbar, Nav, NavItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>

            </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Toggle/>
        <Navbar.Collapse>
        <Nav pullRight>
              <NavItem eventKey={1}  componenetClass={Link} to="/">Home</NavItem>
              <NavItem eventKey={2}  componenetClass={Link} to="/about">About</NavItem>
              <NavItem eventKey={3} href="/contact">Contact</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
