import React from 'react';
import ContactItem from './Contact-item';
import './Contact-listing.css';
const ContactListing = (props) => {
    return (<>
        <div class="Header">
            <h6 className="contact-header">Contact List</h6>
            <input className="search-sec" type="text" placeholder="Search Contacts" />
        </div>
        <div class="Listing">
            <ContactItem />
        </div>
    </>
    );
}


export default ContactListing;
