require('babel-polyfill');

import React from 'react';
import ReactDOM  from 'react-dom';

import Board from './components/board';

let lists = ['list 1', 'list 2', 'list 3'];

const boardState = {
  boardTitle: 'New Board Title',
  lists: [
    {
      listTitle: 'List One',
      cards: ['Card 123','456','789']
    },
    {
      listTitle: 'List Two',
      cards: ['Card 123','123','789']
    },
    {
      listTitle: 'List Three',
      cards: ['Card 123','123','789']
    }
  ]
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Board boardState={boardState} />,
    document.getElementById('app')
  );
});
