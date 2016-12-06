import React from 'react';
import List from './list';

const Board = props => (
  <div className="boards">
    <h1 id="board-title">
      {`Board title: ${props.boardState.boardTitle}`}
    </h1>
    {props.boardState.lists.map(list =>
      <List listInfo={list}/>
    )}
  </div>
);

export default Board;
