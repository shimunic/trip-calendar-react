import { USER_LOGGED_IN, USER_LOGOUT, USER_UNAUTHORIZED } from './types';
import axios from 'axios'
export const userLoggedIn=(payLoad)=>({type: USER_LOGGED_IN, payLoad})
export const userLoggedOut=()=>({type: USER_LOGOUT})
export const userUnathorized = () => ({ type: USER_UNAUTHORIZED });
export const isUserLogin=()=>async (dispatch) => {
  try {
  const user = (await axios.get('/api/logged/', { withCredentials: true })).data; 
  dispatch(userLoggedIn(user)); 
  } catch(e) {
  dispatch(userUnathorized()); 
  }
}
export const userLogout=()=> async (dispatch)=>{
  await axios.get('/api/logout');
  dispatch(userLoggedOut())
}