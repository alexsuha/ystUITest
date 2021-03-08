import * as Types from '../types';

const initialState = {
  loginToken: null,
  userProfile: null,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.LOGOUT_CURRENT_USER:
      return {
        ...state,
        userProfile: null,
      };
    case Types.SET_USER_PROFILE:
      return {
        ...state,
        userProfile: payload,
      }
    // case Types.GET_USER_PROFILE:
    //   return state.userProfile;
    case Types.REDIRECT_AFTER_LOGIN:
      return {
        ...state,
      };
    case Types.LOGIN_GET_TOKEN:
      return {
        ...state,
        loginToken: payload,
      };
    case Types.LOGOUT_REMOVE_TOKEN:
      return {
        ...state,
        loginToken: null,
      }
    default:
      return state;
  }
};

export default authReducer;
