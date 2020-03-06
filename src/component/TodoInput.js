import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, handleSubmit, handleChange, editItem } = this.props;
    return (
      <div>
        <div className="card card-body">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <div className="input-group-text text-white">
                <i className="fas fa-book"></i>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Add Todo Item"
                value={item}
                onChange={handleChange}
              />
            </div>
            <button
            disabled={item?false:true}
              className={
                editItem
                  ? "btn btn-success btn-block mt-3"
                  : "btn btn-primary btn-block mt-3"
              }
            >
              {editItem ? "EDIT NOW" : "ADD ITEM"}
            </button>
          </form>
        </div>
      </div>
    );
  }
}
