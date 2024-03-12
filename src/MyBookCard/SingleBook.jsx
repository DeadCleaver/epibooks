import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "./SingleBook.css"

export default function MyBookCard({bookdata}) {
    const {title, img, price, category} = bookdata;
    const  [ selected, setSelected ]  = useState(false);

    function handleSelect() {
      setSelected(!selected);
    }

  return (
    <>
      <div>
        <Card className="card-book-box shadow" border={selected ? `danger` : `secondary`} text="dark">
          <Card.Img className="card-book-img" variant="top" src={img} onClick={handleSelect}/>
            <Card.Body>
              <Card.Title className="text-truncate fs-6 fw-bold">{title}</Card.Title>
              <Card.Text><strong>price</strong>: {price} €</Card.Text>
            </Card.Body>          
        </Card>
      </div>
    </>
  );
}
