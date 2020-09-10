import React, { useState } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

function BurgerBuilder() {
  const [ingredients, setIngredients] = useState({
    salad: 1,
    bacon: 1,
    cheese: 2,
    meat: 2,
  });
  const [totalPrice, setTotalPrice] = useState(4);

  const addIngredientHandler = (type) => {
    const oldCount = ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = { ...ingredients };
    updatedIngredients[type] = updatedCount;
    setIngredients(updatedIngredients);

    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = totalPrice;
    const newPrice = oldPrice + priceAddition;
    setTotalPrice(newPrice);
  };

  const removeIngredientHandler = (type) => {
    const oldCount = ingredients[type];
    const updatedCount = oldCount - 1;
    const updatedIngredients = { ...ingredients };
    updatedIngredients[type] = updatedCount;
    setIngredients(updatedIngredients);

    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = totalPrice;
    const newPrice = oldPrice - priceAddition;
    setTotalPrice(newPrice);
  };

  return (
    <>
      <Burger ingredients={ingredients} />
      <BuildControls
        addIngredientHandler={addIngredientHandler}
        removeIngredientHandler={removeIngredientHandler}
      />
    </>
  );
}

export default BurgerBuilder;
