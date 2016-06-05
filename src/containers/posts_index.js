import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return <h2>A List of posts here...</h2>;
  }
}

export default connect(null, { fetchPosts })(PostsIndex);
