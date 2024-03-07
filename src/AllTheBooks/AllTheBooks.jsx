import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import MyBookCard from '../MyBookCard/MyBookCard'

export default function AllTheBooks({books}) {
  
  
  return (
    <>
        <Container className="mt-3">
            <Row sm={2} md={3} lg={4} xl={5} className='g-2'>
                {books.map((book) => 
                <Col key={book.asin}>
                  <MyBookCard bookdata={book}/>
                </Col>)}
            </Row>
        </Container>
    </>
  )
}
