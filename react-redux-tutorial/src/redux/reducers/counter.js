/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { increment, decrement } from '../actions';

const initialState = {
  counter: 0,
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.counter += action.payload;
    })
    .addCase(decrement, (state, action) => {
      if (state.counter - action.payload <= 0) {
        state.counter = 0;
      } else {
        state.counter -= action.payload;
      }
    })
    .addDefaultCase((state) => state);
});
