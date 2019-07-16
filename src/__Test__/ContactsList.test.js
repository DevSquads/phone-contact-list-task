import React from 'react';
import { mount, shallow } from 'enzyme';
import ContactsList from '../Components/ContactsList';
import { InputGroup } from '@blueprintjs/core';
import Contact from '../Components/Contact';

describe('ContactsList', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<ContactsList />));

    it('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('renders the contacts list divs', () => {
        expect(wrapper.find('div').length).toEqual(3);
    });

    it('renders an input group for the search field', () => {
        expect(wrapper.containsMatchingElement(<InputGroup />)).toEqual(true);
    });

    it('renders the Contact Component', () => {
        expect(wrapper.containsMatchingElement(<Contact />)).toEqual(true);
    });

});

describe('mounted ContactsList', () => {
    let wrapper;
    beforeEach(() => wrapper = mount(<ContactsList />));
    
    it('returns the searched contact', () => {
        const input = wrapper.find('input');
        wrapper.instance().forceUpdate();
        input.simulate('change', { target: { value: 'george' } })
        expect(wrapper.instance().state.Contacts[0].name).toEqual('George Martin');
    });

    it('returns -only- the searched contact', () => {
        const input = wrapper.find('input');
        wrapper.instance().forceUpdate();
        input.simulate('change', { target: { value: 'w' } })
        expect(wrapper.instance().state.Contacts.length).toEqual(2);
    });
    
});