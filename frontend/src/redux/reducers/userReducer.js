import { USER_LOGGED_IN, USER_LOGOUT, USER_UNAUTHORIZED } from '../actions/userActions/types.js';
const initState = {
  user: '',
};
export default function(state = initState, action) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return { ...state, user: action.payLoad };
    case USER_LOGOUT:
      return { ...state, user: '' };
    case USER_UNAUTHORIZED:
      return { ...state, user: '' };
    default:
      return state;
  }
};

