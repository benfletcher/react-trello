import React from 'react';
import ReactDOM from 'react-dom';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div>
        {this.props.cardContent}
      </div>
    );  
  }
};
