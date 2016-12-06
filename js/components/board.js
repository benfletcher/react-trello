import React, { Component } from 'react';
import List from './list';

const boardDataUrl = "https://www.mockaroo.com/e9f9ec20/download?count=1&key=e9e01840";

export default class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boardTitle: "Loading...",
      boardId: "0",
      lists: []
    };

    this.loadBoardState();

    this.onAddCardInputChange = this.onAddCardInputChange.bind(this);
    this.onAddSubmit = this.onAddCardSubmit.bind(this);
  }

  loadBoardState() {
    let oReq = new XMLHttpRequest();
    oReq.onload = e => {
      const importedBoard = JSON.parse(oReq.responseText);
      this.setState(importedBoard);
    };
    oReq.open("get", boardDataUrl, true);
    oReq.send();
  }

  onAddCardInputChange(input) {
    console.info('onAddCardInputChange CB:', input);
  }

  onAddCardSubmit(newCard, listId) {
    console.log(arguments);
    console.log(this.state);
    // this.setState(this.state.lists[listId] = [ ...this.state.lists[listId], newCard ])
  }

  render() {
    return (
      <div className="board">
        <h1 id="board-title" key={this.state.boardId.toString()}>
          {`Board: ${this.state.boardTitle}`}
        </h1>
        <div className="lists">
          {this.state.lists.map(list =>
            <List
              listInfo={list}
              key={list.listId}
              onAddCardInputChange={this.onAddCardInputChange}
              onAddCardSubmit={this.onAddCardSubmit}
            />
          )}
        </div>
      </div>
    );
  }
}
