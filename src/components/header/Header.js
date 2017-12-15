import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/download.png';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Navbar,
  Nav,
  MenuItem,
  NavItem,
  NavDropdown,
  FormGroup,
  FormControl
} from 'react-bootstrap';
import './header.css';

class Header extends Component {
  render() {
    const appNavbar = (
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Link to={'/'}>
            <span className="logo">ARTFORM</span>
          </Link>
          <Navbar.Toggle />

          <input
            className="search"
            placeholder="search artists and categories"
          />
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav pullRight>
            <div className="item">Become An Artist</div>
            <div className="item">Explore</div>
            <div className="item">
              Me <img className="header-img" src={img} />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
    return <div className="header">{appNavbar}</div>;
  }
}

export default Header;
