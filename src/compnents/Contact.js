import React , {Component} from "react";
class Contact extends Component {

   render() {
     return (
        <li>
              <div class="rowDirection">
                <img className="image" src={this.props.contact.image} alt=""/>
                <div class="text-style"> 
                <p className="nameText">{this.props.contact.name}</p>
                <span className="companyText">{this.props.contact.company}</span>
                </div>
                </div>
        </li>
        )}
 }
 
 
 export default Contact;