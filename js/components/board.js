import React from 'react';
import List from './list';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { boardState } = this.props;
    return (
      <div className="boards">
        <div>Board title: {this.props.boardState.boardTitle}</div>
        {this.props.boardState.lists.map((list) => {
          return <List listInfo={list}/>
        }
        )}
      </div>
    );
  }
}
