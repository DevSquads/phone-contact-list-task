import React, { Component } from 'react';
import { getContacts, filterContacts } from './../services/fakeContactsService.js';
import Contact from './contact.jsx';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from "@material-ui/icons/Search";



class ContactList extends Component {
    state = {
        contacts: [],
        veiwedContacts: [], 
        currentPageNum: 0
    }
    styles= {
        header: {
            padding: '1rem 0',
            background: 'rgb(74, 87, 122)',
            color: 'white',
            textAlign: 'center'
        }, 
        list: {
            overflowY: "auto",
            height:" calc(100vh - 7rem)" 
        }
    }
    contactsPerPage = 10;
    
    componentDidMount() {
        this.setState({ veiwedContacts: getContacts()});
        console.log(getContacts())
        //this.paginate();
    }

    render() {
        const { veiwedContacts } = this.state;
            
        return (
            <React.Fragment>
                <div style={this.styles.header}>
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
                {!veiwedContacts.length && <p className="text-center mt-2"> No results </p>}

                {   veiwedContacts.length !== 0 &&
                    <ul className="list-group" style={this.styles.list}>
                        {veiwedContacts.map(contact => <Contact contact={contact} key={contact._id} />)}
                    </ul>
                }
            </React.Fragment>);
    }

    handleSearch = (searchQuery) => {
        this.setState({ veiwedContacts: filterContacts(searchQuery), currentPageNum: 0 })
    }

    paginate = () => {
        const { currentPageNum, veiwedContacts, contacts } = this.state;
        const slicingIndex = currentPageNum * this.contactsPerPage;
        if(slicingIndex > contacts.length)
            return;
        const newContacts = veiwedContacts.concat(contacts.slice(slicingIndex, slicingIndex + this.contactsPerPage));
        this.setState({veiwedContacts: newContacts, currentPageNum: currentPageNum + 1})
    }
        
}

export default ContactList;