import React from 'react';
import { shallow } from 'enzyme';
import ContactsList from '../Components/ContactsList';
import { InputGroup } from '@blueprintjs/core';

describe('ContactsList', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<ContactsList />));

    it('renders the contacts list divs', () => {
        expect(wrapper.find('div').length).toEqual(3);
    });

    it('renders an input group for the search field', () => {
        expect(wrapper.containsMatchingElement(<InputGroup />)).toEqual(true);
    });

});