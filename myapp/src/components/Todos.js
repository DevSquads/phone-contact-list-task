import React, { Component } from "react";
import Todoitem from "./Todoitem";
import PropTypes from "prop-types";

export class Todos extends Component {
  constructor() {
    super();
    this.state = {
      search: ""
    };
  }
  UpdateSearch(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    let filteredcontatcs = this.props.todos.filter(todo => {
      return todo.name.indexOf(this.state.search) !== -1;
    });
    return (
      <div>
        <div
          style={{
            background: "#264d73",
            paddingLeft: "70px"
          }}
        >
          <input
            type="Text"
            value={this.state.search}
            onChange={this.UpdateSearch.bind(this)}
            style={{ background: "#264d73", color: "#f8f8f8" }}
          />
        </div>
        {filteredcontatcs.map(todo => (
          <h3>
            <Todoitem key={todo.id} todo={todo} />
          </h3>
        ))}
      </div>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Todos;
