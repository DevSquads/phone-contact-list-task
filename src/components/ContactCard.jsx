import React from 'react';
const ContactCard = ({contact}) => {
	
	return(

	  	<div>
	        <div className="col-xs-4 col-sm-3">
	        
	            {contact.avatar !== undefined ?  <img src={contact.avatar} alt={contact.first_name} className="img-fluid rounded-circle" /> :
	            						 <img src="img/profile_img.png" alt ={contact.first_name} className="img-fluid rounded-circle" />}
	        	
	        </div>
	        <div className="col-xs-8 col-sm-9">
	            <span className="name">{contact.first_name + ' ' + contact.last_name}</span><br/>
	            
	           
	            
	            
	            
	            <span className="fa fa-comments text-muted c-info"title={contact.email}></span>
	            <span className="visible-xs"> <span className="text-muted">{contact.email}</span><br/></span>
	        </div>
	        <div className="clearfix"></div>
	      </div>
        
    )
}

export default ContactCard;