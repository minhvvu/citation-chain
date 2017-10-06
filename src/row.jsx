import React, { Component } from 'react';

import './row.css';

export default class Row extends Component {
	render() {

		const { key, value, leftText, rightText } = this.props.data;
		const { controlText } = this.props.controls;

		return (
			<div className="row" key={key}>
				<div className="item"> {leftText} </div>
				<div className="item"> {value} </div>
				<div className="item"> {controlText} </div>
				<div className="item"> {rightText} </div>
			</div>
		);
	}
}