import React, { Component } from 'react';
import { InputGroup } from '@blueprintjs/core';
import { getContacts } from '../DataSource/ContactsData';
import Contact from './Contact';

class ContactsList extends Component {
    state = {
        Contacts: getContacts()
    }

    handleSearch = (searchText) => {
        this.setState({
            Contacts: getContacts(searchText)
        });
    };

    render = () => {
        return (
            <div className="contacts-list-container">
                <div className="search-container">
                    <InputGroup 
                        className="search-field"
                        fill="true"
                        large="true"
                        leftIcon="search"
                        onChange={(event) => this.handleSearch(event.target.value)}
                        placeholder="Search.."
                        type="search"
                    />
                </div>
                <div className="contacts-container">
                    <ul className="contacts-list bp3-list-unstyled">
                        {this.state.Contacts.map((contact) => 
                            <Contact
                                id={contact.id}
                                name={contact.name}
                                desc={contact.desc}
                            />
                        )}
                    </ul>
                </div>
            </div>
        );
    };
}

export default ContactsList;