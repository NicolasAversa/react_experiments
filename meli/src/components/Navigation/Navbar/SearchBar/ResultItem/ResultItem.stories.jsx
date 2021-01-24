/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ResultItem from './ResultItem';

export default {
  title: 'Meli/Navigation/Navbar/Atoms/SearchBar/Atoms/ResultItem',
  component: ResultItem,
};

export const OneItem = (args) => (<ResultItem {...args} />);
OneItem.args = {
  title: 'Item',
};

export const ManyItems = (args) => (
  <>
    <ResultItem {...args} />
    <ResultItem {...args} />
    <ResultItem {...args} />
  </>
);
ManyItems.args = {
  title: 'Item',
};
