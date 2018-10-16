import React, { Component } from 'react'
import { Navbar, Nav, NavItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                    Stephen Page
            </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Toggle/>
        <Navbar.Collapse>
        <Nav pullRight>
              <NavItem eventKey={1}  componenetClass={Link} href="/" to="/">Home</NavItem>
              <NavItem eventKey={2}  componenetClass={Link} href="/about" to="/about">About</NavItem>
              <NavItem eventKey={3} componenetClass={Link} href="/contact" to="/contact">Contact</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
