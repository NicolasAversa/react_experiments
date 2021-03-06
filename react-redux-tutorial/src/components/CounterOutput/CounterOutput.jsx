import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Divider } from 'antd';

const { Title } = Typography;

const propTypes = {
  value: PropTypes.number.isRequired,
};

function CounterOutput({ value }) {
  return (
    <>
      <Title>
        Current Counter:
        {` ${value}`}
      </Title>
      <Divider />
    </>
  );
}

CounterOutput.propTypes = propTypes;
export default CounterOutput;
