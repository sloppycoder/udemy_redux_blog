import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: reduxFormReducer
});

export default rootReducer;
