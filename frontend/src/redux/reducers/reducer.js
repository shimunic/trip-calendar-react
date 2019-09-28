import { USER_LOGGED_IN } from '../actions/types.js';
const initState = {
  user: '',
};
export default function(state = initState, action) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return { ...state, user: action.payLoad };
    default:
      return state;
  }
};

