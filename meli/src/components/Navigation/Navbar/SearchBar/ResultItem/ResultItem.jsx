import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import styles from './ResultItem.module.css';

const propTypes = {
  title: PropTypes.string.isRequired,
};

const ResultItem = ({ title }) => (
  <div className="d-flex align-items-center">
    <SearchOutlined className={`py-2 pr-3 ${styles.SearchOutlined}`} />
    {title}
  </div>
);

ResultItem.propTypes = propTypes;

export default ResultItem;
