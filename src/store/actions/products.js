import * as Types from '../types';
import { showToast } from './toast';
import axios from 'axios';
import qs from 'qs';
import * as API from '../../services/api';

export const loadProductsInit = isLoadMoreRequest => ({
  type: isLoadMoreRequest
    ? Types.LOAD_MORE_PRODUCTS_INIT
    : Types.LOAD_PRODUCTS_INIT,
});

export const loadProductsError = (isLoadMoreRequest, error) => (
  dispatch,
  getState,
) => {
  dispatch(showToast({ title: 'Error', text: error }));
  dispatch({
    type: isLoadMoreRequest
      ? Types.LOAD_MORE_PRODUCTS_ERROR
      : Types.LOAD_PRODUCTS_ERROR,
    payload: error,
  });
};

export const loadProductsSuccess = (isLoadMoreRequest, products) => ({
  type: isLoadMoreRequest
    ? Types.LOAD_MORE_PRODUCTS_SUCCESS
    : Types.LOAD_PRODUCTS_SUCCESS,
  payload: products,
});

const errorHandler = (successfn, errorAction, dispatch) => {
  return async (...args) => {
    try {
      await successfn(...args);
    } catch (error) {
      if (error.message) {
        dispatch(errorAction(args[1], error.message));
      }
    }
  };
};

export const loadProducts = (params, isLoadMoreRequest, callback) => async (
  dispatch,
  getState,
) => {
  dispatch(loadProductsInit(isLoadMoreRequest));

    const strParams = qs.stringify(params);
    console.log("loadproducts");

    axios.get(API.ENDPOINT + `/car/list?${strParams}`).then(
      response => {
        if (response.status === 200) {
          console.log(response.data);
          const products = response.data.data.content;
          console.log(products.length);
          dispatch(loadProductsSuccess(isLoadMoreRequest, products));
          if (callback) callback();
        }
        else {
          dispatch(
            showToast({
              title: 'Error',
              text: response.msg,
            }),
          );
        }
      }
    );
};

//snackbars, errors handling, css cards hoover

// Error handler for async / await functions

/*
const catchErrors = fn => {
  return function(req, res, next) {
    return fn(req, res, next).catch(next);
  };
};
*/
