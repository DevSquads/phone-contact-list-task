import React, { Component } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./ContList.css";

export default class ContList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-12 col-sm-12 col-lg-6 col-md-12    mt-5 ">
        <div className="PersonItem media">
          <div className="imgContainer   ">
            <img className="imgCircle   " src={this.props.imageU} />
          </div>
          <div className="  media-body">
            <div className="d-inline-block" />
            <h6 className=""> {this.props.name}</h6>
            <small className="text text-secondary">
              To be implemented.........
            </small>
            <div />
          </div>
        </div>
      </div>
    );
  }
}
