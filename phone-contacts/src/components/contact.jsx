import React from 'react';
const Contact = ({contact, backgroundColor = '4a577a', color = 'fff'}) => {
    const [ firstName, lastName ] = contact.name.split(' ');
    contact.img = `https://ui-avatars.com/api/?background=${backgroundColor}&name=${firstName}+${lastName}&color=${color}`
    const  styles = {
        img: {
            width: '3.2rem',
            height: '3.2rem',
            borderRadius: '50%',
            marginRight: '0.5rem'
    
        }, 
        listItem: {
            verticalAlign: 'middle', 
            display: 'inline-block'
        }
    }
    
    return ( <li className="list-group-item ">
        <img style={styles.img} src={contact.img} alt=""/>
        <div style={styles.listItem}>
            <p className="font-weight-bold mb-0">{contact.name}</p>
            <span className="text-muted" style={{ fontSize: '0.9rem' }} >
                {contact.job}
            </span>
        </div>
    </li> );
}
 
export default Contact;