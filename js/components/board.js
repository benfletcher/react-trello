import React from 'react';
import List from './list';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let cards = ['card 1', 'card 2', 'card 3'];

    return (
      <div className="boards">
        <div>Board title: {this.props.boardTitle}</div>
        {this.props.lists.map((list) =>
          <List listTitle={list} cardContent={cards} />
        )}
      </div>
    );
  }
}
