import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import Layout from '../../hoc/Layout/Layout';
import BurgerBuilder from '../BurgerBuilder/BurgerBuilder';
import Checkout from '../Checkout/Checkout';
import ContactData from '../Checkout/ContactData/ContactData';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/burger-builder" component={BurgerBuilder} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/contact-data" component={ContactData} />
          <Redirect from="/" to="/burger-builder" />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
