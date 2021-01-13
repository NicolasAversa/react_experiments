import React from 'react';
import PropTypes from 'prop-types';

import { Space } from 'antd';
import { connect } from 'react-redux';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import CounterControl from '../../components/CounterControl/CounterControl';

const propTypes = {
  counter: PropTypes.number.isRequired,
};

function Counter({ counter }) {
  return (
    <>
      <CounterOutput value={counter} />
      <Space size={8}>
        <CounterControl label="Increment" clicked={() => {}} />
        <CounterControl label="Decrement" clicked={() => {}} />
        <CounterControl label="Add 5" clicked={() => {}} />
        <CounterControl label="Subtract 5" clicked={() => {}} />
      </Space>
    </>
  );
}

Counter.propTypes = propTypes;

const mapStateToProps = (state) => ({ counter: state.counter.counter });
const mapDispatchToProps = (disaptch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
