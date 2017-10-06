import React, { Component } from 'react';

import Row from './row';

export default class GroupRows extends Component {
	render() {

		const rows = this.props.data.map(rowData => 
			<Row data={rowData} controls="V" />
		);

		return (
			<div className="group-rows">
				{rows}
			</div>
		);
	}
}