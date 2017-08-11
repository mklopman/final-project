import React, { Component } from 'react';
import $ from 'jquery';


class PostForm extends Component {
	constructor(){
		super();
		this.state = {nameValue: "",
					  titleValue: "", 
					  teamValue: "",
					  eventValue: "",
					  dateValue: "",
					  locationValue: "",
					  contentValue: "",
					  data: []
					};
	}

	handleNameChange(event){
		this.setState({ nameValue: event.target.value });
	}

	handleTitleChange(event){
		this.setState(
			{titleValue: event.target.value}
			);
	}

	handleTeamChange(event){
	this.setState(
			{teamValue: event.target.value}
		);
	}

	handleEventChange(event){
		this.setState(
			{eventValue: event.target.value}
			);
	}

	handleDateChange(event){
		this.setState(
			{dateValue: event.target.value}
			);
	}

	handleLocationChange(event){
		this.setState(
			{locationValue: event.target.value}
			);
	}

	handleContentChange(event){
		this.setState(
			{contentValue: event.target.value}
			);
	}

	formResponse(data){
		console.log('got this data back:', data);
		this.setState({data: data})
	}

	formSubmit(event){
		event.preventDefault();
		$.ajax({
		    url: "http://localhost:3000/api/posts",
  			method: 'POST',
		    data: { name: this.state.nameValue,
		    		title: this.state.titleValue,
		    		team: this.state.teamValue,
		    		event: this.state.eventValue,
		    		date: this.state.dateValue,
		    		location: this.state.locationValue,
		    		content: this.state.contentValue,
		    		user_id: this.props.user.id }
		}).done((data) => {
		    this.formResponse(data);
		});
	}

	render() {



		return(
			<div>
			<form onSubmit={this.formSubmit.bind(this)}>
				<label>
					Name:
					<input type="text" name="name" value={ this.state.nameValue } onChange={ this.handleNameChange.bind(this) }/>
							
					Title:
					<input type="text" name="title" value={ this.state.titleValue } onChange={ this.handleTitleChange.bind(this) }/>
							
					Team:
					<input type="text" name="team" value={ this.state.teamValue } onChange={ this.handleTeamChange.bind(this) }/>
							
					Event:
					<input type="text" name="event" value={ this.state.eventValue } onChange={ this.handleEventChange.bind(this) }/>
							
					When:
					<input type="text" name="date" value={ this.state.dateValue } onChange={ this.handleDateChange.bind(this) }/>
							
					Location:
					<input type="text" name="location" value={ this.state.locationValue } onChange={ this.handleLocationChange.bind(this) }/>

					Description:
					<input type="text" name="content" value={ this.state.contentValue } onChange={ this.handleContentChange.bind(this) }/>
							
				</label>
					<input type="submit" value="Submit" />
				</form>
			</div>
			)
	}
}



export default PostForm;