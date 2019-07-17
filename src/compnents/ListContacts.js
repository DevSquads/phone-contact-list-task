import React, { Component } from "react";
import Contact from "./Contact"


class ListContacts extends Component {

    constructor(){
        super();
            this.state = {
                search: '',
            };    
    }
    updateSearch(event){
     this.setState({search : event.target.value})
    }
    render() {
        let filteredContacts =  this.props.contacts.filter(
            (contact) => {
                return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase())  !== -1 ; 
            }
        ) ;
        return (
            <div className="App">
                {/* search section */}
                <div style={{ minHeight: '13vh', backgroundColor: 'rgb(52, 71, 103)', textAlign: 'center', paddingTop: '5vh' }}>
                    <span style={{ fontSize: '14', color: '#fff' , fontWeight:'bold' }}>Contact List</span>
                    <form className="search-form">
                        <input className="search-bar"
                            onChange={this.updateSearch.bind(this)}
                            type="text"
                            placeholder="Search Contacts"
                            value={this.state.search}>
                        </input>
                    </form>
                </div>
                {/* list section */}
                    <ul className="list-style">
                        <div style={{ overflow: 'auto' }}>
                            {filteredContacts.map(contact => {
                                return <Contact contact={contact} key={contact.id} />
                            })}
                        </div>
                    </ul>
            </div>
        )
    }
}
export default ListContacts;