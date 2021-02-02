import React from 'react';
import PropTypes from 'prop-types';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import styles from './BuildControl.module.css';

const propTypes = {
  label: PropTypes.string,
  onAddIngredient: PropTypes.func,
  onRemoveIngredient: PropTypes.func,
  disabled: PropTypes.bool,
};

const defaultProps = {
  label: '',
  onAddIngredient: () => {},
  onRemoveIngredient: () => {},
  disabled: true,
};

function BuildControl({
  label, onAddIngredient, onRemoveIngredient, disabled,
}) {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <p className="mr-3">{label}</p>
      <ButtonGroup className="mb-2">
        <Button
          className={`${styles.less} border-0`}
          onClick={onRemoveIngredient}
          disabled={disabled}
        >
          Less
        </Button>
        <Button className={`${styles.more} border-0`} onClick={onAddIngredient}>
          More
        </Button>
      </ButtonGroup>
    </div>
  );
}

BuildControl.propTypes = propTypes;
BuildControl.defaultProps = defaultProps;

export default BuildControl;
