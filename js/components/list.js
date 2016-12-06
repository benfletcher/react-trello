import React from 'react';
import Card from './card';

const List = props => (
  <div className="card">
    <h2 className="card-title">
      {`List Title: ${props.listInfo.listTitle}`}
    </h2>
    <ul className="card-content">
      {props.listInfo.cards.map(card => <Card cardContent={card} />)}
    </ul>
  </div>
);

export default List;
