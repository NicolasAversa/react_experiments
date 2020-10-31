import React from 'react';
import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

const propTypes = {
  ingredients: PropTypes.objectOf(PropTypes.number),
  totalPrice: PropTypes.number,
};

const defaultProps = {
  ingredients: {},
  totalPrice: 0,
};

function Order(props) {
  const { ingredients, totalPrice } = props;

  const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

  const ingredientOutput = Object.entries(ingredients).map(([key, value]) => (
    <Badge key={key + value} variant="primary" className="mx-1 p-2">{`${capitalize(key)} ${value}`}</Badge>
  ));

  return (
    <ListGroup.Item className="p-4">
      <div>
        <h6 className="mb-2">
          Ingredients:
          {ingredientOutput}
        </h6>
        <div className="d-flex">
          <p className="mb-0 mr-1"> Price:</p>
          <p className="mb-0">
            $
            {totalPrice}
          </p>
        </div>
      </div>
    </ListGroup.Item>
  );
}

Order.propTypes = propTypes;
Order.defaultProps = defaultProps;

export default Order;
