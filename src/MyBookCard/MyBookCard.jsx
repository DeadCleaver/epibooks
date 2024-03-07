import React from "react";
import { Card } from "react-bootstrap";
import "./MyBookCard.css"

export default function MyBookCard({bookdata}) {
    const {title, img, price, category} = bookdata;

  return (
    <>
      <div>
        <Card className="card-book-box shadow">
          <Card.Img variant="top" src={img}/>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                price: {price}
              </Card.Text>
            </Card.Body>          
        </Card>
      </div>
    </>
  );
}
