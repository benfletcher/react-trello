import React from 'react';
import Card from './card';

export default class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div className="card-list">
        <div>
          List Title: {this.props.listInfo.listTitle}
          {this.props.listInfo.cards.map((card) =>
            <Card cardContent={card} />
          )}
        </div>
      </div>
    );
  }
}
