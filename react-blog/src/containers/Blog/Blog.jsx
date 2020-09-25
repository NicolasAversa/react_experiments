import React from 'react';
import { Route } from 'react-router-dom';
import Posts from './Posts/Posts';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import './Blog.css';

function Blog() {
  return (
    <>
      <Route path="/" exact component={Posts} />
      <Route path="/new-post" component={NewPost} />
    </>
  );
}
export default Blog;
