import React, { Component } from "react";
import Contactitem from "./Contactitem";
import PropTypes from "prop-types";

export class Contacts extends Component {
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
    let filteredcontatcs = this.props.contacts.filter(contact => {
      return contact.name.indexOf(this.state.search) !== -1;
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
        {filteredcontatcs.map(contact => (
          <h3>
            <Contactitem key={contact.id} contact={contact} />
          </h3>
        ))}
      </div>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired
};

export default Contacts;
