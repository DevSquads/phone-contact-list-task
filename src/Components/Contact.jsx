import React from 'react';

const Contact = ({ikey, name, desc}) => {

    return (
        <li className="contacts-list-item" key={ikey}>
            <img  />
            <div className="contact-data">
                <h3 className="contact-name bp3-heading">{name}</h3>
                <p className="contact-desc bp3-text-muted">{desc}</p>
            </div>
        </li>
    );
}

export default Contact;