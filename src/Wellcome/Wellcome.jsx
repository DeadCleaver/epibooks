import React from "react";
import { Container, Button, Form, InputGroup, Card } from "react-bootstrap";

export default function Wellcome() {
  return (
    <>
      <Container className="mt-3">
        <Card border="warning">
          <Card.Body>
            <Card.Title>Wellcome in Epibooks</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-secondary" id="button-addon2">
                Button
              </Button>
            </InputGroup>
          </Card.Body>
        </Card>
        <br />
      </Container>
    </>
  );
}
