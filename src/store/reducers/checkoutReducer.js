import * as Types from '../types';

const initialState = {
  carid: null,
  carname: null,
  carimg: null,
};

const checkoutReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.SET_CURRENT_CAR_ID:
      return {
        ...state,
        carid: payload,
      };
    case Types.SET_CURRENT_CAR_IMG:
      return {
        ...state,
        carimg: payload,
      }
    case Types.SET_CURRENT_CAR_NAME:
      return {
        ...state,
        carname: payload,
      }

    default:
      return state;
  }
};

export default checkoutReducer;