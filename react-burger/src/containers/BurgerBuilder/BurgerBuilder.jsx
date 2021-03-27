/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from 'react-bootstrap/Spinner';
import {
  addIngredient, removeIngredient, updatePrice, updatePurchasable,
} from '../../redux/actions';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import BurgerModal from '../../components/UI/BurgerModal/BurgerModal';
import ErrorHandler from '../../components/UI/ErrorHandler/ErrorHandler';
import axios from '../../axios-orders';

const propTypes = {
  ingredients: PropTypes.objectOf(PropTypes.number).isRequired,
  totalPrice: PropTypes.number.isRequired,
  purchasable: PropTypes.bool.isRequired,
  addIngredient: PropTypes.func.isRequired,
  removeIngredient: PropTypes.func.isRequired,
  updatePrice: PropTypes.func.isRequired,
  updatePurchasable: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

function BurgerBuilder({
  history,
  ingredients,
  totalPrice,
  purchasable,
  addIngredient,
  removeIngredient,
  updatePrice,
  updatePurchasable,
}) {
  const [purchasing, setPurchasing] = useState(false);
  const [loading] = useState(false);
  const [error] = useState(false);

  // useEffect(() => {
  //   axios
  //     .get('/ingredients.json')
  //     .then((response) => {
  //       setIngredients(response.data);
  //     })
  //     .catch(() => {
  //       setError(true);
  //     });
  // }, []);

  const handleAddIngredient = (ingredientType) => {
    addIngredient(ingredientType);
    updatePrice();
    updatePurchasable();
  };

  const handleRemoveIngredient = (ingredientType) => {
    removeIngredient(ingredientType);
    updatePrice();
    updatePurchasable();
  };

  const purchaseHandler = () => {
    setPurchasing(true);
  };

  const purchaseCancelHandler = () => {
    setPurchasing(false);
  };

  const purchaseContinueHandler = () => {
    const queryParameters = Object.entries(ingredients).map(
      ([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
    );

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
          onAddIngredient={handleAddIngredient}
          onRemoveIngredient={handleRemoveIngredient}
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

BurgerBuilder.propTypes = propTypes;

const mapStateToProps = (state) => ({
  ingredients: state.burger.ingredients,
  totalPrice: state.burger.totalPrice,
  purchasable: state.burger.purchasable,
});
const mapDispatchToProps = {
  addIngredient, removeIngredient, updatePrice, updatePurchasable,
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);
