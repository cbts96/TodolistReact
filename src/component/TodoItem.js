import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const { handleDelete, handleEdit, title } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>{title}</h6>
        <div className="todo-icon">
          <span className="text-success mx-5">
            <i className="fas fa-pen" onClick={handleEdit}></i>
          </span>
          <span className="text-danger">
            <i className="fas fa-trash" onClick={handleDelete}></i>
          </span>
        </div>
      </li>
    );
  }
}
