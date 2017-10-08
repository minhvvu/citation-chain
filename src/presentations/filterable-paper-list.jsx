import React, { Component } from 'react';

import data from '../test-data';


class Paper {
	constructor(paperId, title, url, venue, year) {
		this.paperId = paperId;
		this.title = title;
		this.url = url;
		this.venue = venue;
		this.year = year;
	}
}


export default class FilterablePaperList extends Component {
	render() {
		return (
			<div>
				<SearchBar />
				<PaperList papers={data} />
			</div>
		);
	}
}


class PaperList extends Component {

	render() {
		return (
			<div>
				<Citations />
				<Citations />
			</div>
		);
	}
}

class Citations extends Component {

	constructor() {
		super();
		this.state = {title:'', citations:[]};
		this.requestCitations();
	}	

	requestCitations() {
		const testPaperId = '0ed0e48b245f2d459baa3d2779bfc18fee04145b';
		const baseURL = 'http://api.semanticscholar.org/v1/paper';

		const apiURL = `${baseURL}/${testPaperId}`;
		fetch(apiURL).then((response) => {
			return response.json();
		}).then((myJson) => {
			this.setState(myJson);
		});
	}

	render() {
		return (
			<div>
				<ParentHeader title={this.state.title}/>
				<CitedByPapers />
				<ParentFooter nCitations={this.state.citations.length} />
			</div>
		);
	}

}

class ParentHeader extends Component {

	render() {
		return (
			<div>{this.props.title}</div>
		);
	}

}

class ParentFooter extends Component {

	render() {
		return (
			<div>Parent paper citation count: {this.props.nCitations}</div>
		);
	}

}


class CitedByPapers extends Component {

	render() {
		return (
			<div>List of citedBy papers</div>
		);
	}

}


class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
        <p>
          <input type="checkbox" />
          {' '}
          Only show selected papers
        </p>
      </form>
    );
  }
}