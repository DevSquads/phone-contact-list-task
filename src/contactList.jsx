import React, { Component } from 'react';
import ContactDetail from './components/ContactDetail';
import './contacts.css';
import Search from './components/search'

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
            alpha: []
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.returnContactList = this.returnContactList.bind(this);
    }

    handleSearch(searchText) {

        // this.setState({ searchResult: [], searchText: searchText });
        // this.state.contactList.map(contact => {

        //     if (searchContact(contact, searchText)) {
        //         this.setState(prevState => ({
        //             searchResult: [...prevState.searchResult, contact]
        //         }), () => console.log(this.state.searchResult))
        //     }
        // })

        const {contactList} = this.state;
        console.log(contactList)
        const contactsResult = contactList.filter(({name, surname}) => (
            name.toLowerCase().includes(searchText.toLowerCase()) ||
            surname.toLowerCase().includes(searchText.toLowerCase())
        ));
       this.setState({searchResult: [...contactsResult], searchText});
    }
    componentDidMount() {
        let init = {
            method: 'GET',
            headers: new Headers(),
            mode: 'cors',
            cache: 'default'
        };

        fetch(contactsAPI, init)
            .then(response => response.json())
            .then(
                data =>  {
                    const {contacts} = data;
                    contacts.sort(({name: name1}, {name: name2}) => (name1 >= name2) ? 1 : -1);
                    const alpha = contacts.map(item => item.name[0]);
                    this.setState(
                    prevState => ({
                        contactList: [...contacts],
                        alpha
                    }))
                }
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
        const searchResult = this.returnContactList();
        let alphaLabel = '', change = false;

        return (
            <div>
                <Search onSearch={this.handleSearch} />
                <br />
                <ul className="list-group" id="contact-list">
                    {searchResult.map(
                        (contact, idx) => {
                            if(idx == 0 || contact.name.toUpperCase()[0] !== alphaLabel) {
                                alphaLabel =  contact.name.toUpperCase()[0];
                                change = true;
                                // console.log(idx);
                            } else {
                                change = false;
                            }
                            return (
                            
                                <li key={contact.email} className="list-group-item">
                                 {change && <label>{alphaLabel}</label>}
                                <ContactDetail contact={contact} />
                            </li>
                            )
                        
                        }
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