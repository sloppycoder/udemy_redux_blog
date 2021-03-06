import axios from 'axios';

export const FETCH_POST = 'FETCH_POST';
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';


const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=gurulin';

export function fetchPosts() {
  return {
    type: FETCH_POSTS,
    payload: axios.get(`${ROOT_URL}/posts${API_KEY}`)
  };
}

export function fetchPost(id) {
  return {
    type: FETCH_POST,
    payload: axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)
  };
}

export function deletePost(id) {
  return {
    type: DELETE_POST,
    payload: axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
  };
}

export function createPost(props) {
  return {
    type: CREATE_POST,
    payload: axios.post(`${ROOT_URL}/posts${API_KEY}`, props)
  };
}
