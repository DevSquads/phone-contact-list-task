import React, { Component } from 'react';
import Contact from './component/contact'
import {Search} from '@material-ui/icons';
import * as styles from './App.module.css';

class App extends Component {
   inputRef;
  state = {
    contacts: [
      { id: 2, name: "Allan Samuel", discreption: "Content Writer", phoneNumber: "", image: require('./assets/canva-speech-bubble-chat-icon-MACD19Bt9IQ.png') },
      { id: 1, name: "Divan Raj N", discreption: "Visual Designer", phoneNumber: "", image: require('./assets/canva-speech-bubble-chat-icon-MACD19Bt9IQ.png') },
      { id: 3, name: "Anushka Tiwari", discreption: "Marketer", phoneNumber: "", image: require('./assets/canva-speech-bubble-chat-icon-MACD19Bt9IQ.png') },
      { id: 4, name: "Manoj Karthik", discreption: "Web Developer", phoneNumber: "", image: require('./assets/canva-speech-bubble-chat-icon-MACD19Bt9IQ.png') },
      { id: 5, name: "Jhonson", discreption: "Android Developer", phoneNumber: "" },
    ],
    filteredContacts: [
      { id: 2, name: "Allan Samuel", discreption: "Content Writer", phoneNumber: "", image: require('./assets/canva-speech-bubble-chat-icon-MACD19Bt9IQ.png') },
      { id: 1, name: "Divan Raj N", discreption: "Visual Designer", phoneNumber: "", image: require('./assets/canva-speech-bubble-chat-icon-MACD19Bt9IQ.png') },
      { id: 3, name: "Anushka Tiwari", discreption: "Marketer", phoneNumber: "", image: require('./assets/canva-speech-bubble-chat-icon-MACD19Bt9IQ.png') },
      { id: 4, name: "Manoj Karthik", discreption: "Web Developer", phoneNumber: "", image: require('./assets/canva-speech-bubble-chat-icon-MACD19Bt9IQ.png') },
      { id: 5, name: "Jhonson", discreption: "Android Developer", phoneNumber: "" },
    ],
    query: ''
  }
  handleSearch = (e) => {
    const query = e.target.value;
    const {contacts} = this.state;
    const newFilteredContacts = contacts
    // .filter(c => c.name.toLowerCase().includes(query.toLowerCase()));
    .reduce((acc,c) => {
      if(c.name.toLowerCase().includes(query.toLowerCase())){
        return [...acc,c];
      }
      return acc;
    },[]);
    this.setState({query,filteredContacts: newFilteredContacts});
  }; 
  render() {
    let contact_list = (
          this.state.filteredContacts.map(contact => {
            return <Contact
              name={contact.name}
              dis={contact.discreption}
              src={contact.image}
              key={contact.id} />
          })
    )
    return (
      <div className={styles.app}>
        <div className={styles.header}>
          <p> Contact List </p>
          <div className={styles.inputWrapper}>
          <Search className={styles.icon}/>
          <input ref={r => this.inputRef=r} placeholder='Search Contacts' type="text" value={this.state.query}
           onChange={this.handleSearch}/>
          </div>
        </div>
        <div className={styles.data}>
          {contact_list}
        </div>
      </div>
    )
  }
}

export default App;