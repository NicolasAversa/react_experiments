import React from 'react';
import PropTypes from 'prop-types';
import {
  Row, Col,
} from 'antd';
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

function Burger({ ingredients }) {
  let transformedIngredients = Object.entries(ingredients)
    // eslint-disable-next-line max-len
    .map(([key, value]) => [...Array(value)]
    // eslint-disable-next-line react/no-array-index-key
      .map((_, i) => <BurgerIngredient key={key + i} type={key} />))
    .flat();

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please add ingredients</p>;
  }

  return (
    <Row>
      <Col xs={6} offset={8}>
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
