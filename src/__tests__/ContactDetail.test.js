import React from 'react';
import { shallow, mount } from 'enzyme';
import ContactList from '../contactList';
import ContactList from '../components/ContactDetail';
import ShallowRenderer from 'react-test-renderer/shallow';


describe('ContactList', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<ContactList />));

    it('should render contact list correctly ', expect(wrapper).toMatchSnapshot());
});