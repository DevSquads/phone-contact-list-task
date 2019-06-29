import React, { Component } from "react";
import ContactCard from "../../Components/ContactCard/";
import Img from "../../assets/contactImg.jpg";
import "./ContactList.module.css";

class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {
          _id: "12345a",
          img: Img,
          contactName: "Fatma Reda",
          contactInfo: "Web Developer"
        },
        {
          _id: "12345b",
          img: Img,
          contactName: "Aya Reda",
          contactInfo: "Content Writer"
        },
        {
          _id: "12345c",
          img: Img,
          contactName: "Hager Hassan",
          contactInfo: "Marketer"
        }
      ]
    };
  }

  render() {
    let contactList = this.state.contacts ? (
      this.state.contacts.map(contact => {
        return (
          <li className="list-group-item" key={contact._id}>
            <ContactCard
              contactName={contact.contactName}
              imgURL={contact.img}
              contactInfo={contact.contactInfo}
            />
          </li>
        );
      })
    ) : (
      <div>not found</div>
    );
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center">
            <ul className="list-group list-group-flush">{contactList}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactList;
