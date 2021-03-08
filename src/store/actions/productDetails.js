import * as Types from '../types';
import axios from 'axios';

import { getProductPromise } from '../../fakebackend/promiseData';
import { showToast } from './toast';

import * as API from '../../services/api';

export const loadProductInit = () => ({
  type: Types.LOAD_PRODUCT_INIT,
});

export const loadProductError = error => dispatch => {
  dispatch({ type: Types.LOAD_PRODUCT_ERROR, payload: error });
  dispatch(showToast({ title: 'Error', text: error }));
};

export const loadProductSuccess = product => ({
  type: Types.LOAD_PRODUCT_SUCCESS,
  payload: product,
});

const errorHandler = (successfn, errorAction, dispatch) => {
  return async (...args) => {
    try {
      await successfn(...args);
    } catch (error) {
      if (error.message) {
        dispatch(errorAction(error.message));
      }
    }
  };
};

export const loadProduct = (id, callback) => async (dispatch, getState) => {
  console.log("load Product");
  dispatch(loadProductInit());

  errorHandler(
    async (id, callback) => {
      console.log("start query car info");
      const response = await axios.get(API.ENDPOINT + `/car?id=${id}`);
      const product = response.data.data;
      console.log("after loaded car");
      // console.log(response);
      // console.log(product);
      dispatch({type: Types.SET_MDSP, payload: product.mdspprice});
      dispatch(loadProductSuccess(product));

      if (callback) callback();
    },
    loadProductError,
    dispatch,
  )(id, callback);
};
