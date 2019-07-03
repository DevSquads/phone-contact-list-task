import React from 'react';
import { shallow, mount } from 'enzyme';
import ContactList from '../contactList';
import ContactList from '../components/ContactDetail';
import ShallowRenderer from 'react-test-renderer/shallow';


describe('ContactList', () => {
    it('should render contact list correctly ', () => {
  
        const renderer = new ShallowRenderer();
        renderer.render(<ContactList />);
        const result = renderer.getRenderOutput();

        expect(result.type).toBe('div');
        expect(result.props.children).toEqual([
            <ul className="list-group" id="contact-list">
            {this.returnContactList().map(
                (contact) =>
                    <li key={contact.email} className="list-group-item">
                        <ContactDetail contact={contact} />
                    </li>
            )}
        </ul>
        ]);
        });
});