import React, { Component } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./ContList.css";

export default class ContList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-6  mt-5 ">
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

{
  /* <div class="media">
  <img src="..." class="mr-3" alt="...">
  <div class="media-body">
    <h5 class="mt-0">Media heading</h5>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
  </div>
</div> */
}
