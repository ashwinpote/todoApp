import React from 'react';
import ReactDOM from 'react-dom';
import '../src/App.css';
import Item from './components/Item';
import List from './components/List';

class App extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        items: [],
        text: ""
      };

      this.TextChange = this.TextChange.bind(this);
      this.AddItem = this.AddItem.bind(this);
      this.DeleteItem = this.DeleteItem.bind(this);
    }
    TextChange(event) {
      this.setState({
        text: event.target.value
      });
    }
    AddItem(event) {
      event.preventDefault();

      var newItem = {
        id: Date.now(),
        text: this.state.text,
        done: false
      };

      this.setState((prevState) => ({
        items: prevState.items.concat(newItem),
        text: ""
      }));
    }
    DeleteItem(itemId) {
      var updatedItems = this.state.items.filter(item => {
        return item.id !== itemId;
      });

      this.setState({
        items: [].concat(updatedItems)
      });
    }
    render() {
        var count = this.state.items.length > 0 ? "#" + (this.state.items.length) : null;
      return (
        <div className="mainContainer">
          <h3 className="apptitle">MY TO DO ITEMS {count}</h3>
          <form className="row">
            <div className="col-md-3">
              <input type="text" placeholder="Enter your item" className="form-control" onChange={this.TextChange} value={this.state.text} />
            </div>
            <div className="col-md-3">
              <button className="btn btn-primary" onClick={this.AddItem} disabled={!this.state.text}>Submit</button>
            </div>
          </form>
          <div className="row">
            <div className="col-md-3">
              <List items={this.state.items} onItemCompleted={this.markItemCompleted} onDeleteItem={this.DeleteItem} />
            </div>
          </div>
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById("root"));
