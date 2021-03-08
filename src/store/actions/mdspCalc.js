import * as Types from '../types';

export const calculateMdsp = msdp => dispatch => {
  console.log("dispatch calculateMdsp.");
  dispatch({
    type: Types.CALCULATE_MSDP,
    payload: msdp,
  });
};
