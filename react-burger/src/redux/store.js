import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import burger from './reducers/burger';

const reducer = {
  burger,
};

export default configureStore({
  reducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
