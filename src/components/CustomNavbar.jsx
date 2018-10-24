import React, { Component } from 'react'
import { Navbar, Nav, NavItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashRouter} from  'react-router-dom';
import './style/CustomNavbar.css';

export default class CustomNavbar extends Component {

  render() {

    return (
      <Navbar fixedTop>
        <Navbar.Header>
            <Navbar.Brand>
                    Stephen Page
            </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Toggle/>
        <Navbar.Collapse>
        <Nav pullRight>
              <NavItem eventKey={1}  href="/" componentClass={Link} to="/">Home</NavItem>
              <NavItem eventKey={2}  href="/about" componentClass={Link} to="/about" >About</NavItem>
              <NavItem eventKey={3}  href="/contact" componentClass={Link} to="/contact">Contact</NavItem>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
  }
}
