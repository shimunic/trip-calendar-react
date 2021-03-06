import { USER_LOGGED_IN, USER_LOGOUT, USER_UNAUTHORIZED, USER_UPDATE_DATA, USER_SET_TIMELINE } from './types';
import axios from 'axios';

export const userLoggedIn = payLoad => ({ type: USER_LOGGED_IN, payLoad });
export const userLoggedOut = () => ({ type: USER_LOGOUT });
export const userUnathorized = () => ({ type: USER_UNAUTHORIZED });
export const userDataUpdated = payload => ({ type: USER_UPDATE_DATA, payload });
export const userSetTimeline = payload => ({ type: USER_SET_TIMELINE, payload });
export const isUserLogin = () => async dispatch => {
  try {
    const user = (await axios.get('/api/logged/', { withCredentials: true })).data;
    dispatch(userLoggedIn(user));
    const timeline = (await axios.get(`/api/timeline/${user._id}`, { withCredentials: true })).data;
    dispatch(userSetTimeline(timeline));
  } catch (e) {
    dispatch(userUnathorized());
  }
};
export const userLogout = () => async dispatch => {
  await axios.get('/api/logout');
  dispatch(userLoggedOut());
};
export const userDataUpdate = (id, updateFieldObj) => async dispatch => {
  try {
    let user = (await axios.put(`/api/user/${id}`, updateFieldObj, { withCredentials: true })).data;
    dispatch(userDataUpdated(user));
  } catch (e) {
    console.log(e);
  }
};
