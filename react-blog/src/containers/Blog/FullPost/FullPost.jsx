import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function FullPost(props) {
  const [loadedPosts, setLoadedPosts] = useState(null);
  const { match } = props;

  useEffect(() => {
    if (match.params.postId) {
      axios.get(`/posts/${match.params.postId}`).then((response) => {
        setLoadedPosts(response.data);
      });
    }
  }, [match.params.postId]);

  const deletePostHandler = () => {
    axios.delete(`/posts/${match.params.postId}`).then((response) => {
      console.log(response);
    });
  };

  let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
  if (match.params.postId) {
    post = <p style={{ textAlign: 'center' }}>Loading...</p>;
  }
  if (loadedPosts) {
    post = (
      <Col xs={12}>
        <Card>
          <Card.Body>
            <Card.Title>{loadedPosts.title}</Card.Title>
            <Card.Text>{loadedPosts.body}</Card.Text>
            <Card.Link href="#" onClick={deletePostHandler}>
              Delete
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    );
  }

  return <Row>{post}</Row>;
}

export default FullPost;
