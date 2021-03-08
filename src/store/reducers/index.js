import productsReducer from './productsReducer';
import headerReducer from './headerReducer';
import likedReducer from './likedReducer';
import cartReducer from './cartReducer';
import productDetailsReducer from './productDetailsReducer';
import toastReducer from './toastReducer';
import authReducer from './authReducer';
import mdspCalcReducer from './mdspCalcReducer';
import checkoutReducer from './checkoutReducer';
import orderReducer from './orderReducer';
import bookReducer from './bookReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  productsReducer,
  headerReducer,
  likedReducer,
  cartReducer,
  productDetailsReducer,
  toastReducer,
  authReducer,
  mdspCalcReducer,
  checkoutReducer,
  orderReducer,
  bookReducer,
});

export default rootReducer;
