import React from 'react'
import CommentList from '../CommentList/CommentList'
import AddComment from '../AddComment/AddComment'
import { useState, useEffect } from 'react'

export default function CommentArea({bookid}) {

  const bookApi = `https://striveschool-api.herokuapp.com/api/books/`;
  const authToken = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWY1NDExMDdiZWEzMTAwMWEyZGYyZGIiLCJpYXQiOjE3MTA1NzE3OTMsImV4cCI6MTcxMTc4MTM5M30.DopAh1Mek9bSIzqCU-4FAeczLM_hQX41K_BrLTxOBp0`;
  const [comments, setComments] = useState([]);

 useEffect(() => {
   async function getComments() { 
     try {
       const response = await fetch(`https://striveschool-api.herokuapp.com/api/books/${bookid}/comments/`, {
         headers: {
           'Authorization': authToken
         }
       });
       if (!response.ok) {
         throw new Error('Failed loading comments');
       } 
       const commentsData = await response.json();
       setComments(commentsData);
     } catch (error) {
       alert(`Error fetching comments: `, (error));
     }

   }
   getComments();

 }, []); 


  return (
    <>
        <CommentList comments={comments}/>
        <AddComment bookid={bookid}/>
    </>
  );
}
