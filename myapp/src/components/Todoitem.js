import React, { Component } from "react";
import PropTypes from "prop-types";

export class Todoitem extends Component {
  getStyle = () => {
    return {
      background: "#f8f8f8",
      padding: "15px",
      borderBottom: "3px #ccc solid",
      paddingLeft: "135px",
      marginTop: "-70px"
    };
  };

  render() {
    const { name, career, picture } = this.props.todo;
    return (
      <div>
        <div
          style={{
            paddingRight: "200px",
            background: "#f8f8f8"
          }}
        >
          <img src={picture} style={{ width: "100px", height: "100px" }} />
        </div>
        <div style={this.getStyle()}>
          <p style={{ color: "#264d73" }}>{name}</p>
          <p style={{ fontSize: 13, color: "#595959" }}>{career}</p>
        </div>
      </div>
    );
  }
}

Todoitem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default Todoitem;
