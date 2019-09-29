import { SET_FRIEND_DATA } from '../actions/friendActions/types';
const initState = {
  friend: '',
};
export default function(state = initState, action) {
  switch (action.type) {
    case SET_FRIEND_DATA:
      return { ...state, friend: action.payLoad };
    default:
      return state;
  }
}
