
import { FETCH_POSTS } from '../actions';

const INITIAL_STATE = { all: [], post: null };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return { all: action.payload.data, ...state };
    default:
      return state;
  }
}
