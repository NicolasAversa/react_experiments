import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import styles from './Burger.module.css';

const propTypes = {
  ingredients: PropTypes.objectOf(PropTypes.number),
};

const defaultProps = {
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  },
};

function Burger(props) {
  const { ingredients } = props;

  let transformedIngredients = Object.entries(ingredients)
    // eslint-disable-next-line max-len
    .map(([key, value]) => [...Array(value)].map((_) => <BurgerIngredient key={key + _} type={key} />))
    .flat();

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please add ingredients</p>;
  }

  return (
    <Row>
      <Col xs={12}>
        <div className={styles.Burger}>
          <BurgerIngredient type="bread-top" />
          {transformedIngredients}
          <BurgerIngredient type="bread-bottom" />
        </div>
      </Col>
    </Row>
  );
}

Burger.propTypes = propTypes;
Burger.defaultProps = defaultProps;

export default Burger;
