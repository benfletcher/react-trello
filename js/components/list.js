import React, { Component } from 'react';
import Card from './card';

export default class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newCardInfo: "Super interesting new card content. Get your new card here."
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({newCardInfo: event.target.value});
    this.props.onAddInputChanged(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onAddSubmit(this.state.newCardInfo);
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
