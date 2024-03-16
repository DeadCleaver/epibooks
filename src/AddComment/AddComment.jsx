import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";

export default function AddComment(bookid) {
  const bookCommentsApi = `https://striveschool-api.herokuapp.com/api/comments`;
  const authToken = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWY1NDExMDdiZWEzMTAwMWEyZGYyZGIiLCJpYXQiOjE3MTA1NzE3OTMsImV4cCI6MTcxMTc4MTM5M30.DopAh1Mek9bSIzqCU-4FAeczLM_hQX41K_BrLTxOBp0`;

  const [newComment, setNewComment] = useState(``);
  const [newRating, setNewRating] = useState(``);

  async function postComment(event) {
    event.preventDefault();

    try {
      const response = await fetch(bookCommentsApi, {
        method: `POST`,  
        headers: {
          'Content-Type': 'application/json',
          'Authorization': authToken
        },
        body: JSON.stringify({
          comment: newComment,
          rate: newRating,
          elementId: bookid,
      })
    });

      if (!response.ok) {
        throw new Error('Failed to add comment');
      } 
      setNewComment('');
      setNewRating('');
    } catch (error) {
      alert('Error adding comment:', error);
    }
  };

  return (
    <>
      <Form onSubmit={postComment}>
        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            rows={3}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Select
            aria-label="Rate it"
            value={newRating} 
            onChange={(e) => setNewRating(e.target.value)}
          >
            {/* <option>Rating</option> */}
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">2</option>
            <option value="5">5</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit" size="sm">
          Add Comment
        </Button>
      </Form>
    </>
  );
}
