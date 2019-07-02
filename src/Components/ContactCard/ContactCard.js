import React from "react";
import Proptype from "prop-types";
import Img from "../../assets/defaultImg.jpg";

const ContactCard = props => {
  return (
    <React.Fragment>
      <div className="ContactCard-img">   
        <img src={props.imgURL} alt="contact" />
        <span>
          <i className="fa fa-phone" aria-hidden="true" />
        </span>
      </div>
      <div className="ContactCard-detail">
        <h2>{props.contactName}</h2>
        <span>
          <i className="fa fa-trash" aria-hidden="true" />
        </span>
        <span>
          <i className="fa fa-pencil" aria-hidden="true" />
        </span>
        <p>{props.contactInfo}</p>
      </div>
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
