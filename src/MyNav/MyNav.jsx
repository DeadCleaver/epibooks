import React from "react";
import { Container, Nav, Navbar, InputGroup, Form, Button } from "react-bootstrap";
import { useState } from "react";

export default function MyNav({onSearchBook, onClearSearch }) {

  const menuitems = ["Home", "About", "Browse"];
  const [searchField, setSearchField] = useState("");

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

          <InputGroup className="ms-5">
          <Form.Control
            placeholder="Search for a book title"
            aria-label="Search for a book title"
            aria-describedby="basic-addon2"
            value={searchField}
            onChange={(e) => setSearchField(e.target.value)}
          />
          <Button 
            onClick={(e) =>  onSearchBook(searchField)}
            variant="outline-secondary">
            Search
          </Button>
          <Button
            onClick={(e) =>  onClearSearch()}
            variant="outline-secondary">
            Clear
          </Button>
        </InputGroup>

        </Container>
      </Navbar>
    </>
  );
}
