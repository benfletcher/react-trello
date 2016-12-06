import React, { Component } from 'react';
import List from './list';

const boardDataUrl = "https://www.mockaroo.com/e9f9ec20/download?count=1&key=e9e01840";

export default class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boards: {
        boardTitle: "Loading...",
        boardId: "0",
        lists: []
      }
    };

    this.loadBoardState();

    this.onAddInputChanged = this.onAddInputChanged.bind(this);
    this.onAddSubmit = this.onAddSubmit.bind(this);
  }

  loadBoardState() {
    let oReq = new XMLHttpRequest();
    oReq.onload = e => {
      const importedBoard = JSON.parse(oReq.responseText);
      this.setState({ boards: importedBoard[0] });
    };
    oReq.open("get", boardDataUrl, true);
    oReq.send();
  }

  onAddInputChanged(input) {
    console.info('onAddInputChanged CB:', input);
  }

  onAddSubmit(cardInfo) {
    console.log('List form submitted.', cardInfo);
  }

  render() {
    return (
      <div className="board">
        <h1 id="board-title" key={this.state.boards.boardId.toString()}>
          {`Board: ${this.state.boards.boardTitle}`}
        </h1>
        <div className="lists">
          {this.state.boards.lists.map(list =>
            <List
              listInfo={list}
              key={list.listId}
              onAddInputChanged={this.onAddInputChanged}
              onAddSubmit={this.onAddSubmit}
            />
          )}
        </div>
      </div>
    );
  }
}
