import React from 'react';
import { shallow, mount } from 'enzyme';
import search from '../components/search';
import ShallowRenderer from 'react-test-renderer/shallow';


describe('Search component', () => {
    test("renders", () => {
        const wrapper = shallow(<search />);

        expect(wrapper.exists().toBe(true));
    })
});