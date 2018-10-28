import React, { Component } from 'react'
import { Navbar, Nav, NavItem, Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style/CustomNavbar.css';

export default class CustomNavbar extends Component {

  render() {

    return (
      <Navbar fixedTop>
        <Navbar.Header>
            <Navbar.Brand>
                  <a href="/"> <Image src="assets/smyf_logo.png" className="brand-logo" responsive/></a>
            </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Toggle/>
        <Navbar.Collapse>
        <Nav pullRight>
              <NavItem eventKey={1}  href="/" componentClass={Link} to="/">Home</NavItem>
              <NavItem eventKey={2}  href="/portfolio" componentClass={Link} to="/portfolio" >Portfolio</NavItem>
              <NavItem eventKey={3}  href="/blog" componentClass={Link} to="/blog">Blog</NavItem>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
  }
}
