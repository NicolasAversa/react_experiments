import React, { useState } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import BurgerModal from '../../components/UI/BurgerModal/BurgerModal';
import ErrorHandler from '../../components/UI/ErrorHandler/ErrorHandler';
import axios from '../../axios-orders';

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3,
};

function BurgerBuilder() {
  const [ingredients, setIngredients] = useState({
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  });
  const [totalPrice, setTotalPrice] = useState(4);
  const [purchasable, setPurchasable] = useState(false);
  const [purchasing, setPurchasing] = useState(false);
  const [loading, setLoading] = useState(false);

  const disabledInfo = Object.fromEntries(
    Object.entries(ingredients).map(([key, value]) => [key, value <= 0]),
  );

  const updatePurchaseState = (newIngredients) => {
    const ingredientsSum = Object.keys(newIngredients)
      .map((key) => newIngredients[key])
      .reduce((sum, element) => sum + element, 0);
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

  const purchaseHandler = () => {
    setPurchasing(true);
  };

  const purchaseCancelHandler = () => {
    setPurchasing(false);
  };

  const purchaseContinueHandler = () => {
    setLoading(true);

    const order = {
      ingredients,
      totalPrice: totalPrice.toFixed(2),
      customer: {
        name: 'Juanma Arancibia',
        adress: { street: '33', number: '825 1/2', country: 'Argentina' },
        email: 'juanma@hotmail.com',
      },
      deliveryMethod: 'Fastest',
    };

    axios
      .post('/orders.json', order)
      .then(() => {
        setLoading(false);
        setPurchasing(false);
      })
      .catch(() => {
        setLoading(false);
        setPurchasing(false);
      });
  };

  return (
    <>
      <BurgerModal
        show={purchasing}
        handleClose={purchaseCancelHandler}
        purchaseContinueHandler={purchaseContinueHandler}
        totalPrice={totalPrice}
        ingredients={ingredients}
        loading={loading}
      />
      <ErrorHandler axios={axios} />
      <Burger ingredients={ingredients} />
      <BuildControls
        addIngredientHandler={addIngredientHandler}
        removeIngredientHandler={removeIngredientHandler}
        purchaseHandler={purchaseHandler}
        totalPrice={totalPrice}
        purchasable={purchasable}
        disabled={disabledInfo}
      />
    </>
  );
}

export default BurgerBuilder;
