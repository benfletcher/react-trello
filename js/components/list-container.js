// ********** //
// not in use //
// ********** //

import React, { Component } from 'react';
import List from './list';

export default class ListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newCardContent: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({newCardContent: event.target.value});
    this.props.onAddInputChanged(event.target.value);
  }

  render() {
    return (
      <div className="list">
        <h2 className="list-title">
          {`List: ${this.props.listInfo.listTitle}`}
        </h2>
        <ul className="card-content">
          {this.props.listInfo.cards.map(card =>
            <Card cardInfo={card} key={card.cardId}/>
          )}
        </ul>
        <form onSubmit={this.props.onAddSubmit}>
          <label>
            New Card:
            <input
              type="text"
              default="testing... default"
              value={this.state.newCardContent}
              onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
