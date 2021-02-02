/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Row, Col, List, Divider, Button, Space,
} from 'antd';
import { addResult, removeResult, removeAll } from '../../redux/actions';

const propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  counter: PropTypes.number.isRequired,
  addResult: PropTypes.func.isRequired,
  removeResult: PropTypes.func.isRequired,
  removeAll: PropTypes.func.isRequired,
};

function Results({
  results, counter, addResult, removeResult, removeAll,
}) {
  return (
    <>
      <Divider orientation="left">Saved results</Divider>
      <Row>
        <Col span={12}>
          <Space size={8}>
            <Button type="primary" onClick={() => addResult(counter)}>
              Add result
            </Button>
            <Button type="danger" onClick={removeAll}>
              Remove all
            </Button>
          </Space>
          <List
            bordered
            size="small"
            dataSource={results}
            renderItem={(item) => (
              <List.Item key={item.id}>
                {item.value}
                <Button type="danger" onClick={() => removeResult(item.id)}>
                  Remove result
                </Button>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
}

Results.propTypes = propTypes;

const mapStateToProps = (state) => ({
  results: state.results.results,
  counter: state.counter.counter,
});
const mapDispatchToProps = { addResult, removeResult, removeAll };

export default connect(mapStateToProps, mapDispatchToProps)(Results);
