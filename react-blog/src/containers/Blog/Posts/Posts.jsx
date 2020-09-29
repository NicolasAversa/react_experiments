import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';

function Posts(props) {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  // const { history } = props;
  const { match } = props;

  useEffect(() => {
    axios
      .get('/posts')
      .then((response) => {
        const postsReceived = response.data.slice(0, 4);
        const updatedPosts = postsReceived.map((post) => ({ ...post, author: 'Nicolas Aversa' }));
        setPosts(updatedPosts);
        console.log('React-router-dom injected properties below');
        // console.log(props);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  // Using history for navigate programatically
  // const postSelectedHandler = (id) => {
  //   history.push(`/${id}`);
  // };

  let postList = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
  if (!error) {
    postList = posts.map((post) => (
      <Post
        key={post.id}
        title={post.title}
        author={post.author}
        id={post.id}
      />
    ));
  }

  return (
    <Row>
      {postList}
      <Route path={`${match.url}/:postId`} exact component={FullPost} />
    </Row>
  );
}

export default Posts;
