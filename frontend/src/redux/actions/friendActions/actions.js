import { SET_FRIEND_DATA, SET_FRIEND_TIMELINE } from './types';
import axios from 'axios'
export const setFriend=(payload)=>({type: SET_FRIEND_DATA, payload})
export const setFriendTimeLine = payload => ({ type: SET_FRIEND_TIMELINE, payload });
export const getFriendData= (id)=>async (dispatch)=>{
    const friend=(await axios.get(`/api/user/${id}`)).data
    dispatch(setFriend(friend));
}
export const getFriendTimeLine= (id)=>async (dispatch)=>{
    const timeline=(await axios.get(`/api/timeline/${id}`)).data
    dispatch(setFriendTimeLine(timeline));
}

