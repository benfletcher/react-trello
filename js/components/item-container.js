import React, { Component } from 'react';
import Content from './content';

class ItemContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.addItem = this.addItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
  };



  addItem(item) {
    if (id in this.state) {
      throw new Error('uh-oh trying to add dup ID...');
    }
    this.state[item.id] = {
      content: item.content,
      created: item.created
    };
  };

  updateItem(item) {
    console.log('updating', item);
    this.setState(item, () => console.log('updated?', this.state));
  };

  render() {
    if (!this.props.children) {
      // TODO new child button
      return null;
    }

    const className = `item level-${this.props.level}`;
    const oddEven = (this.props.level % 2) ? "odd" : "even";

    return (
      <div className={`${className} ${oddEven}`}>
        {this.props.children.map(item =>
          <article key={item.id}>
            <Content
              level={this.props.level}
              addItem={this.addItem}
              updateItem={this.updateItem}
            >
              {item}
            </Content>
            <ItemContainer level={this.props.level + 1}>
              {item.child}
            </ItemContainer>
          </article>
        )}
      </div>
    );
  };
}

export default ItemContainer;
