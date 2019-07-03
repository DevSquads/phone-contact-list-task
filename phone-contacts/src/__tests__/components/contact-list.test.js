
import React from "react";
import { create } from "react-test-renderer";
import { render, mount } from 'enzyme';

import ContactList from './../../components/contact-list'

describe('Contact List Component <ContactList/>', () => {

    it('ensure first sate of pagination', () => {
        const component = create(<ContactList />);
        const instance = component.getInstance();
        expect(instance.state.currentPageNum).toBe(1);
        expect(instance.state.veiwedContacts.length).toBe(instance.contactsPerPage);
    });

    it("should shows the expected title", () => {
        const shallow = render(<ContactList />);
        const paragraph = shallow.find("p");
        expect(paragraph.text().trim()).toBe("Contact List");
      
    });
})