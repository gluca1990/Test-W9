import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../img/logo.png';



export default class NetNavbar extends React.Component {
    render() {
        return (
            <Navbar expand="lg" className="bg-dark">
      <Container fluid className="d-flex align-items-center">
        <Navbar.Brand id="logo" href="#home"><img className="w-100"alt="logo" src={Logo}/></Navbar.Brand>
        <Navbar.Toggle className="text-secondary" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="navLink text-secondary fw-bold fs-6" href="#">Home</Nav.Link>
            <Nav.Link className="navLink text-secondary fw-bold fs-6" href="#">TV Shows</Nav.Link>
            <Nav.Link className="navLink text-secondary fw-bold fs-6" href="#">Movies</Nav.Link>
            <Nav.Link className="navLink text-secondary fw-bold fs-6" href="#">Recently Added</Nav.Link>
            <Nav.Link className="navLink text-secondary fw-bold fs-6" href="#">My List</Nav.Link>            
          </Nav>
          <Nav className="ms-auto d-flex align-items-center">
            <div className="text-secondary fs-6 fw-semibold">KIDS</div>
            <Nav.Link href="#">TV Shows</Nav.Link>         
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
        }
}