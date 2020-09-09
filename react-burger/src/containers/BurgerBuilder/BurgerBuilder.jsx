import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

function BurgerBuilder() {
  const [ingredients, setIngredients] = useState({
    salad: 1,
    bacon: 1,
    cheese: 2,
    meat: 2,
  });

  return (
    <>
      <Col xs={12}>
        <Burger ingredients={ingredients} />
      </Col>
      <BuildControls />
    </>
  );
}

export default BurgerBuilder;
