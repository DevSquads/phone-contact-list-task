import React, { Component } from "react";

export default class ContList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //just a basic test of data
    return <div>{this.props.name}</div>;
  }
}
