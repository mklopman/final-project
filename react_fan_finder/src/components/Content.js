import React, { Component } from 'react';
import PostForm from './PostForm';

class Content extends Component {
  render() {
    return (
      <div>
      <PostForm user={ this.props.user }/>
      </div>
    );
  }
}

export default Content;