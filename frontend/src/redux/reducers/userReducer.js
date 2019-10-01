import {
  USER_LOGGED_IN,
  USER_LOGOUT,
  USER_UNAUTHORIZED,
  USER_SET_TIMELINE,
  USER_UPDATE_DATA,
} from '../actions/userActions/types.js';
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
      case USER_SET_TIMELINE:
        return {...state,user:{...state.user,timeline:action.payload}}
      case USER_UPDATE_DATA:
        return { ...state, user: { ...state.user, company: action.payload.company, website: action.payload.website } };

    default:
      return state;
  }
};

