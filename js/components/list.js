import React, { Component } from 'react';
import Card from './card';

export default class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newCardInfo: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({newCardInfo: event.target.value});
    this.props.onAddCardInputChange(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();

    let cardId = this.props.listInfo.cards.length;
    let content = this.state.newCardInfo ||
      `Add new card to list ${this.props.listInfo.listId} at index ${cardId}`;

    this.props.onAddCardSubmit({ content, cardId }, this.props.listInfo.listId);
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
        <form onSubmit={this.handleSubmit}>
          <label>
            Add:
            <input
              type="text"
              placeholder="New card content..."
              value={this.state.newCardInfo}
              onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
