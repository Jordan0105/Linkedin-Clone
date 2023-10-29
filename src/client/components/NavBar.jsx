import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NicaJobs_Logo from "../../../public/NicaJobs.svg";

//TODO: Use React Router Link to instead of href

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="d-flex justify-content-center w-100">
        <Navbar.Brand href="/">
          <img
            alt=""
            src={NicaJobs_Logo}
            width="100"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/available_jobs">Jobs</Nav.Link>
            <Nav.Link href="/inbox">Messages</Nav.Link>
            <Nav.Link href="/notifications">Notifications</Nav.Link>
            <Nav.Link href="/my_profile">Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
