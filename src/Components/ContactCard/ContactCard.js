import React from "react";
import Proptype from "prop-types";
import Img from "../../assets/defaultImg.jpg";
import "./ContactCard.module.css";

const ContactCard = props => {
  return (
    <React.Fragment>
      <h2>{props.contactName}</h2>
      <p>{props.contactInfo}</p>
    </React.Fragment>
  );
};

ContactCard.proptype = {
  contactName: Proptype.string.isRequired,
  imgURL: Proptype.string,
  contactInfo: Proptype.string
};

ContactCard.defaultProps = {
  imgURL: Img,
  contactInfo: "web Developer"
};
export default ContactCard;
