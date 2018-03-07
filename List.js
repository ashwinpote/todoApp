import React from 'react';
import Item from './Item';

class List extends React.Component {
    render() {
      return (
        <ul className="todolist">
          {this.props.items.map(item => (
            <Item key={item.id} id={item.id} text={item.text} onDeleteItem={this.props.onDeleteItem} />
          ))}
        </ul>
      );
    }
  }

  export default List;