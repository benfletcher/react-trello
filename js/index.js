require('babel-polyfill');

import React from 'react';
import ReactDOM  from 'react-dom';

import Board from './components/board';

document.addEventListener('DOMContentLoaded', () => {
  let lists = ['list 1', 'list 2', 'list 3'];
  ReactDOM.render(<Board
    boardTitle="Sample Board Title"
    lists={lists}/>, document.getElementById('app'))
});
