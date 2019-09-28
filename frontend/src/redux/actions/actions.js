import {USER_LOGGED_IN}  from './types'
import axios from 'axios'
export const userLoggedIn=(payLoad)=>({type: USER_LOGGED_IN, payLoad})
export const isUserLogin=()=>async (dispatch) => {
  try {
  const user = await axios.get('/api/logged/', { withCredentials: true }); 
  dispatch(userLoggedIn(user)); 
  } catch(e) {
  dispatch(userLoggedIn('')); 
  }
}