import React from 'react';
const Contact = ({contact, backgroundColor = '4a577a', color = 'fff'}) => {
    const [ firstName, lastName ] = contact.name.split(' ');
    contact.img = `https://ui-avatars.com/api/?background=${backgroundColor}&name=${firstName}+${lastName}&color=${color}`
    const imgStyle = {
        width: '3.2rem',
        height: '3.2rem',
        borderRadius: '50%',
        marginRight: '0.5rem'

    }
    return ( <li className="list-group-item d-flex">
        <img style={imgStyle} src={contact.img} alt=""/>
        <div className="d-flex flex-column">
            <p className="font-weight-bold mb-0">{contact.name}</p>
            <span className="text-muted" style={{ fontSize: '0.9rem' }} >
                {contact.job}
            </span>
        </div>
    </li> );
}
 
export default Contact;