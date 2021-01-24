import React, { useState, useEffect } from 'react';
import { Col, Input, AutoComplete } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import ResultItem from './ResultItem/ResultItem';
import styles from './SearchBar.module.css';

const hardcodedSearchResult = ['Computadora', 'Paquete', 'Motherboard'];

const SearchBar = () => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const newOptions = hardcodedSearchResult
      .map((title) => ({ value: title, label: <ResultItem title={title} /> }));
    setOptions(newOptions);
  }, []);

  return (
    <Col span={12} className="d-flex align-items-center">
      <AutoComplete
        className={`border border-primary ${styles.SearchBar}`}
        options={options}
        filterOption
        notFoundContent="No se han encontrado resulados"
      >
        <Input
          size="large"
          placeholder="Buscar productos, marcas y más…"
          bordered={false}
          suffix={<SearchOutlined className={`py-1 pl-2 ${styles.SearchOutlined}`} />}
        />
      </AutoComplete>
    </Col>
  );
};

export default SearchBar;
