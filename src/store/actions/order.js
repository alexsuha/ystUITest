import * as Types from '../types';

import axios from 'axios';
import qs from 'qs';
import * as API from '../../services/api';

export const loadOrdersInit = () => ({
  type: Types.LOAD_ORDERS_INIT,
});

export const loadOrdersError = error => (
  dispatch,
  getState,
) => {
  //dispatch(showToast({ title: 'Error', text: error }));
  alert(error);
  dispatch({
    type: Types.LOAD_ORDERS_ERROR,
    payload: error,
  });
};

export const loadOrdersSuccess = orders => ({
  type: Types.LOAD_ORDERS_SUCCESS,
  payload: orders,
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

export const loadOrders = (callback) => async (
  dispatch,
  getState,
) => {
  dispatch(loadOrdersInit());
    const params = {
        page: 0,
        size: 10,
        type: 0,
    };
    const strParams = qs.stringify(params);
    console.log("load orders");

    axios.get(API.ENDPOINT + `/order/list?${strParams}`, {
        headers: {
          'token': getState().authReducer.loginToken
        },
      }).then(
      response => {
        console.log("feedback from order");
        console.log(response);
        if (response.status === 200) {
          console.log("get order list");
          console.log(response.data);
          const orders = response.data.data.content;

          dispatch(loadOrdersSuccess(orders));
          if (callback) callback();
        }
        else {
          alert(response.msg);
        }
      }
    );
};
