import React , { Component } from 'react';
import '../contacts.css';

const ContactCard = ({ contact }) => {

	return (
		<div className="contact-container">
			<div className="col-lg-6 col-xs-4 col-sm-3">
				{contact.photo !== undefined ? <img src={contact.photo} alt={contact.name} className=" contact-img img-fluid rounded-circle" /> :
					<img src="img/profile_img.png" alt={contact.name} className="img-fluid rounded-circle" />}
			</div>
			<div className="col-lg-6 col-xs-8 col-sm-9 contact-details">
				<span className="name">{contact.name + ' ' + contact.surname}</span><br />
				<span className="fa fa-comments text-muted c-info" title={contact.email}></span>
				<span className="visible-xs"> <span className="text-muted">{contact.email}</span><br /></span>
			</div>
			<div className="clearfix"></div>
		</div>

	)
}

export default ContactCard;