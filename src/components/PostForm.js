import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostForm extends Component {
	handleSubmit = e => {
		e.preventDefault();
		console.log(this.getTitle);
		const title = this.getTitle.value;
		const message = this.getMessage.value;
		const data = {
			id: new Date(),
			title,
			message
		};

		this.props.dispatch({
			type: 'ADD_POST',
			data,
			editing: false
		});
		this.getTitle.value = '';
		this.getMessage.value = '';
		console.log(data);
	};

	render() {
		return (
			<div className="post-container">
				<h1 className="post_heading">Creat Post</h1>
				<form className="form" onSubmit={this.handleSubmit}>
					<input
						required
						type="text"
						ref={input => (this.getTitle = input)}
						placeholder="Enter Post Title"
					/>
					<br />
					<br />
					<textarea
						rows="5"
						cols="28"
						ref={input => (this.getMessage = input)}
						required
						placeholder="Enter Post"
					/>
					<br />
					<br />
					<button>Post</button>
				</form>
			</div>
		);
	}
}

export default connect()(PostForm);
