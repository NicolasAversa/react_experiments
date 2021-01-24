import React from 'react';
import PropTypes from 'prop-types';

import { Space } from 'antd';
import { connect } from 'react-redux';
import { increment, decrement } from '../../redux/actions';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import CounterControl from '../../components/CounterControl/CounterControl';

const propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

// eslint-disable-next-line no-shadow
function Counter({ counter, increment, decrement }) {
  return (
    <>
      <CounterOutput value={counter} />
      <Space size={8}>
        <CounterControl label="Increment" onClick={() => increment(1)} />
        <CounterControl label="Decrement" disabled={counter <= 0} onClick={() => decrement(1)} />
        <CounterControl label="Add 5" onClick={() => increment(5)} />
        <CounterControl label="Subtract 5" disabled={counter <= 0} onClick={() => decrement(5)} />
      </Space>
    </>
  );
}

Counter.propTypes = propTypes;

const mapStateToProps = (state) => ({ counter: state.counter.counter });
const mapDispatchToProps = { increment, decrement };

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
