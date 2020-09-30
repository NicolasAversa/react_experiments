import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import Layout from '../../hoc/Layout/Layout';
import BurgerBuilder from '../BurgerBuilder/BurgerBuilder';
import Checkout from '../Checkout/Checkout';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/burger-builder" component={BurgerBuilder} />
          <Route path="/checkout" component={Checkout} />
          <Redirect from="/" to="/burger-builder" />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
