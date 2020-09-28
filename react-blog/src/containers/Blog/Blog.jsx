import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import './Blog.css';

function Blog() {
  return (
    <Switch>
      <Route path="/new-post" component={NewPost} />
      <Route path="/" component={Posts} />
    </Switch>
  );
}
export default Blog;
