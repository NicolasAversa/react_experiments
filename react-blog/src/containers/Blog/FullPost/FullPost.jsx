import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function FullPost(props) {
  const [loadedPosts, setLoadedPosts] = useState(null);
  const { selectedPostId } = props;

  useEffect(() => {
    if (selectedPostId) {
      axios.get(`/posts/${selectedPostId}`).then((response) => {
        setLoadedPosts(response.data);
      });
    }
  }, [selectedPostId]);

  const deletePostHandler = () => {
    axios.delete(`/posts/${selectedPostId}`).then((response) => {
      console.log(response);
    });
  };

  let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
  if (selectedPostId) {
    post = <p style={{ textAlign: 'center' }}>Loading...</p>;
  }
  if (loadedPosts) {
    post = (
      <Card>
        <Card.Body>
          <Card.Title>{loadedPosts.title}</Card.Title>
          <Card.Text>{loadedPosts.body}</Card.Text>
          <Card.Link href="#" onClick={deletePostHandler}>
            Delete
          </Card.Link>
        </Card.Body>
      </Card>
    );
  }

  return (
    <Row>
      <Col xs={12}>{post}</Col>
    </Row>
  );
}

export default FullPost;
