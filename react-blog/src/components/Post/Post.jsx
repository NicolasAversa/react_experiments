import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Post(props) {
  const { title, author, clicked } = props;

  return (
    <Col xs={4} className="mb-3">
      <Card onClick={clicked}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Post;
