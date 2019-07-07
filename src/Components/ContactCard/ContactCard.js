import React from "react";
import Proptype from "prop-types";
import Img from "../../assets/defaultImg.jpg";

const ContactCard = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="ContactCard-img">
            <img src={props.imgURL} alt="contact" />
            <span>
              <i className="fa fa-phone" aria-hidden="true" />
            </span>
          </div>
        </div>
        <div className="col-md-6">
          <div className="ContactCard-detail">
            <h2>{props.contactName}</h2>
            <span>
              <i
                className="fa fa-trash"
                onClick={()=>props.delete()}
                aria-hidden="true"
              />
            </span>
            <span>
              <i className="fa fa-pencil" aria-hidden="true" />
            </span>
            <p>{props.contactInfo}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

ContactCard.Proptype = {
  contactName: Proptype.string.isRequired,
  imgURL: Proptype.string,
  contactInfo: Proptype.string
};

ContactCard.defaultProps = {
  imgURL: Img,
  contactInfo: "web Developer"
};
export default ContactCard;
