import * as Types from '../types';

import axios from 'axios';
import qs from 'qs';
import * as API from '../../services/api';

export const loadBooksInit = () => ({
  type: Types.LOAD_BOOKS_INIT,
});

export const loadBooksError = error => (
  dispatch,
  getState,
) => {
  //dispatch(showToast({ title: 'Error', text: error }));
  alert(error);
  dispatch({
    type: Types.LOAD_BOOKS_ERROR,
    payload: error,
  });
};

export const loadBooksSuccess = orders => ({
  type: Types.LOAD_BOOKS_SUCCESS,
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

export const loadBooks = (callback) => async (
  dispatch,
  getState,
) => {
  dispatch(loadBooksInit());
    const params = {
        page: 0,
        size: 10,
        type: 0,
    };
    const strParams = qs.stringify(params);
    console.log("load books");

    axios.get(API.ENDPOINT + `/booking/list?${strParams}`, {
        headers: {
          'token': getState().authReducer.loginToken
        },
      }).then(
      response => {
        console.log("feedback from book");
        console.log(response);
        if (response.status === 200) {
          console.log("get book list");
          console.log(response.data);
          const orders = response.data.data.content;

          dispatch(loadBooksSuccess(orders));
          if (callback) callback();
        }
        else {
          alert(response.msg);
        }
      }
    );
};