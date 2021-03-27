import { createAction } from '@reduxjs/toolkit';

export const addIngredient = createAction('ADD_INGREDIENT');
export const removeIngredient = createAction('REMOVE_INGREDIENT');
export const updatePrice = createAction('UPDATE_PRICE');
export const updatePurchasable = createAction('UODATE_PURCHASABLE');
