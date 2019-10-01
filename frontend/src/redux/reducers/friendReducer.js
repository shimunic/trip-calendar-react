import { SET_FRIEND_DATA, SET_FRIEND_TIMELINE } from '../actions/friendActions/types';
const initState = {
  friend: '',
};
export default function(state = initState, action) {
  switch (action.type) {
    case SET_FRIEND_DATA:
      return { ...state, friend: action.payload };
    case SET_FRIEND_TIMELINE:
      return { ...state, friend: { ...state.friend, timeline: action.payload } };
    default:
      return state;
  }
}
