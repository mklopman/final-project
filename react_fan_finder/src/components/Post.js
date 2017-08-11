import React, { Component } from 'react';

class Post extends Component {


	render() {
		return (
			<div>
			"hi"
			{this.props.team}
			{this.props.content}
			{this.props.event}
			{this.props.date}
			{this.props.title}
			{this.props.location}
			{this.props.id}
			</div>
			)
	}



}

export default Post; 