import React from 'react';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Post(props) {
  const {
    title, author, id, clicked,
  } = props;

  return (
    <Col xs={4} className="mb-3">
      <Link to={`/${id}`}>
        <Card onClick={clicked}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}

export default Post;
