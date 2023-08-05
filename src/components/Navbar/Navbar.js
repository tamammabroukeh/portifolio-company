import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
export default function NavBar() {
  const [login, setLogin] = useState(false);
  const handleLogin = () => {
    setLogin(!login);
  };
  return (
    <Navbar className="" expand="lg">
      <Container>
        <Navbar.Brand>
          <div src="" alt="logo" className="logo"></div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/about" className="navbar-link">
              About us
            </Link>
            <Link to="/about" className="navbar-link">
              FAQ`S
            </Link>
            <Link to="/about" className="navbar-link">
              Our services
            </Link>
            <Link to="/payment" className="navbar-link">
              Payment
            </Link>
            <Link to="/contact" className="navbar-link">
              Contact us
            </Link>
            {login ? (
              <Link onClick={handleLogin} to="/" className="navbar-link">
                Login
              </Link>
            ) : (
              <Link onClick={handleLogin} to="/sign" className="navbar-link">
                Sign up
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
