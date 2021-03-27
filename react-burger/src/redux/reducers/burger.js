/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import {
  addIngredient, removeIngredient, updatePrice, updatePurchasable,
} from '../actions';

const initialState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 1,
  },
  totalPrice: 4,
  purchasable: false,
};

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3,
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(addIngredient, (state, action) => {
      state.ingredients[action.payload] += 1;
    })
    .addCase(removeIngredient, (state, action) => {
      if (state.ingredients[action.payload] - 1 >= 0) {
        state.ingredients[action.payload] -= 1;
      }
    })
    .addCase(updatePrice, (state) => {
      // state.ingredients = {bacon: 0, cheese: 0, meat: 1, salad: 2}
      // ingredientsEntries = [["bacon", 0], ["cheese", 0], ["meat", 1], ["salad", 2]]
      const ingredientsEntries = Object.entries(state.ingredients);
      // ingredientsPrices = [0, 0, 1.3, 1]
      const ingredientsPrices = ingredientsEntries.map(
        ([key, value]) => value * INGREDIENT_PRICES[key],
      );
      const newTotalPrice = ingredientsPrices.reduce((sum, value) => sum + value, 2.7);

      state.totalPrice = newTotalPrice;
    })
    .addCase(updatePurchasable, (state) => {
      const ingredientsValues = Object.values(state.ingredients);
      const ingredientsQuantities = ingredientsValues.reduce((sum, quantity) => sum + quantity);
      state.purchasable = ingredientsQuantities > 0;
    })
    .addDefaultCase((state) => state);
});
