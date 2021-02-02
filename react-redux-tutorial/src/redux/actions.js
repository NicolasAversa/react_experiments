import { createAction } from '@reduxjs/toolkit';

export const increment = createAction('INCREMENT');
export const decrement = createAction('DECREMENT');
export const addResult = createAction('ADD_RESULT');
export const removeResult = createAction('REMOVE_RESULT');
export const removeAll = createAction('REMOVE_ALL');
