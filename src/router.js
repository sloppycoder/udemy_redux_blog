import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';

const BlogList = () => <div><h2>This is a list of blogs</h2></div>;

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={BlogList} />
    </Route>
  </Router>
);
