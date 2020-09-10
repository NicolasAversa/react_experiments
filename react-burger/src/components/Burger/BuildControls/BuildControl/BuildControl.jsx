import React from 'react';
import PropTypes from 'prop-types';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import styles from './BuildControl.module.css';

const propTypes = {
  label: PropTypes.string.isRequired,
  addIngredientHandler: PropTypes.func.isRequired,
};

function BuildControl(props) {
  const { label, addIngredientHandler } = props;

  return (
    <div className="d-flex align-items-center justify-content-center">
      <p className="mr-3">{label}</p>
      <ButtonGroup className="mb-2">
        <Button className={`${styles.more} border-0`} onClick={addIngredientHandler}>More</Button>
        <Button className={`${styles.less} border-0`}>Less</Button>
      </ButtonGroup>
    </div>
  );
}

BuildControl.propTypes = propTypes;

export default BuildControl;
