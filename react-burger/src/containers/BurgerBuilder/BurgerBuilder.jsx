import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
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

function BurgerBuilder(props) {
  const [ingredients, setIngredients] = useState();
  const [totalPrice, setTotalPrice] = useState(4);
  const [purchasable, setPurchasable] = useState(false);
  const [purchasing, setPurchasing] = useState(false);
  const [loading] = useState(false);
  const [error, setError] = useState(false);
  const { history } = props;

  useEffect(() => {
    axios
      .get('/ingredients.json')
      .then((response) => {
        setIngredients(response.data);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

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
    const queryParameters = Object.entries(ingredients)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`);

    const queryString = queryParameters.join('&');

    history.push({ pathname: '/checkout', search: `?${queryString}` });
  };

  let burgerModal = null;
  let burger = error ? (
    <p className="mt-5 ml-3">Ingredients cannot be loaded</p>
  ) : (
    <Spinner animation="border" variant="primary" className="mt-5 mx-auto" />
  );

  if (ingredients) {
    const disabledInfo = Object.fromEntries(
      Object.entries(ingredients).map(([key, value]) => [key, value <= 0]),
    );

    burger = (
      <>
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

    burgerModal = (
      <BurgerModal
        show={purchasing}
        handleClose={purchaseCancelHandler}
        purchaseContinueHandler={purchaseContinueHandler}
        totalPrice={totalPrice}
        ingredients={ingredients}
        loading={loading}
      />
    );
  }

  return (
    <>
      {burgerModal}
      {burger}
      <ErrorHandler axios={axios} />
    </>
  );
}

export default BurgerBuilder;
