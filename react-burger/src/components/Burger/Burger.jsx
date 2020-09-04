import React from 'react';
import PropTypes from 'prop-types';
import styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const propTypes = {
  ingredients: PropTypes.shape({
    salad: PropTypes.number,
    bacon: PropTypes.number,
    cheese: PropTypes.number,
    meat: PropTypes.number,
  }).isRequired,
};

function Burger(props) {
  const { ingredients } = props;
  const transformedIngredients = Object.keys(ingredients).map((key) =>
    [...Array(ingredients[key])].map((_, i) => <BurgerIngredient key={key + i} type={key} />),
  );

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}

Burger.propTypes = propTypes;

export default Burger;
