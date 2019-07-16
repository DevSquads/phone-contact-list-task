import React from 'react';
import { shallow } from 'enzyme';
import Contact from '../Components/Contact';
import Avatar from 'react-avatar';

describe('ContactsList', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<Contact />));

    it('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('renders the contact data div', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('renders an avatar component', () => {
        expect(wrapper.containsMatchingElement(<Avatar />)).toEqual(true);
    });
});