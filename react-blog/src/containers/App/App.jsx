import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from '../../hoc/Layout/Layout';
import Blog from '../Blog/Blog';

function App() {
  return (
    <>
      <Layout>
        <Router>
          <Blog />
        </Router>
      </Layout>
    </>
  );
}

export default App;
