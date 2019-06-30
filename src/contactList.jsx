import React, { Component } from 'react';
import ContactDetail from './ContactDetail';
import './contacts.css';
import Search from '../src/search'

const contactsAPI = 'https://demo1443058.mockable.io/codeproject_tutorial/api/contacts';
// const contactsAPI = 'https://jsonplaceholder.typicode.com/users';
// const contactsApi = 'contacts.json';


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactList: [],
            searchText: '',
            searchResult: [],
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.returnContactList = this.returnContactList.bind(this);
    }

    handleSearch(searchText) {

        this.setState({ searchResult: [], searchText: searchText });
        this.state.contactList.map(contact => {

            if (searchContact(contact, searchText)) {
                this.setState(prevState => ({
                    searchResult: [...prevState.searchResult, contact]
                }), () => console.log(this.state.searchResult))
            }
        })
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
                <Search onSearch={this.handleSearch} />
                <br />
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

const searchContact = (contact, searchText) => (
    contact.name.toLowerCase().search(searchText.toLowerCase()) !== -1 ||
    contact.surname.toLowerCase().search(searchText.toLowerCase()) !== -1 ||
    contact.phone.toString().search(searchText) !== -1
)


export default Contact;