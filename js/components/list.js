import React from 'react';
import Card from './card';

export default class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="card-list">
        <div>
          List Title: {this.props.listTitle}
          {this.props.cardContent.map((card) =>
            <Card cardContent={card} />
          )}
        </div>
      </div>
    );
  }
}
