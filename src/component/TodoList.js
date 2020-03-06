import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <div>
        <ul className="list-group my-5">
          <h3 className="text-capitalize text-center">Todo List</h3>
          {items.map((value, key) => {
            return (
              <TodoItem
                key={value.id}
                title={value.title}
                handleDelete={() => handleDelete(value.id)}
                handleEdit={() => handleEdit(value.id)}
              />
            );
          })}
          <button
            className="text-uppercase btn btn-secondary btn-block"
            onClick={clearList}
          >
            Clear list
          </button>
        </ul>
      </div>
    );
  }
}
