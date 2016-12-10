import React, { Component } from 'react';

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
    }

    this.onEditContent = this.onEditContent.bind(this);
    this.onSaveEdits = this.onSaveEdits.bind(this);
  };

  onEditContent(event) {
    this.setState({editing: true});
  };

  onSaveEdits(event) {
    this.setState({
      editing: false
    });

    let updatedItem = {
      id: this.props.children.id,
      created: this.props.children.created,
      content: this.refs.content.value
    };

    console.log(this.props);
    this.props.updateItem(updatedItem);

  };

  render() {
    const className = `content level-${this.props.level}`;

    const normalView = () => {
      const Tag = `h${Math.min(this.props.level, 6)}`;
      return (
        <Tag onClick={this.onEditContent} className={className}>
          {this.props.children.content}
        </Tag>
        // TODO: new sibling button
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
  };

};

export default Content;
