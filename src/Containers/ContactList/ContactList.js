import React, { Component } from "react";
import ContactCard from "../../Components/ContactCard/";
import Img from "../../assets/contactImg.jpg";

class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {
          _id: "12345a",
          img: Img,
          contactName: "Fatma Reda"
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
        },
        {
          _id: "12345d",
          img: Img,
          contactName: "Fatma Alaa",
          contactInfo: "Marketer"
        },
        {
          _id: "12345e",
          contactName: "Abd El Rahman"
        },
        {
          _id: "12345f",
          contactName: "Ahmed Waheed"
        }
      ],
      search: ""
    };
  }
  changeHandler = event => {
    this.setState({
      search: event.target.value.substr(0, 15)
    });
  };
  render() {
    let filteredContacts = this.state.contacts.filter((c)=>{
      return c.contactName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    });
    let contactList = filteredContacts ? (
      filteredContacts.map(contact => {
        return (
          <li className="list-group-item ContactCard" key={contact._id}>
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
      <div className="container ContactList">
        <div className="row d-flex justify-content-center">
          <div className="col-md-12 col-sm-6 ContactList-head">
            <h4 className="col-md-3 col-sm-3 ContactList-head__title"> Contact List</h4>
            <input className="col-md-3 col-sm-3 ContactList-head__search"
              type="text"
              value={this.state.search}
              onChange={event => this.changeHandler(event)}
              placeholder="Search"
            />
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-8 col-sm-6">
            <ul className="list-group list-group-flush">{contactList}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactList;
