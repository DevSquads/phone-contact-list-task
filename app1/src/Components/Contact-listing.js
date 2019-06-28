import React from 'react';
import ContactItem from './Contact-item';
import './Contact-listing.css';
class ContactListing extends React.Component {
    state = {
        search: '',
        data: this.props.data,
        filteredData: this.props.data,
    };
    handelChange = (e) => {
        const search = e.target.value;
        this.setState({ search: search });
        this.setState(prevState => {
            const filteredData = prevState.data.filter(element => {

                return (element.FullName.toLowerCase().includes(search.toLowerCase()));


            });
            return {
                search,
                filteredData
            };
        });
    }

    render() {
        return (<>
            <div class="Header">
                <h6 className="contact-header">Contact List</h6>
                <input className="search-sec" type="text" value={this.state.search} onChange={this.handelChange} placeholder="Search Contacts" />
            </div>
            <div class="Listing">
                {this.state.filteredData.map(c => <> <ContactItem key={c.Id} Id={c.Id} FullName={c.FullName} JobTitle={c.JobTitle} /> <div class="line"></div></>)}
            </div>
        </>
        );
    }
}



export default ContactListing;
