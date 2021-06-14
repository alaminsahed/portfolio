import React from "react";
import { Navbar, Nav,Container } from "react-bootstrap";
import logo from "../image/logo01.png";
import "./Style.css";

const Header = (props) => {
  console.log(props);
  return (
    <div className="position-sticky navbar" >
      <Navbar bg="transparent" expand="lg">
        <img
          src={logo}
          width="100"
          height="80"
          className="d-inline-block align-top"
          alt="logo"
        />

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link className="link-menu">Home</Nav.Link>

            <Nav.Link className="link-menu">About</Nav.Link>

            <Nav.Link className="link-menu">Skills</Nav.Link>

            <Nav.Link className="link-menu">Portfolio</Nav.Link>

            <Nav.Link className="link-menu">Education</Nav.Link>

            <Nav.Link className="link-menu">Blogs</Nav.Link>

            <Nav.Link className="link-menu">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      
      </Navbar>
    </div>
  );
};

export default Header;
