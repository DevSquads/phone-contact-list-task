import React from 'react';
import Avatar from 'react-avatar';

const Contact = ({id, name, desc}) => {

    return (
        <li className="contacts-list-item" key={id}>
            <Avatar 
                className="contact-avatar"
                name={name}
                maxInitials={2}
                round={true}
            />
            <div className="contact-data">
                <h3 className="contact-name bp3-heading">{name}</h3>
                <p className="contact-desc bp3-text-muted">{desc}</p>
            </div>
        </li>
    );
}

export default Contact;