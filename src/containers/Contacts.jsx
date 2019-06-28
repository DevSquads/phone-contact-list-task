import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import ContactCard from '../components/ContactCard';


const contactsAPI = 'https://reqres.in/api/users';
		
class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      searchResult: [],
      contactList: []
    }

    this.handleNewContact = this.handleNewContact.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.returnContactList = this.returnContactList.bind(this);

  }

  handleSearch(searchText) {
   
    this.setState({searchResult: [], searchText: searchText});
    this.state.contactList.map(contact => {

      if(searchContact(contact, searchText)) {
         this.setState( prevState => ({
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
      .then( response => response.json())
      .then( 
        data => this.setState( 
          prevState => ({
          contactList: [...data.data]
          }) 
        )
      )
    }

  returnContactList() {
   return this.state.searchText ? this.state.searchResult :this.state.contactList
  }

  handleNewContact(newContact) {
  	console.log("Hey00");
  	console.log(newContact);
  	this.setState( prevState => ({
  		contactList: [
  			...prevState.contactList, newContact ]
  		}), () => console.log(this.state.contactList))
  }
  render() {


    return (
    	<div>
         
     		<SearchBar onSearch={this.handleSearch} />
     		<br />
         	
          	<ul className="list-group">
           		{ this.returnContactList().map(
                  (contact) => 
                  <li key={contact.email} className="list-group-item"> 
                    <ContactCard contact = {contact}/>
                  </li>
              	)}
            </ul>
        </div>
    );
  }
}

const searchContact = (contact, searchText) => (
 contact.first_name.toLowerCase().search(searchText.toLowerCase()) !== -1 ||
 contact.last_name.toLowerCase().search(searchText.toLowerCase()) !== -1 ||
 contact.email.search(searchText) !== -1
)

export default Contact;
