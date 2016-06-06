import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';

import { fetchPost, deletePost } from '../actions';


class PostsShow extends Component {
  constructor(props) {
    super(props);

    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchPost(this.props.params.id);
  }

  onDeleteClick() {
    this.props.deletePost(this.props.params.id)
      .then(() => browserHistory.push('/'));
  }

  render() {
    const { post } = this.props;
    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back to list</Link>
        <button
          onClick={this.onDeleteClick}
          className="btn btn-danger pull-xs-right"
        >
            Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>{post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
