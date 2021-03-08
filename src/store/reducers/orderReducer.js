import * as Types from '../types';

const initialState = {
  isLoading: false,
  error: null,
  orders: [],
};

const orderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.LOAD_ORDERS_INIT:
      return {
        ...state,
        isLoading: true,
      };
    case Types.LOAD_ORDERS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case Types.LOAD_ORDERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        orders: payload,
      };
    default:
      return state;
  }
};

export default orderReducer;
