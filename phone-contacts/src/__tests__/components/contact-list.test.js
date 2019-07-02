
import React from "react";
import { create } from "react-test-renderer";

import ContactList from './../../components/contact-list'

describe('Contact List Component <ContactList/>', () => {

    it('ensure first sate of pagination', () => {
        const component = create(<ContactList />);
        const instance = component.getInstance();
        expect(instance.state.currentPageNum).toBe(1);
        expect(instance.state.veiwedContacts.length).toBe(instance.contactsPerPage);
    });

    it("should shows the expected title", () => {
        const component = create(<ContactList />);
        const rootInstance = component.root;
        const paragraph = rootInstance.findByType("p");
        console.log(paragraph)
      
    });
})