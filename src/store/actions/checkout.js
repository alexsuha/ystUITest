import * as Types from '../types';

export const setCarId = carid => dispatch => {
    dispatch({
        type: Types.SET_CURRENT_CAR_ID,
        payload: carid,
      });
}

export const setCarImg = carimg => dispatch => {
  dispatch({
      type: Types.SET_CURRENT_CAR_IMG,
      payload: carimg,
    });
}

export const setCarName = carname => dispatch => {
  dispatch({
      type: Types.SET_CURRENT_CAR_NAME,
      payload: carname,
    });
}