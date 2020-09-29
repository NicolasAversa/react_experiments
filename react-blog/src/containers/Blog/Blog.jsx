import React, { Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './Blog.css';

const Posts = lazy(() => import('./Posts/Posts'));
const NewPost = lazy(() => import('./NewPost/NewPost'));

function Blog() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/new-post" component={NewPost} />
        <Route path="/posts" component={Posts} />
        <Redirect exact from="/" to="/posts" component={Posts} />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
    </Suspense>
  );
}
export default Blog;
