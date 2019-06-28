import React from 'react';
import ContactItem from './Contact-item';
import './Contact-listing.css';
class ContactListing extends React.Component {
    state = {
        search: '',
        data: this.props.data
    };
    handelChange = (e) => {
    }
    handleInputChange = (e) => {
        const value = e.target.value;
        this.setState({ search: value });

    }
    render() {
        return (<>
            <div class="Header">
                <h6 className="contact-header">Contact List</h6>
                <input className="search-sec" type="text" value={this.state.search} onChange={this.handleInputChange} placeholder="Search Contacts" />
            </div>
            <div class="Listing">
                {this.state.data.map(c => <ContactItem key={c.Id} Id={c.Id} FirstName={c.FirstName} SecondName={c.SecondName} JobTitle={c.JobTitle} />)}
            </div>
        </>
        );
    }
}



export default ContactListing;
