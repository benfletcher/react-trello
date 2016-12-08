require('babel-polyfill');

import React from 'react';
import ReactDOM  from 'react-dom';

import ItemContainer from './components/item-container';

const boardDataUrl =
  "https://www.mockaroo.com/e9f9ec20/download?count=1&key=e9e01840";

fetch(boardDataUrl)
.then (res => res.json())
.then (body => {

  ReactDOM.render(
    <ItemContainer level={1}>
      {body}
    </ItemContainer>,
    document.getElementById('app')
  );

})
.catch(console.error);
