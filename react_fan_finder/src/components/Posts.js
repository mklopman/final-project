import React, { Component } from 'react';
import $ from 'jquery';
import Post from './Post'

class Posts extends Component {
	constructor() {
		super()
		this.state = {
			posts: [],
		};
	}

	componentDidMount(){
		console.error("HI FROM COMPONENT DID MOUNT")
		$.get("http://localhost:3000/api/posts")
		.done((data) => {
	        this.setState(data)
	    });
	}


	render() {

		 const posts = this.state.posts.map((post, i)=>{
		     return(
		        <li key={i}>
		           <Post 
		           team={post.team} 
		           content={post.content} 
		           event={post.event} 
		           date={post.date} 
		           title={post.title} 
		           id={post.id} 
		           location={post.location}/>
		      	</li>
		     );
	    });

		console.log(this.state.posts)
		return (
			<div>
			{posts}
			</div>
		);
	}



}

export default Posts; 