import React from 'react';
import { shallow } from 'enzyme';
import Contact from '../Components/Contact';

describe('ContactsList', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<Contact />));

    it('renders the contacts list divs', () => {
        expect(wrapper.find('div').length).toEqual(2);
    });
});