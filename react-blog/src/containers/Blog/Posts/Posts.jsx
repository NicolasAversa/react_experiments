import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';

function Posts() {
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

  return <Row>{postList}</Row>;
}

export default Posts;
