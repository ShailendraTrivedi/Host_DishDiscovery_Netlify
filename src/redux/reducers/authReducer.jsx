import {
  LOGIN_AUTH_REQUEST,
  LOGIN_AUTH_SUCCESS,
  REGISTER_AUTH_REQUEST,
  REGISTER_AUTH_SUCCESS,
} from "../constant";

const loginReducer = (
  state = {
    loginUser: null,
    loading: false,
  },
  action
) => {
  switch (action.type) {
    case LOGIN_AUTH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_AUTH_SUCCESS:
      return {
        ...state,
        loginUser: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

const registerReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_AUTH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export { loginReducer, registerReducer };
