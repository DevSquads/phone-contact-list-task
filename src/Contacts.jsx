import React, { Component } from 'react';
import ContactDetail from './ContactDetail';
import './contacts.css';

const contactsAPI = 'https://demo1443058.mockable.io/codeproject_tutorial/api/contacts';
// const contactsAPI = 'https://jsonplaceholder.typicode.com/users';
// const contactsApi = 'contacts.json';


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactList: []
        }
    }
    componentWillMount() {
        let init = {
            method: 'GET',
            headers: new Headers(),
            mode: 'cors',
            cache: 'default'
        };

        fetch(contactsAPI, init)
            .then(response => response.json())
            .then(
                data => this.setState(
                    prevState => ({
                        contactList: [...data.contacts]
                    })
                )
            )

        //   fetch(contactsApi, init)
        //     .then(res => res.json())
        //     .then((data) => {
        //       console.log('data:', data);
        //     })
    }
    returnContactList() {
        return this.state.searchText ? this.state.searchResult : this.state.contactList
    }
    render() {
        return (
            <div>
                <ul className="list-group" id="contact-list">
                    {this.returnContactList().map(
                        (contact) =>
                            <li key={contact.email} className="list-group-item">
                                <ContactDetail contact={contact} />
                            </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default Contact;