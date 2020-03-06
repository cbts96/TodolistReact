import React, { Component } from "react";
import "./App.css"
import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";
import { v4 as uuidv4 } from "uuid";
export default class App extends Component {
  state = {
    items: [],
    id: uuidv4(),
    item: "",
    editItem: false
  };
  handleChange = e => {
    this.setState({ item: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    };
    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items: updatedItems,
      item: "",
      id: uuidv4(),
      editItem: false
    });
  };
  clearList = () => {
    this.setState({ items: [] });
  };
  handleDelete = id => {
    const filterItem = this.state.items.filter(item => item.id !== id);
    this.setState({ items: filterItem });
  };
  handleEdit = id => {
    const filterItem = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);
    this.setState({
      items: filterItem,
      item: selectedItem.title,
      id: id,
      editItem: true
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-10 mt-5 mx-auto">
              <h3 className="text-capitalize text-center">todo input</h3>
              <TodoInput
                item={this.state.item}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem}
              />
              <TodoList
                items={this.state.items}
                clearList={this.clearList}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
