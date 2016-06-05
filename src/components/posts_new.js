import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { browserHistory, Link } from 'react-router';

import { createPost } from '../actions';

class PostsNew extends Component {

  onSubmit(props) {
    this.props.createPost(props)
      .then(() => browserHistory.push('/'));
  }

  invalidClass(field) {
    return field.touched && field.invalid ? ' has-danger' : '';
  }

  render() {
    const { fields: { title, categories, content }, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>create a new post</h3>

        <div className={`form-group ${this.invalidClass(title)}`}>
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help">
            {title.touched ? title.error : null}
          </div>
        </div>

        <div className={`form-group ${this.invalidClass(categories)}`}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
          <div className="text-help">
            {categories.touched ? categories.error : null}
          </div>
        </div>

        <div className={`form-group ${this.invalidClass(content)}`}>
          <label>Content</label>
          <textarea className="form-control" {...content} />
          <div className="text-help">
            {content.touched ? content.error : null}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Save</button>
        <Link to="/" className="btn btn-danger" >Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Title cannot be empty.';
  }

  if (!values.categories) {
    errors.categories = 'Categories helps';
  }

  if (!values.content) {
    errors.content = 'Why post if you have nothing to say?';
  }

  return errors;
}

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostsNew);
