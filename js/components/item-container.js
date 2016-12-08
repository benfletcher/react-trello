import React, { Component } from 'react';
import Content from './content';

const ItemContainer = props => {
  if (!props.children) {
    return null;
  }

  let style = (props.level % 2) ? {backgroundColor: "lightgrey"} : {};

  const className = `item level-${props.level}`;

  return (
    <div className={className} style={style}>
      {props.children.map(item =>
        <article key={item.id}>
          <Content level={props.level}>
            {item.content}
          </Content>
          <ItemContainer level={props.level + 1}>
            {item.child}
          </ItemContainer>
        </article>
      )}
    </div>
  );
}

export default ItemContainer;
