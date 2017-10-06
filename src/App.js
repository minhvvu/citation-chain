import React, { Component } from 'react';
import './App.css';

import Column from './column';

class App extends Component {

  constructor() {
    super();
    this.state = {data: [
      [//column1
        [//groupRows1
          {
            value: "paper01",
            leftText: "99",
            rightText: "cited",
          },
          {
            value: "paper01",
            leftText: "99",
            rightText: "cited",
          },
        ],[//groupRows2
          {
            value: "paper01",
            leftText: "99",
            rightText: "cited",
          },
          {
            value: "paper01",
            leftText: "99",
            rightText: "cited",
          }
        ],
      ]
    ]};
  }

  add() {
    console.log("ADD");

    const newColumn = [
      [//new group
          {
            value: "paper897",
            leftText: "17",
            rightText: "cited",
          },
          {
            value: "paper179",
            leftText: "13",
            rightText: "",
          }
        ],
    ];

    this.state.data.push(newColumn);

    this.forceUpdate();
  }

  handerAdd=this.add.bind(this);

  render() {

    const columns = this.state.data.map(columnData => 
      <Column data={columnData} />
    );

    return (
      <div>
        <div className="all-columns">
          {columns}
        </div>

        <div id="btnAdd" onClick={this.handerAdd} >Add</div>
      </div>
    );
  }
}

export default App;
