import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function MyNav() {
  const menuitems = ["Home", "About", "Browse"];

  return (
    <>
      <Navbar bg="warning" data-bs-theme="light" className="shadow sticky-top">
        <Container>
          <Navbar.Brand href="#home">EpiBOOKS</Navbar.Brand>
          <Nav className="me-auto">
            {menuitems.map((item, index) => (
              <Nav.Link key={index} href="#">
                {item}
              </Nav.Link>
            ))}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
