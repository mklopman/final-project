import React, { Component } from 'react';
import CommentForm from './CommentForm';
// import Comments from './Comments';
import Comment from './Comment';
import $ from 'jquery';


class Post extends Component {

	constructor(props) {
		super(props);
		this.state = {
			commentMode : false,
			commentsToShow: props.commentsToShow || false,
			commentNameValue: "",
			commentMessageValue: "",
			data: props.data || {}
		}
	}

	handleCommentNameChange(name){
		this.setState({ commentNameValue: name });
	}

	handleCommentMessageChange(message){
		this.setState({commentMessageValue: message});
	}

	commentFormResponse(data){
		this.setState({data: data})
	}

	commentFormSubmit(event){
		event.preventDefault();
		// console.log('this is the user', this.props.user)
		$.ajax({
		    url: "http://localhost:3000/api/messages",
  			method: 'POST',
		    data: { 
		    	name: this.state.commentNameValue,
	    		message: this.state.commentMessageValue,
	    		user_id: this.props.user.id,
	    		post_id: this.props.id
		    }
		}).done((data) => {
		    this.setState({ 
		    	commentsToShow: true
		    });
		    this.commentFormResponse({
		    	name: this.state.commentNameValue,
	    		message: this.state.commentMessageValue,
	    		user_id: this.props.user.id,
	    		post_id: this.props.id
		    });
		});
	}

	render() {
		return (
			<div className="post-wrap">
				<div className="user-info">
					<span className="post-name">{this.props.name},</span>
					<span className="post-team">{this.props.team}: </span>
					<span className="post-event">{this.props.event}, </span>
					<span className="post-location">{this.props.location}, </span>
					<span className="post-date">{this.props.date}: </span>
				</div>
				<div className="user-post">{this.props.content}</div>
				<button className="comment-button" onClick={()=>{this.setState({commentMode: true})}}>Comment On This Post</button>
				{ this.state.commentMode ? <CommentForm {...this.props} user={this.props.user} commentFormSubmit={this.commentFormSubmit.bind(this)} handleCommentNameChange={this.handleCommentNameChange.bind(this)} handleCommentMessageChange={this.handleCommentMessageChange.bind(this)}/> : null }
				{ this.state.commentsToShow ? <Comment {...this.props} data={this.state.data} /> : null }
			</div>
		)
	}



}

export default Post; 

