import React, { Component } from 'react';

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      content: this.props.children
    }
    this.onContentClick = this.onContentClick.bind(this);
  };

  onContentClick(event) {
    console.log('clickie clickie', event);
    this.setState({editing: true});
  };

  render() {
    // const Tag = `h${this.props.level}`;
    const className = `content level-${this.props.level}`;

    return (this.state.editing) ? (
        <span>
          <textarea defaultValue={this.state.content} className={className}/>
          <button type="button">Save</button>
        </span>
      ) : (
        <p onClick={this.onContentClick} className={className}>
          {this.state.content}
        </p>
      );
  };

};

export default Content;
