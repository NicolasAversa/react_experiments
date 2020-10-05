import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import Layout from '../../hoc/Layout/Layout';
import BurgerBuilder from '../BurgerBuilder/BurgerBuilder';
import Checkout from '../Checkout/Checkout';
import ContactData from '../Checkout/ContactData/ContactData';
import Orders from '../Orders/Orders';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/burger-builder" component={BurgerBuilder} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/contact-data" component={ContactData} />
          <Route path="/my-orders" component={Orders} />
          <Redirect from="/" to="/burger-builder" />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
