
import React from "react";
import { create } from "react-test-renderer";
import { render, mount, shallow } from 'enzyme';

import Contact from './../../components/contact';

describe( 'Contact Component <Contact/>', () => {
    const contact = {
        name: 'Doaa Ismael', 
        phone: '45465464', 
        job: "Software Engineer"
    }

    it('should set contact Img correctly', () => {
        const wrapper = render(<Contact  contact={contact}/>);
        console.log("Component: ", wrapper.find('img'));
        const instance = component.getInstance();
    });

})