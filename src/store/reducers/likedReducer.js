import * as Types from '../types';

const initialState = {
  likedProducts: [],
};

const likedReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.LIKE_PRODUCT:
      return {
        ...state,
        likedProducts: [payload, ...state.likedProducts],
      };
    case Types.UNLIKE_PRODUCT:
      return {
        ...state,
        likedProducts: state.likedProducts.filter(p => p.uuid !== payload.uuid),
      };

    default:
      return state;
  }
};

export default likedReducer;
