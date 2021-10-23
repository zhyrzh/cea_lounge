import { USER_LOADED, LOGOUT_USER } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: true,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: payload.loggedIn,
        loading: false,
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
