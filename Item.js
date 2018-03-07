import React, { Component } from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
  }
  deleteItem(event) {
    this.props.onDeleteItem(this.props.id);
  }
  render() {
    var itemClass = "form-check todoitem " + (this.props.completed ? "done" : "undone");
    return (
      <li className={itemClass} ref={li => this._listItem = li }>
        <label className="form-check-label">
          {this.props.text}
        </label>
        <button type="button" className="btn btn-danger btn-sm" onClick={this.deleteItem}>x</button>
      </li>
    );
  }
}

export default Item;
