import React from "react";
import { useState } from "react";
import { Container, Row, Col, InputGroup, Form, Button } from "react-bootstrap";
import SingleBook from "../MyBookCard/SingleBook";

export default function AllTheBooks({ books }) {
  const [searchBook, setSearchBook] = useState("");
  const [bookList, setBookList] = useState(books);

  function getBook(title) {
    const filteredBooks = bookList.filter((el) => el.title.toLowerCase().includes(title.toLowerCase()));
    setBookList(filteredBooks);
  }

  function clearSearch() {
    setBookList(books);
  }

  return (
    <>
      <Container className="mt-1">
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Search for a book title"
            aria-label="Search for a book title"
            aria-describedby="basic-addon2"
            value={searchBook}
            onChange={(event) => setSearchBook(event.target.value)}
          />
          <Button
            variant="outline-secondary"  onClick={() => getBook(searchBook)}>
            Search
          </Button>
          <Button
            variant="outline-secondary"  onClick={clearSearch}>
            Clear
          </Button>
        </InputGroup>
        <Row sm={2} md={3} lg={4} xl={5} className="g-2">
          {bookList.map((book) => (
            <Col key={book.asin}>
              <SingleBook bookdata={book} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
