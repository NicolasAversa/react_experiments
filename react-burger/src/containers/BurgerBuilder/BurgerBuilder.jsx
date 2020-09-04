import React, { useState } from 'react';
import Burger from '../../components/Burger/Burger';

function BurgerBuilder() {
  const [ingredients, setIngredients] = useState({
    salad: 1,
    bacon: 1,
    cheese: 2,
    meat: 2,
  });

  return (
    <>
      <Burger ingredients={ingredients} />
      <div>Build controls</div>
    </>
  );
}

export default BurgerBuilder;
