import React, { Component } from 'react';

import './column.css';

import GroupRows from './group-rows';

export default class Column extends Component {

  render() {

    const groups = this.props.data.map(groupData => 
      <GroupRows data={groupData} controls="V" />
    );

    return (
      <div className="columnx">
        {groups}
      </div>
    );
  }
}
