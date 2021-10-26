import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class NewBoxForm extends Component {
	constructor(props) {
		super(props);
		this.state = { height: '', width: '', color: '' };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(evt) {
		evt.preventDefault();
		const newBox = { ...this.state, id: uuidv4() };
		this.props.addBox(newBox);
		this.setState({ height: '', width: '', color: '' });
	}
	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value,
		});
	}
	render() {
		return (
			<div className='NewBoxForm'>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor='height'>Height: </label>
					<input id='height' name='height' value={this.state.height} onChange={this.handleChange} />
					<label htmlFor='width'>Width: </label>
					<input id='width' name='width' value={this.state.width} onChange={this.handleChange} />
					<label htmlFor='color'>Background Color: </label>
					<input id='color' name='color' value={this.state.color} onChange={this.handleChange} />
					<button>Add New Box!</button>
				</form>
			</div>
		);
	}
}

export default NewBoxForm;
