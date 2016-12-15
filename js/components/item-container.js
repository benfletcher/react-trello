import React, { Component } from 'react';
import Content from './content';
import { data, head, newId } from '../sampledata';
import AddChild from './add-child';

class ItemContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.props.children.forEach(id => this.state[id] = data.get(id));

    this.addItem = this.addItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
  }

  addItem() {
    console.log(this.state);

    const newChildId = newId();

    // let updatedParent = Object.create({}, this.state[parentId]);
    // updatedParent.children = this.state[parentId].children.slice();
    // updatedParent.children.push(item.id);
    //
    // this.setState({[parentId]: updatedParent});
    //
    // this.setState(item, () =>
    //   console.log(
    //     'parent:', updatedParent,
    //     'new id:', item.id,
    //     'state', this.state
    //   )
    // );
  }

  updateItem(item) {
    console.log(this.state);
    this.setState(item, () => console.log('updated:', this.state));
  }

  render() {
    const children = this.props.children.length > 0;
    if (!children) console.log(this.state);
    const addChild = () => (
      <AddChild
        addItem={this.props.addItem}
        parentId={this.props.parentId}
      />
    );

    const hasChild = () =>
      Object.keys(this.state).map(id =>
        <article key={id}>
          <span>
            <Content
              level={this.props.level}
              id={id}
              updateItem={this.updateItem}
              parentId={id}
            >
              {this.state[id]}
            </Content>
            <ItemContainer level={this.props.level + 1} addItem={this.addItem}>
              {this.state[id].children}
            </ItemContainer>
          </span>
        </article>
      );

    const className = `item level-${this.props.level}`;
    const oddEven = (this.props.level % 2) ? "odd" : "even";

    return (
      <div className={`${className} ${oddEven}`}>
        {children ? hasChild() : addChild()}
      </div>
    );
  }
}

export default ItemContainer;
