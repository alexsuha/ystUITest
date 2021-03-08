import * as Types from '../types';

const initialState = {
  mdsp: 800,
};

const mdspCalcReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.SET_MDSP:
    case Types.CALCULATE_MSDP:
      console.log("into mdspCalcreducer" + payload);
      return {
        ...state,
        mdsp: payload,
      };

    default:
      return state;
  }
};

export default mdspCalcReducer;