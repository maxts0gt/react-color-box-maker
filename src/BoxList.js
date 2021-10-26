import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import { v4 as uuidv4 } from 'uuid';

class BoxList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			boxes: [],
		};
		this.addBox = this.addBox.bind(this);
	}

	remove(id) {
		this.setState({ boxes: this.state.boxes.filter((box) => box.id !== id) });
	}

	addBox(newBox) {
		this.setState({
			boxes: [...this.state.boxes, newBox],
		});
	}

	render() {
		const boxes = this.state.boxes.map((box) => (
			<Box
				key={box.id}
				id={box.id}
				width={box.width}
				height={box.height}
				color={box.color}
				removeBox={() => this.remove(box.id)}
			/>
		));
		return (
			<div className='BoxList'>
				<h1>Box Thingy</h1>
				<NewBoxForm addBox={this.addBox} />
				{boxes}
			</div>
		);
	}
}

export default BoxList;
