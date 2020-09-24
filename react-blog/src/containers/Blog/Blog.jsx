import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from '../../axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

function Blog() {
  const [posts, setPosts] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get('/posts')
      .then((response) => {
        const postsReceived = response.data.slice(0, 4);
        const updatedPosts = postsReceived.map((post) => ({ ...post, author: 'Nicolas Aversa' }));
        setPosts(updatedPosts);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  const postSelectedHandler = (id) => {
    setSelectedPostId(id);
  };

  let postList = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
  if (!error) {
    postList = posts.map((post) => (
      <Post
        key={post.id}
        title={post.title}
        author={post.author}
        clicked={() => postSelectedHandler(post.id)}
      />
    ));
  }

  return (
    <Row>
      {postList}
      <FullPost selectedPostId={selectedPostId} />
      <Col xs={12}>
        <NewPost />
      </Col>
    </Row>
  );
}
export default Blog;
