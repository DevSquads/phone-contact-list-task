import React, { Component } from "react";
import "./ContactCard.module.css";

const ContactCard = props => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>{props.contactName}</h2>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactCard;
