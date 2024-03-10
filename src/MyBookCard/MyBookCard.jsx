import React from "react";
import { Card } from "react-bootstrap";
import "./MyBookCard.css"

export default function MyBookCard({bookdata}) {
    const {title, img, price, category} = bookdata;

  return (
    <>
      <div>
        <Card className="card-book-box shadow" text="dark">
          <Card.Img className="card-book-img" variant="top" src={img}/>
            <Card.Body>
              <Card.Title className="text-truncate fs-6 fw-bold">{title}</Card.Title>
              <Card.Text><strong>price</strong>: {price} €</Card.Text>
            </Card.Body>          
        </Card>
      </div>
    </>
  );
}
