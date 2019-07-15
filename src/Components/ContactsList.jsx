import React, { Component } from 'react';
import { InputGroup } from '@blueprintjs/core';

class ContactsList extends Component {
    render = () => {
        return (
            <div className="contacts-list-container">
                <div className="search-container">
                    <InputGroup 
                        className="search-field"
                        fill="true"
                        large="true"
                        leftIcon="search"
                        onChange=""
                        placeholder="Search.."
                        type="text"
                    />
                </div>
                <div className="contacts-container">

                </div>
            </div>
        );
    };
}

export default ContactsList;