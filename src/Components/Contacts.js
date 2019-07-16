import React, { Component } from 'react';
import '../Style/Contact.css';


class  Contact extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div className="SingleContact">
                <img src={this.props.image} alt="img"/>
                <p>
                <strong>{this.props.name}</strong>
                <span>{this.props.phone}</span>
                </p>
            </div>
        );
    }
}

export default Contact;