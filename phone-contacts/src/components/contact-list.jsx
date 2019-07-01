import React, { Component } from 'react';
import { getContacts } from './../services/fakeContactsService.js';
import Contact from './contact.jsx';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from "@material-ui/icons/Search";



class ContactList extends Component {
    state = {
        contacts: [],
        searchQuery: ""
    }
    headerStyle = {
        padding: '1rem 0',
        background: 'rgb(74, 87, 122)',
        color: 'white',
        textAlign: 'center'
    }

    componentDidMount() {
        this.setState({ contacts: getContacts() });
    }

    render() {
        const { contacts: allContacts, searchQuery } = this.state;
        let contacts = allContacts;
        if (searchQuery)
            contacts = contacts.filter(contact => contact.name.toLowerCase().startsWith(searchQuery.toLowerCase()));

        return (
            <React.Fragment>
                <div style={this.headerStyle}>
                    <p> Contact List </p>
                    <TextField
                        type="search"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                            placeholder: 'Search Contacts',
                            margin: 'dense',
                            style: {
                                color: 'white'
                            }
                        }}
                        variant='outlined'
                        style={{ borderColor: 'white' }}
                        onChange={(e) => this.handleSearch(e.target.value)}
                    />
                </div>
                {!contacts.length && <p className="text-center mt-2"> No results </p>}

                {   contacts.length == 0 &&
                    <ul className="list-group">
                        {contacts.map(contact => <Contact contact={contact} key={contact._id} />)}
                    </ul>
                }
            </React.Fragment>);
    }


    handleSearch = (searchQuery) =>
        this.setState({ searchQuery })
}

export default ContactList;