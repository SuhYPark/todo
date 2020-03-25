import React, { Component } from "react";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      currentTodo: ""
    };
  }

  handleChange = event => {
    this.setState.currentTodo += event.target.value;
    console.log(event.target.value);
    console.log(this.setState.currentTodo);
  };

  addItem = event => {
    event.preventDefault();
    console.log("the add item method executed");
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.addItem}>
          <label htmlFor="taskName">Task Name:</label>
          <input
            onChange={this.handleChange}
            name="taskName"
            placeholder="Place your ToDo here"
          />
          <button type="submit">Add Task Here</button>
        </form>
        <ul></ul>
      </div>
    );
  }
}

export default TodoList;
