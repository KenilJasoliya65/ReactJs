import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../Image/download.png';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import { Link } from 'react-router-dom';

function CustomNavbar() {
  const navigate = useNavigate();
  const GoToHome = () =>
    {
      navigate('/');
    }
  const GoToAbout = () =>
  {
    navigate('/About');
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary bg-light">
      <Container className="head">
        <img className="logo" src={logo} alt="Logo" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={GoToHome}>Home</Nav.Link>
            <Nav.Link onClick={GoToAbout}>About</Nav.Link>
            <NavDropdown title="Our Project" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Power</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Ports</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Real Estate
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Reviews</Nav.Link>
            <Nav.Link href="#link">Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div>
          <i class="bi bi-search mx-4 fs-5"></i>
          <i class="bi bi-person-fill fs-4"></i>
        </div>

        <div className="auth-buttons mx-4">
          <Link to="/signUp" className="btn btn-primary">
            Sign Up
          </Link>

          <Link to="/signOut" className="btn btn-primary mx-4">
            Sign Out
          </Link>
        </div>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;