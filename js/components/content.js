import React, { Component } from 'react';
import { newId } from '../sampledata'

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: this.props.editing || false,
    }

    this.onEditContent = this.onEditContent.bind(this);
    this.onSaveEdits = this.onSaveEdits.bind(this);
  }

  onEditContent(event) {
    this.setState({editing: true});
  }

  onSaveEdits(event) {
    this.setState({
      editing: false
    });

    let updatedItem = {
      [this.props.id]: {
        created: this.props.children.created,
        content: this.refs.content.value,
        children: this.props.children.children
      }
    };

    this.props.updateItem(updatedItem);
  }

  render() {
    const className = `content level-${this.props.level}`;

    const normalView = () => {
      const Tag = `h${Math.min(this.props.level, 6)}`;
      return (
          <Tag onClick={this.onEditContent} className={className}>
            {this.props.children.content}
          </Tag>
      );
    }

    const editView = () => (
      <textarea
        defaultValue={this.props.children.content}
        className={className}
        autoFocus={true}
        onBlur={this.onSaveEdits}
        spellCheck="false"
        ref="content"
      />
    );

    return (this.state.editing) ? editView() : normalView();
  }

};

export default Content;
