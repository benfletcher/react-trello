import React from 'react';

const AddChild = (props) => {
  console.log(props)
  return (
    <div className="fa fa-plus-circle" onClick={props.addItem}>
    </div>
  );

};

export default AddChild;
