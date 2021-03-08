import * as Types from '../types';

const initialState = {
  isLoading: false,
  error: null,
  books: [],
};

const bookReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.LOAD_BOOKS_INIT:
      return {
        ...state,
        isLoading: true,
      };
    case Types.LOAD_BOOKS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case Types.LOAD_BOOKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        books: payload,
      };
    default:
      return state;
  }
};

export default bookReducer;
