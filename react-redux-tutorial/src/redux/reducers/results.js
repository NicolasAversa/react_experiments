/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { addResult, removeResult, removeAll } from '../actions';

const initialState = {
  results: [],
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(addResult, (state, action) => {
      state.results.push({ id: new Date().getTime(), value: action.payload });
    })
    .addCase(removeResult, (state, action) => {
      const index = state.results.findIndex((item) => item.id === action.payload);
      state.results.splice(index, 1);
    })
    .addCase(removeAll, (state) => {
      state.results = [];
    })
    .addDefaultCase((state) => state);
});
