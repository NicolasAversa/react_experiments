import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './FullPost.css';

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
    axios
      .delete(`/posts/${selectedPostId}`)
      .then((response) => {
        console.log(response);
      });
  };

  let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
  if (selectedPostId) {
    post = <p style={{ textAlign: 'center' }}>Loading...</p>;
  }
  if (loadedPosts) {
    post = (
      <div className="FullPost">
        <h1>{loadedPosts.title}</h1>
        <p>{loadedPosts.body}</p>
        <div className="Edit">
          <button className="Delete" onClick={deletePostHandler}>
            Delete
          </button>
        </div>
      </div>
    );
  }

  return <>{post}</>;
}

export default FullPost;
