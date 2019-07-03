
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
        expect(wrapper.find('img').prop('src')).toEqual(`https://ui-avatars.com/api/?background=4a577a&name=Doaa+Ismael&color=fff`);
    });

})