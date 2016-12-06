import React from 'react';
import ReactDOM from 'react-dom';

const Card = props => (
  <li className="card" key={props.cardInfo.cardId}>
    {props.cardInfo.content}
  </li>
);

export default Card;
