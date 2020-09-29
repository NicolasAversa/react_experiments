import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import './NewPost.css';

function NewPost(props) {
  const [post, setPost] = useState({
    title: '',
    body: '',
    author: 'Nicolas',
  });
  const [authenticated, setAuthenticated] = useState(false);
  const { history } = props;

  useEffect(() => {
    if (authenticated) {
      history.replace('/');
    }
  }, [authenticated, history]);

  const postDataHandler = () => {
    const data = {
      title: post.title,
      body: post.body,
      author: post.author,
    };
    axios.post('/posts', data).then((response) => {
      console.log(response);
      // push() pushes a page to the stack therefore you are able to go back
      history.push('/');

      // replace() does not pushes a page, it replaces it.
      // So if you attempt to go back, you will be returned to the page before the previous one
      // history.replace('/');
    });
  };

  return (
    <Row className="NewPost">
      <h1>Add a Post</h1>
      <label>Title</label>
      <input
        type="text"
        value={post.title}
        onChange={(event) => setPost({ ...post, title: event.target.value })}
      />
      <label>Content</label>
      <textarea
        rows="4"
        value={post.content}
        onChange={(event) => setPost({ ...post, content: event.target.value })}
      />
      <label>Author</label>
      <select
        value={post.author}
        onChange={(event) => setPost({ ...post, author: event.target.value })}
      >
        <option value="Nicolas">Nicolas</option>
        <option value="Juanma">Juanma</option>
      </select>
      <button type="submit" onClick={postDataHandler}>
        Add Post
      </button>
    </Row>
  );
}

export default NewPost;
