import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import styles from './Burger.module.css';

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
  let transformedIngredients = Object.keys(ingredients)
    .map((key) => [...Array(ingredients[key])].map((_, i) => <BurgerIngredient key={key + i} type={key} />))
    .reduce((array, element) => array.concat(element), []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please add ingredients</p>;
  }

  return (
    <Col xs={12}>
      <div className={styles.Burger}>
        <BurgerIngredient type="bread-top" />
        {transformedIngredients}
        <BurgerIngredient type="bread-bottom" />
      </div>
    </Col>
  );
}

Burger.propTypes = propTypes;

export default Burger;
