import React, { Component } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class SerchBar extends Component {
  render() {
    return (
      <div className="col-11 mb-5">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={e => {
            this.props.HandelSearchChange(e.target.value);
          }}
        />
      </div>
    );
  }
}

export default SerchBar;
