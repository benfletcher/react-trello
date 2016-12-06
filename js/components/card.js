import React from 'react';
import ReactDOM from 'react-dom';

const Card = props => (
  <li className="card">
    {props.cardContent}
  </li>
);

export default Card;
