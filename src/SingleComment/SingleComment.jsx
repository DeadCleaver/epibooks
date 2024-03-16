import React from "react";
import { Accordion } from "react-bootstrap";
import "./SingleComment.css"

export default function SingleComment({ commentdata, index }) {
  const { author, rate, comment } = commentdata;

  return (
    <Accordion.Item eventKey={index}>
      <Accordion.Header className="my-small-text">{author}</Accordion.Header>
      <Accordion.Body className="my-small-text">
        <div>"{comment}"</div>
        <div>
          <strong>rating: </strong>
          {rate}
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
}
