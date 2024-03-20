import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "../MyBookCard/SingleBook";

export default function AllTheBooks({ books }) {

  return (
    <>
      <Container className="mt-1">

        <Row sm={2} md={3} lg={4} className="g-2">
          {books.map((book) => (
            <Col key={book.asin}>
              <SingleBook bookdata={book} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
