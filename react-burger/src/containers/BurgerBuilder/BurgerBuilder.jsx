import React, { useState } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3,
};

function BurgerBuilder() {
  const [ingredients, setIngredients] = useState({
    salad: 1,
    bacon: 1,
    cheese: 2,
    meat: 2,
  });
  const [totalPrice, setTotalPrice] = useState(4);
  const [purchasable, setPurchasable] = useState(false);

  const disabledInfo = Object.fromEntries(
    Object.entries(ingredients).map(([key, value]) => [key, value <= 0]),
  );

  const updatePurchaseState = (newIngredients) => {
    const ingredientsSum = Object.keys(newIngredients).map((key) => newIngredients[key]).reduce((sum, element) => sum + element, 0);
    setPurchasable(ingredientsSum > 0);
  };

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

    updatePurchaseState(updatedIngredients);
  };

  const removeIngredientHandler = (type) => {
    const oldCount = ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = { ...ingredients };
    updatedIngredients[type] = updatedCount;
    setIngredients(updatedIngredients);

    const priceReduction = INGREDIENT_PRICES[type];
    const oldPrice = totalPrice;
    const newPrice = oldPrice - priceReduction;
    setTotalPrice(newPrice);

    updatePurchaseState(updatedIngredients);
  };

  return (
    <>
      <Burger ingredients={ingredients} />
      <BuildControls
        addIngredientHandler={addIngredientHandler}
        removeIngredientHandler={removeIngredientHandler}
        totalPrice={totalPrice}
        purchasable={purchasable}
        disabled={disabledInfo}
      />
    </>
  );
}

export default BurgerBuilder;
